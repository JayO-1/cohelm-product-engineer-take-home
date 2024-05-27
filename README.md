View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).

---

# Co:Helm Product Engineer Take-Home Task

## Loom Video

[Link](https://www.loom.com/share/e3bc10dc366542889d7452a3121d6443?sid=9f9ef12a-d134-4b73-8475-2beb76b684e0)

## Folder Structure

I have made minimal changes to the folder structure of the original repo.

The two main changes of note are:

1. The addition of a `dashboard` folder under `components/`
    * This folder contains all of the new components I created for this prototype

2. The addition of a `/create` route under `app/dashboard`
    * The page for this route contains all the file upload logic, which I have migrated away from `app/dashboard/page.tsx`
    * `app/dashboard/page.tsx` now renders a screen for viewing prior auth records

## Installation

Clone the repository:
```
git clone https://github.com/JayO-1/cohelm-product-engineer-take-home.git
```

### Front-End

1. Go to `/cohelm-product-engineer-take-home/frontend/`
```
cd cohelm-product-engineer-take-home/frontend
```

2. Install dependencies
```
npm install
```

### Back-End

#### Prerequisites

- [PostgreSQL](https://www.postgresql.org/download/)
- PgAdmin (Installed alongside PostgreSQL)

#### Installation

1. Go to `/cohelm-product-engineer-take-home/backend/`
```
cd cohelm-product-engineer-take-home/backend
```

2. Install dependencies
```
pip install -r requirements.txt
```

## Usage

### Front-End

1. Go to `/cohelm-product-engineer-take-home/frontend/`
  
2. Start the dev server
```
npm run dev
```

3. Go to `localhost:3000/dashboard` in the browser to see the dashboard

### Back-End

By default, the front-end is not connected to the back-end for demo purposes.

However, if you wish to test the back-end functionality, steps to follow are listed below

1. Go to `/cohelm-product-engineer-take-home/backend/`

2. Open `/cohelm-product-engineer-take-home/backend/database.py` and update URL_DATABASE to be in the form below
    * Note, you will need to ensure that a DB named CohelmData has been created via PgAdmin.
    * If you would like the DB to be named differently, then simply change CohelmData in the string listed below to the name of your DB 
```
postgresql://<db-admin-username>:<db-admin-password>@<server-url e.g. localhost>:<port>/CohelmData
```

3. Run the server using the command below. The server should start and connect to the DB with no issues
```
uvicorn main:app --reload
```

4. Under `/cohelm-product-engineer-take-home/frontend/app/dashboard/create/page.tsx`, comment/uncomment the appropriate lines of code to perform the fetch request to the backend. You may need to update the port number if it is different to what's used

5. Follow the steps to run the front-end. Upon clicking continue on the file upload page (found after clicking 'Create Record' on the dashboard page), you should see a POST request is received by the server
    * Alternatively, you could use Swagger to query the backend in isolation. The swagger endpoint can be found at `localhost:8000` by default

6. Use PgAdmin to confirm that the DB is written to e.g. run `SELECT * FROM cases`
