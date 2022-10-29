CREATE DATABASE "";

CREATE TABLE IF NOT EXISTS users (
	  id SERIAL PRIMARY KEY,
  	name TEXT NOT NULL,
  	email TEXT NOT NULL UNIQUE,
  	password TEXT NOT NULL,
    status TEXT DEFAULT "active"
);

CREATE TABLE IF NOT EXISTS clubs (
	  id SERIAL PRIMARY KEY,
    id_user INTEGER NOT NULL,
  	name TEXT NOT NULL UNIQUE,
    instagram TEXT,
    website TEXT,
    twitter TEXT
);

CREATE TABLE IF NOT EXISTS subscriptions (
	  id SERIAL PRIMARY KEY,
  	id_club INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    monthly_payment INTEGER NOT NULL,
    due_date DATE NOT NULL DEFAULT NOW(),
    status BOOLEAN DEFAULT true,
  	FOREIGN KEY (id_club) REFERENCES clubs (id),
    FOREIGN KEY (id_user) REFERENCES users (id)
);