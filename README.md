# Getting Started

## 1. Clone this repo and cd into directory
```
git clone {repo_url} ghuser && cd ghuser
```

## 2. Create a .env file
```
cp .env.example .env
```
Edit the `.env` file according to your own local database settings (just keep que API_URL as is).

## 3. Install node modules
```
npm install
```

## 4. Build from typescript source
```
npm run build
```

# Using the CLI

### Migrating the database
```
ghuser --migrate
```
The above command will create a new table called `users` in your previous defined database.

## Search for a github user
```
ghuser --fetch robsonbotelho
```

## Fetch all users in database
```
ghuser --list
```

## List users from a specific location
```
ghuser --list --location=Brasil
```

## List users per programming language
```
ghuser --list --lang=TypeScript
```
