import pgp from "pg-promise";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import axios from "axios";
import * as sql from "./sql";

export async function migrateDB() {
  const connection = getDBConnection();
  return await sql.migration(connection);
}

export function getDBConnection() {
  return pgp()({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT || "") || undefined,
    database: process.env.DB_NAME,
  });
}

export function parseCommandArguments(): any {
  return yargs(hideBin(process.argv)).argv;
}

export async function fetchUserFull(username: string) {
  const user = await fetchUser(username);
  const repos = await fetchUserRepos(username);
  const language = filterHighestPropertyValue(groupRepoLanguages(repos));
  return { ...user, language };
}

export async function fetchUser(username: string) {
  return await (
    await axios.get(`${process.env.API_URL}/users/${username}`)
  ).data;
}

export async function fetchUserRepos(username: string) {
  return await (
    await axios.get(`${process.env.API_URL}/users/${username}/repos`)
  ).data;
}

export function groupRepoLanguages(repos: any[]) {
  const languages: any = {};
  repos.forEach((repo: any) => {
    languages[repo.language]
      ? (languages[repo.language] += 1)
      : (languages[repo.language] = 1);
  });
  return languages;
}

export function filterHighestPropertyValue(obj: any) {
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
}

export async function insertUserToDB(user: any) {
  const connection = getDBConnection();
  return await sql.insertUser(connection, user);
}

export async function updateUserLanguage(user: any) {
  const connection = getDBConnection();
  return await sql.updateUserLanguage(connection, {
    language: user.language,
    id: user.id,
  });
}

export async function getAllUsers() {
  const connection = getDBConnection();
  return await sql.findAllUsers(connection);
}

export async function getUsersByLocation(location: string) {
  const connection = getDBConnection();
  return await sql.findUsersByLocation(connection, { location });
}

export async function getUsersByProgrammingLanguage(lang: string) {
  const connection = getDBConnection();
  return await sql.findUsersByProgrammingLanguage(connection, { lang });
}

export function logData(data: any) {
  console.table(data);
  return;
}

export function exit() {
  return process.exit();
}
