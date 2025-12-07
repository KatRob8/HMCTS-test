# HMCTS Test - Task Creator

## Get Started / Setup

### Requirements

*Use `macOS`, `Linux` or `Git Bash` on `Windows`**  
*Ensure `Node.js` and `npm` are installed**

### Instructions

#### Navigate to your IDE's terminal and use the following commands:

1. Clone the repo:
    - `git clone https://github.com/KatRob8/HMCTS-test.git`
2. Navigate to directory:
    - `cd hmcts-test`
3. Set up environment variables
    - Create a file called `.env` in the `hmcts-test` directory using:
        - `touch .env`
    - Open that file and paste the following contents inside it and save:
        ```
        PORT="3000"   
        REACT_APP_PORT="5173"
        ```
4. Navigate to the backend
    - `cd server`
5. Install dependencies:
   - `npm install`

6. Start the backend:
   - `npm run dev`
7. In a new terminal, navigate to the frontend:
   - `cd client`
8. Install dependencies:
   - `npm install`
9. Start the frontend:
   - `npm run dev`

## Usage

1. In your browser, navigate to http://localhost:5173
2. Fill out the task form to create a task
3. Once submitted, you should see your task details appear

## Testing
From the server directory, run:
- npm test

This runs Jest tests for the validator helper function (`validateTask.ts`) and the API POST route `/submit-task`.

## API Documentation

### POST /submit-task

**Method**: `POST`

**Description**: This endpoint creates a new task, stores it in a database and returns the task details upon successful creation.

---

#### Request

- **Headers**:
  - `Content-Type: application/json`
  
- **Body** (JSON):

```json
{
  "title": "Test Task",
  "description": "This is a description for the task", // Optional, can also be empty
  "status": 1,
  "dateTime": "2025-06-12T19:30"
}  
```
## Tech Stack
- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** SQLite (Better-SQLite3)
- **Styling:** GOV.UK Design System, SASS
- **Testing:** Jest

## Description

A simple task creator web app that allows you to use a form to create a task, and recieve the details of that task upon submission.

## Technical Choices & Approach

### Stack
I decided to stick to a modern stack using TypeScript and ESM modules to keep in line with modern development practices and trends I see in programming. This approach helps future-proof the code, making it more maintainable while also minimizing potential issues related to deprecated features down the line.

### Database 

I've opted for SQLite with Better-SQLite3 as this is ideal for a small demo by being lightweight and an easy to setup solution (it's simply installed with all the other dependencies). However, for larger-scale applications that require more scalability, I would haved opted for PostgreSQL or similar, hosted in the cloud. 

### Testing 

For the sake of simplicity, I have focused testing on the `validateTask.ts` function and the `/submit-task` POST route, as they are the core functionalities of the application. In a real world scenario, I would expand the tests to cover the frontend and other aspects of the web app, but I kept it short for the scope of this project.

### Design

I've opted to use the GOV.UK Design System, with the intention to make this look and feel like a realistic government website (the brief outlines the scenario that this would be for HMCTS caseworkers). The  GOV.UK design system is also inherently responsive, so the layout will scale proportionally across screen sizes as well without the need for additional media queries. 