// Generated by sqltyper from migration.sql.
// Do not edit directly. Instead, edit migration.sql and re-run sqltyper.


import * as pgp from 'pg-promise'

export async function migration(
  client: pgp.IDatabase<any, any>
): Promise<Array<{  }>> {
    const result = await client.query(`\
CREATE TABLE public.users (
  id serial4 NOT NULL,
  username varchar NULL,
  "name" varchar NULL,
  "location" varchar NULL,
  followers int4 NULL,
  "following" int4 NULL,
  programming_language varchar NULL,
  CONSTRAINT users_pk PRIMARY KEY (id)
);`)
    return result
}