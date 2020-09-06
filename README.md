# PERN-Todo
This app purpose is to add list of things you want to do 
and as my study implementation

## Languages and Tools

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img alt="Insomnia" src="https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/-PostgreSQL-13aa52?style=flat-square&logo=postgresql&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
</p>

## Local Usage
make sure you have already installed postgreSQL
```bash
git clone https://github.com/nofamex/PERN-Todo
```
create a new local database in your machine
```sql
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```
in the client directory run
```bash
yarn start
```
in the server directory run
```bash
npm start
```
