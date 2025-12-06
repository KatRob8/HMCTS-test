# HMCTS Test - Task Creator

## Get Started / Setup

#### Navigate to your IDE's terminal and use the following commands:

1. Clone the repo:
    - `git clone https://github.com/KatRob8/HMCTS-test.git`
2. Navigate to backend:
    - `cd hmcts-test`
    - `cd server`
3. Install dependencies:
   - `npm install`
4. Set up environment variables
    - Create a file called `.env` in the server directory (top level) in the terminal:
        - `touch .env`
    - Open that file 
        - `code .env`
    - Paste the following contents inside it and save:
        - `PORT="3000"
REACT_APP_PORT="5173"`

6. Start the backend:
   - `npm run dev`
7. In a new terminal, navigate to frontend:
   - `cd client`
8. Install dependencies:
   - `npm install`
9. Start the frontend:
   - `npm start`

## Usage

1. In your browser, navigate to http://localhost:3000
2. Fill out the task form to create a task
3. Once submitted, you should see your task details appear
4. If database.db doesn’t exist, it will be created automatically.

## Testing
From the server directory, run:
- npm test

This runs Jest tests for the validator helper function (`validateTask.ts`) and the API POST route `/submit-task`.

## Tech Stack
- Frontend: React, TypeScript
- Backend: Node.js, Express, TypeScript
- Database: SQLite (Better-SQLite3)
- Styling: GOV.UK Design System
- Testing: Jest

## Description

A simple task creator web app that allows you to use a form to create a task, and recieve the details of that task upon submission.

## Technical Choices & Approach

### Stack
I decided to stick to a modern stack using TypeScript and ESM modules to keep in line with modern development practices and trends I see in programming. I believe this helps to future proof code. 

### Database 

I've also opted for a SQLite database (using Better-SQLite3 to be more specific) as this is ideal for a small project / demo by being much easier to get up and running (it's simply installed with all the other dependencies). However, if the scope of the project was much bigger and needed to be scaled, I would opt for PostgreSQL or similar, hosted in the cloud. 

### Testing 

For the sake of simplicity, I have focused testing on the `validateTask.ts` function and my POST route, as this is where the main functionality of the program lies. In a real world scenario, I would also test the frontend and other aspects of the web app but I kept it short for the scope of this project.

### Design

I've opted to use the GOV.UK Design System, with the intention to make this look and feel like a realistic government website (the brief outlines the scenario that this would be for HMCTS caseworkers). The  GOV.UK design system is also inherently responsive, so the layout will scale proportionally across screen sizes as well without the need for additional media queries. 