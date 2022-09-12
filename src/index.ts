#!/usr/bin/env node
import "dotenv/config";
import R from "ramda";
import {
  fetchUser,
  insertUserToDB,
  parseCommandArguments,
  logData,
  exit,
  getAllUsers,
  getUsersByLocation,
  getUsersByProgrammingLanguage,
  fetchUserFull,
  migrateDB,
} from "./functions";

const main = () => {
  const argv = parseCommandArguments();

  if (argv.migrate === true) {
    R.composeWith(R.andThen)([exit, migrateDB])();
  }

  if (typeof argv.fetch === "string") {
    R.composeWith(R.andThen)([exit, logData, insertUserToDB, fetchUserFull])(
      argv.fetch
    );
  }

  if (typeof argv.list === "boolean") {
    if (argv.location) {
      R.composeWith(R.andThen)([exit, logData, getUsersByLocation])(
        argv.location
      );
    } else if (argv.lang) {
      R.composeWith(R.andThen)([exit, logData, getUsersByProgrammingLanguage])(
        argv.lang
      );
    } else {
      R.composeWith(R.andThen)([exit, logData, getAllUsers])();
    }
  }
};

main();
