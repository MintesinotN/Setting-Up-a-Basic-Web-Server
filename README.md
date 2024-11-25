# Setting-Up-a-Basic-Web-Server

## Overview

This project demonstrates how to set up a basic web server using only **Node.js**. The server handles three routes: `/name`, `/hobby`, and `/dream`. Each route returns different data, including plain text, JSON, and other details about the My goals. This project also includes handling the default home route and a 404 "Not Found" page.

## Table of Contents

- [Project Setup](#project-setup)
- [Routes](#routes)
  - [/name](#name)
  - [/hobby](#hobby)
  - [/dream](#dream)
- [How It Works](#how-it-works)
- [Running the Server](#running-the-server)
- [Notes](#notes)

## Project Setup

This project is built using **Node.js**. No external dependencies are required.

### Steps to Set Up:

**1. Clone the repository:**

   `git clone https://github.com/MintesinotN/Setting-Up-a-Basic-Web-Server.git`

**2. Navigate into the project directory:**

    `cd Setting-Up-a-Basic-Web-Server`

**3. Ensure you have Node.js installed on your machine. You can check by running:**

`node -v`

## Routes

### /name

This route returns the My full name as a plain text response.

**Method:** GET

**Response:** FullName: Mintesinot Bekele Negash

### /hobby

This route returns the My favorite hobby and fun activity in a JSON format.

**Method:** GET

**Response:** 
```
{
            "favorite_hobby": 'Listening Poems, Listening Songs, Watching Movies',
            "fun_activity": 'Playing Pool'
        }
```

### /dream

This route returns the My dream and life goal as a string.

**Method:** GET

**Response:** Dream: My Dream is to lead my self on my own route. And after finding my interest properly I want to become an expert in that field.

### /

This is the home route that serves as the default landing page for the server.

**Method:** GET

**Response:** InterTecHub

### /notfound

This route returns a "Not Found" message for any unhandled routes.

**Method:** GET

**Response:** 404 Not Found

## How It Works

The server is built using Node.js's native http module. It listens on port 3000 and handles routing using a basic `if` condition based on the `req.url` property. Each route is checked, and the corresponding response is sent based on the request.

## Running the Server

**1. After cloning the repository and setting up the project, you can run the server using the following command:**

`node server.js`

**2. Visit the following routes in your browser or using an API tool like Postman:**

    `http://localhost:3000/` - Home Route
    `http://localhost:3000/name` - Full Name
    `http://localhost:3000/hobby` - Hobby and Fun Activity
    `http://localhost:3000/dream` - Dream and Life Goal

## Notes

    - The server uses **Node.js**'s built-in `http` module for handling requests and responses.
    - Routing is achieved using a simple `if` condition that checks the `req.url`.
    - No external dependencies are required for this project.