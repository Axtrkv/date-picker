# Setting up project

This document provides instructions for setting up and running a React project with Vite using `pnpm`. Follow these steps to properly configure the project and get it running on your local machine.

## 1. Clone the Repository

1. **Clone the repository to your local machine:**

   git clone https://gitlab.com/your-username/your-repository.git

   Replace `https://gitlab.com/your-username/your-repository.git` with the URL of your repository.

2. **Navigate to the project directory:**

   cd your-repository

   Replace `your-repository` with the name of your repository.

## 2. Install Dependencies

1. **Make sure Node.js and `pnpm` are installed.** You can check their installation with the following commands:

   node -v
   pnpm -v

   If Node.js or `pnpm` is not installed, please install them from [Node.js official site](https://nodejs.org/) and [pnpm official site](https://pnpm.io/).

2. **Install project dependencies using `pnpm`:**

   pnpm install


## 3. Run the Project

1. **Start the project in development mode:**

   pnpm run dev

   Vite will start a development server, and you can open the project in your browser at [http://localhost:3000](http://localhost:3000) (or another port if configured differently).

## 4. Build the Project

1. **Create a production build of the project:**

   pnpm build

   The build will be saved in the `dist` folder. You can deploy the contents of this folder to any web server.
