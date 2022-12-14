// Generated by sqltyper from find-all-users.sql.
// Do not edit directly. Instead, edit find-all-users.sql and re-run sqltyper.


import * as pgp from 'pg-promise'

export async function findAllUsers(
  client: pgp.IDatabase<any, any>
): Promise<Array<{ 'id': number; 'username': string | null; 'name': string | null; 'location': string | null; 'followers': number | null; 'following': number | null; 'programming_language': string | null }>> {
    const result = await client.query(`\
SELECT * FROM users;`)
    return result
}
