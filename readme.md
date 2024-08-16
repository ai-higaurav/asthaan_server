# Asthaan Property Listing Server Setup Instructions

## Project Description

This project is an Asthaan property listing server, designed to facilitate the listing and management of real estate properties. The server provides a robust backend for handling property data, user interactions, and search functionality.

Key features of the Asthaan property listing server include:
- Property listing management (add, edit, delete properties)
- Advanced search and filtering options for properties
- User authentication and authorization
- API endpoints for integration with front-end applications
- Data storage and retrieval optimization for large property datasets

This server is ideal for real estate agencies, property management companies, or any business dealing with property listings and requiring a scalable, efficient backend solution.

# Project Setup Instructions

This guide will walk you through the process of setting up, running, and building a Node.js project.

## Getting Started

### 1. Clone the Project

First, clone the project repository to your local machine:

```
git clone https://github.com/ai-higaurav/asthaan_server.git
cd asthaan_server
```


### 2. Install Dependencies

Once you've cloned the project and navigated to the project directory, install the dependencies:

```
npm install
```

This command will install all the dependencies listed in the `package.json` file.

## Running the Project

### Development Mode

To run the project in development mode:

```
npm run dev
```

This command will start the development server, typically with features like hot-reloading enabled.

## Building the Project

To build the project for production:

```
npm run build
```

This command will create a production-ready build of your project in dist folder.

## Running in Production

To run the built project in production mode:

```
npm run start
```

This command will start the server using the production build of your project or you can config your own pm2 manager.

