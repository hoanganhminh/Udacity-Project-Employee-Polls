# Application README

This README file provides instructions on how to set up and run the "Employee Polls" application. This application allows users to create and answer polls with two options.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the "Employee Polls" application, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd employee-polls
```

3. Install dependencies using npm or yarn:

```bash
npm install react@17.0.2 react-dom@17.0.2
```

or

```bash
yarn install react@17.0.2 react-dom@17.0.2
```

4. Start the development server:

```bash
npm start
```

or

```bash
yarn start
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Features

The "Employee Polls" application includes the following features:

- User authentication: Users can log in by selecting their username.
- Dashboard: Users can view unanswered polls on the dashboard.
- Polls: Users can view and answer polls with two options.
- Leaderboard: Users can view a leaderboard ranking based on the number of questions asked and answered.
- New Poll: Users can create new polls with two options.

## Usage

1. **Login**: On the login page, select your username from the dropdown list.
2. **Dashboard**: After logging in, you will be directed to the dashboard where you can view unanswered polls. You can toggle between viewing unanswered and answered polls.
3. **Polls**: Click on any poll to view the details and choose an option to vote.
4. **New Poll**: Navigate to the "New" page to create a new poll by providing two options.
5. **Leaderboard**: Access the leaderboard page to view users ranked based on their activity.

## Folder Structure

The project's folder structure is as follows:

- **actions**: Contains Redux action creators for handling data and user actions.
- **components**: Contains React components responsible for UI elements and pages.
- **reducers**: Contains Redux reducers for updating application state.
- **utils**: Contains utility functions used within the application.
- **tests**: Contains unit and integration tests for components and functionality.

---

Thank you for using the "Employee Polls" application! If you encounter any issues or have suggestions for improvement, please don't hesitate to open an issue or contribute.