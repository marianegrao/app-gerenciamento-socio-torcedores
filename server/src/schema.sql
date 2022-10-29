CREATE DATABASE "";

CREATE TABLE IF NOT EXISTS users (
	  id SERIAL PRIMARY KEY,
  	name TEXT NOT NULL,
  	email TEXT NOT NULL UNIQUE,
  	password TEXT NOT NULL,
    status TEXT DEFAULT 'inactive'
);

CREATE TABLE IF NOT EXISTS clubs (
	  id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    insignia  TEXT NOT NULL,
    monthly_subscription INTEGER NOT NULL,
    instagram TEXT,
    website TEXT,
    twitter TEXT
);

CREATE TABLE IF NOT EXISTS subscriptions (
	  id SERIAL PRIMARY KEY,
  	id_club INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    due_date DATE NOT NULL,
    status TEXT DEFAULT 'inactive',
  	FOREIGN KEY (id_club) REFERENCES clubs (id),
    FOREIGN KEY (id_user) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS monthy_subscriptions_invoices(
	  id SERIAL PRIMARY KEY,
  	id_subscription INTEGER NOT NULL,
    club_name TEXT NOT NULL,
    monthly_payment INTEGER NOT NULL,
    due_date DATE NOT NULL,
    status TEXT DEFAULT 'pending',
  	FOREIGN KEY (id_subscription) REFERENCES subscriptions (id)
);
