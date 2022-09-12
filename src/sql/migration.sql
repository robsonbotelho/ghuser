CREATE TABLE public.users (
  id serial4 NOT NULL,
  username varchar NULL,
  "name" varchar NULL,
  "location" varchar NULL,
  followers int4 NULL,
  "following" int4 NULL,
  programming_language varchar NULL,
  CONSTRAINT users_pk PRIMARY KEY (id)
);