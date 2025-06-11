# README

## Git + GitHub [GUIDE](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

### Initialize the local directory as a Git repository

By default, the initial branch is called main.

```bash
git init -b main
```

### Add the files in your new local repository

his stages them for the first commit.

```bash
git add .
```

### Commit the files that you've staged in your local repository

```bash
git commit -m "First commit"
```

### Authenticate on GitHub

```bash
git config --global user.email "your_email@domain.com"
```

```bash
git config --global user.name "Your Name"
```

When asked to login on GitHub, instead of inserting your GitHub credentials, paste yout GitHub token.

### Adding a local repository to GitHub using Git

Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files.

```bash
git remote add origin REMOTE-URL
```

### To push the changes in your local repository to GitHub

```bash
git push origin main
```

## Anaconda environment

### Create a nodejs virtual environment

```bash
conda create -y -n env_name nodejs
```

To specify a nodejs version, you can run:

```bash
conda create -y -n env_name nodejs=version
```

Then, check the following installations:

```bash
node --version && npm --version
```

```bash
which node && which npm
```

### Create a Python virtual environment

```bash
conda create -y -n env_name python
```

To specify a python version, you can run:

```bash
conda create -y -n env_name python=version
```

Then, check the following installations:

```bash
python --version && pip --version
```

```bash
which python && which pip
```

### Create an environment from YAML

```bash
conda env create -f environment.yml
```

### List all available environments

```bash
conda env list
## or
conda info --envs
```

### Export the environment to YAML

```bash
conda env export > environment.yml
```

### Remove environment and its dependencies

```bash
conda remove --name env_name --all
```

### Clone an existing environment

```bash
conda create --name clone_env_name --clone env_name
```

## NextJS

### Install the required packages

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Start the production server

```bash
npm run tart
```

### .env\* files

NextJS recognizes the environment automatically, based on the command given.

1. `.env`: This is the default file that Next.js will use in all environments unless explicitly overridden. It can contain general environment variables that will be available in both development and production.

2. `.env.local`: This file is used for environment-specific variables that should not be committed to version control. It's typically used to store sensitive data, like API keys or database URLs, that should not be pushed to the repository. The variables in .env.local will take precedence over those in `.env`.

3. `.env.development`: This file is used specifically in development mode. If you run next dev, Next.js will automatically load the variables from .env.development, if they are present.

4. `.env.production`: This file is used for production-specific environment variables, and Next.js will load it when running the production build (next start).

5. `.env.test`: This file is used for environment variables specific to running tests (with Jest, for example).

### Authentication [GUIDE](https://nextjs.org/docs/app/guides/authentication#session-management)

### React Context Providers

#### ContextAPI

1:34:45 - useUser hook with ContextAPI
1:45:00 - useContext

#### React State Management - [Redux](https://redux.js.org/usage/nextjs)

- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
- [Vercel GUIDE](https://vercel.com/guides/react-context-state-management-nextjs)
- [StackOverflow](https://stackoverflow.com/questions/60626451/is-using-redux-with-next-js-an-anti-pattern)

#### React State Management - [Zustand](https://zustand.docs.pmnd.rs/guides/nextjs)

2:02:00 - Using Zustand
4:03:00 - Music Player

### Play Sound - [use-sound](https://www.npmjs.com/package/use-sound)

### UI Library

#### [Shadcn UI](https://ui.shadcn.com/docs/)

- [Components](https://ui.shadcn.com/docs/components)
- [Dropzone](https://shadcn-dropzone.vercel.app/docs)

#### [HeroUI](https://www.heroui.com/docs/frameworks/nextjs)

- [Components](https://www.heroui.com/docs/components/)

### Internationalization

- [next-intl](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing)

## Docker

### PostgreSQL

```bash
docker run -d \
  --name my-postgres \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_DB=mydatabase \
  -v my_postgres_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres
```

#### Breakdown of the Command

- `-d`: Run the container in detached mode (in the background).
- `--name my-postgres`: Assign a name to the container for easier management.
- `-e POSTGRES_USER=myuser`: Set the default PostgreSQL user to myuser.
- `-e POSTGRES_PASSWORD=mypassword`: Set the password for the default user.
- `-e POSTGRES_DB=mydatabase`: Create a default database named mydatabase.
- `-v my_postgres_data:/var/lib/postgresql/data`: Mount a named volume my_postgres_data to persist database data across container restarts.

- `-p 5432:5432`: Expose PostgreSQL's default port 5432 to the host machine, allowing external connections.
- `postgres`: Use the official PostgreSQL image from Docker Hub.

When you create a named volume in Docker, such as `my_postgres_data`, Docker manages its storage location.

In Linux by default, Docker stores volumes in the directory `/var/lib/docker/volumes/`. For a volume named `my_postgres_data`, the data would typically be located at `/var/lib/docker/volumes/my_postgres_data/_data`.

#### [`pgvector`](https://github.com/pgvector/pgvector?tab=readme-ov-file#docker)

##### Step 1: Connect to Your PostgreSQL Container

First, identify the name or ID of your running PostgreSQL container:

```bash
docker ps
```

Once identified, access the container's shell:

```bash
docker exec -it <container_name_or_id> bash
```

##### Step 2: Install `pgvector`

```bash
apt update && apt install postgresql-17-pgvector
```

_Note: Replace `17` with your Postgres server version_

##### Step 3: Add the pgvector Extension

Then, connect to the PostgreSQL database using the `psql` command-line tool:

```bash
psql -d my_dababase_name -U my_username -W my_username_password
```

Replace `my_username` with your PostgreSQL username if it's different.

```sql
CREATE EXTENSION vector;
```

##### Step 4: Verify the Installation

After installation, you can confirm that the extension is active by running the query:

```bash
SELECT * FROM pg_extension WHERE extname = 'vector';
```

### MySQL

TODO

### FastAPI

#### Connect to a PostgreSQL DBMS

In order to connect FastAPI to a PostgreSQL DBMS, we need to install the following package:

```bash
pip install "psycopg[binary]"
```

This package will allow us to connect and communicate with PostgreSQL.

Later, to actually connect the two parts, the dbms URL should look like:

```python
postgresql_url = f"postgresql+psycopg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"
```

#### General Info

By default, Uvicorn binds to `127.0.0.1`, which is only accessible from within the container. To make your FastAPI app accessible from outside the container, you need to bind it to `0.0.0.0`.

Run the following command to create the Docker Image:

```bash
docker build -t mirafy:test .
```

The last "." specify the location of the Dockerfile.

Run the following command to create the Docker Container:

```bash
docker run -d --rm -p 8000:8000 mirafy:test
```

The "-p" flag specifies the port to be mapped "-p host_port:container_port".

#### Using SQLModel with UUIDs

##### 1. Define a UUID Field

In your model, define a UUID field using `uuid.UUID` and `Field`:

```python
import uuid
from sqlmodel import SQLModel, Field
from uuid import UUID

class User(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
```

This ensures that each `User` record has a unique UUID as its primary key.

##### 2. Enable PostgreSQL UUID Generation (Optional)

For automatic UUID generation on the database side, you can use PostgreSQL's `gen_random_uuid()` function. Ensure the `pgcrypto` extension is enabled:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

Then, set the default value for the UUID column:

```python
from sqlalchemy import func

class User(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid.uuid4, primary_key=True, sa_column_kwargs={"server_default": func.gen_random_uuid()})
    name: str
```

This approach offloads UUID generation to PostgreSQL, which can be more efficient.

##### Example: FastAPI with SQLAlchemy and UUIDs

Here's a complete example integrating FastAPI with SQLAlchemy and UUIDs:

```python
from fastapi import FastAPI, Depends
from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

DATABASE_URL = "postgresql://user:password@localhost/dbname"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String, nullable=False)

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/users/")
def create_user(name: str, db: Session = Depends(get_db)):
    db_user = User(name=name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
```

This setup allows you to create users with UUIDs as their primary keys.

---

##### Migrating Existing Data to UUIDs

If you're migrating from integer-based IDs to UUIDs, follow these steps:

1. **Add a new UUID column**:

   ```sql
   ALTER TABLE users ADD COLUMN id_new UUID;
   ```

2. **Populate the new column**:

   ```sql
   UPDATE users SET id_new = gen_random_uuid();
   ```

3. **Set the new column as primary key**:

   ```sql
   ALTER TABLE users DROP CONSTRAINT users_pkey;
   ALTER TABLE users ADD PRIMARY KEY (id_new);
   ```

4. **Remove the old column**:

   ```sql
   ALTER TABLE users DROP COLUMN id;
   ALTER TABLE users RENAME COLUMN id_new TO id;
   ```

Ensure you test these steps in a development environment before applying them to production.

#### Summary

- **SQLAlchemy**: Use `UUID(as_uuid=True)` for UUID columns. Optionally, set `server_default=func.gen_random_uuid()` for automatic UUID generation by PostgreSQL.

- **SQLModel**: Use `Field(default_factory=uuid.uuid4)` for UUID fields. Optionally, set `sa_column_kwargs={"server_default": func.gen_random_uuid()}` for automatic UUID generation by PostgreSQL.

- **Migration**: Follow the steps above to migrate existing data to UUIDs.
