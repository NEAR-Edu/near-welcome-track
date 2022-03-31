# Welcome Track

This repository contains the Welcome Track website project.

## Development

### Requirements

In order to run this project locally you will have to have the following tools installed on your system:

- [Node.Js](https://nodejs.org/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/install/)
- Or [Docker Desktop](https://docs.docker.com/desktop/#download-and-install) which will install the above two tools for you

### Set up

Before running the project here are the commands you should run in your terminal:

```bash
# Install node modules
npm ci
```

```bash
# Run the database in the background
npm run run-db
```

```bash
# Run any migrations that have not been synced to your database instance
npm run migration:deploy
```

```bash
# Run the dev server
npm run dev
# This will also run the database in the background if it is not running already
```

### Changing/creating database models

If you want to make changes to the database structure, you can do so by editing the [schema.prisma](/prisma/schema.prisma) file.

You can find a reference of the schema language [here](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference).

After making the changes to the schema, you can create a migration for the changes by running the following command:

```bash
npm run migration:deploy
# This will create the migration file and run any pending migrations including the newly created one
```

```bash
npm run migration:create
# This will only create the migration file without running any migrations
```
