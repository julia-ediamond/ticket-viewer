# Zendesk Ticket Viewer #

## Description
Zendesk ticket viewer is an application that queries [Named Link]Zendesk rest API to retrieve tickets for a certain account. The project is build as a part of Zendesk recruitment coding challenge.

- - - -

## Features
<details>
           <summary>The application displays 25 tickets per page, switches between next and previous pages and displays individual ticket details. Please note that at the moment first page shows last ticket with id 28, because 3 tickets have been deleted.</summary> 
<details>
           <summary>This project is my first attempt to call and communicate with rest API to source data. I chose to use node-fetch for it. I got to this decision through the process of trial and error while trying out other options.</summary>
<details>
           <summary>Pagination is cursor-based.</summary> 
<details>
           <summary>Individual ticket details are displayed by jQuery. I realize that today jQuery is not so popular and necessary as it used to be, but it has allowed me to keep my code lightweight and laconic.</summary> 
<details>
           <summary>The UI is aimed to be simple and usable.</summary> 

- - - -

## Technologies
* Nodejs
* jQuery
* HTML
* CSS

- - - -

## Dependancies
* Expressjs
* EJS
* Express-EJS-Layouts
* Dotenv
* node-fetch

- - - -

## Installation

Download or clone the repo and run the following in the same folder.

`npm install`

- - - -

## Getting Started

Authorization credentials are stored in .env file which usually should be gitignored in order not to compromise them. To help Zendesk recruitment team to check the project .env file will be pushed to the repo. 

- - - -

## Author
Iulia (Julia) Sharnina - iusharnina@gmail.com
