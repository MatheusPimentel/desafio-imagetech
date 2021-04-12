# desafio-imagetech

banco de dados:
CREATE DATABASE desafio
  WITH OWNER = postgres
    ENCODING = 'UTF8'
    TABLESPACE = pg_default;

CREATE TABLE public.users (
  id SERIAL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  avatar VARCHAR(100),
  active BOOLEAN DEFAULT true NOT NULL,
  "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE,
  "updatedAt" TIMESTAMP(0) WITHOUT TIME ZONE,
  password VARCHAR(100),
  CONSTRAINT user_email_key UNIQUE(email),
  CONSTRAINT user_pkey PRIMARY KEY(id)
) ;

ALTER TABLE public.users
  ALTER COLUMN id SET STATISTICS 0;

ALTER TABLE public.users
  ALTER COLUMN name SET STATISTICS 0;

ALTER TABLE public.users
  ALTER COLUMN email SET STATISTICS 0;

ALTER TABLE public.users
  ALTER COLUMN avatar SET STATISTICS 0;

ALTER TABLE public.users
  ALTER COLUMN active SET STATISTICS 0;

ALTER TABLE public.users
  OWNER TO postgres;

----------------------------------

frontend:
- npm install
- quasar dev

backend
- npm install
- npm run startdev
