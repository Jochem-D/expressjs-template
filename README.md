# Expressjs template

This template is being used for the HZ HBO-ICT classes about microservices. In order to work with this template please take following steps

1. Install or update Node and NPM on your system. For Windows users you might consider [Chocolaty](https://chocolatey.org) and for Mac users obviously [Brew](https://brew.sh). These are both package managers that will help you install and update all kinds of packages via the CLI on your system. Highly recommended.
2. Run `npm install` to install all the packages mentioned in package.json
3. Run `npm run dev` to start the server
4. Open your browser and go to `localhost:3010` and you will see 'hi' formatted as JSON

## Modules

We use ES6 module system to import and export modules.

## Variables.env

We save credentials to other services in a `variables.env` file. This file is not included in this template (see `.gitignore`) for obvious reasons. So, you must create your own `variables.env` file in the root of your project. You may add `PORT=3010` to this file, so it will be used when running `start.js`.

## Ports

You can change the ports of your server via variables.env
