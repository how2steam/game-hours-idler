# Steam Games Idler

This is a small script, written in Javascript using Node and the steam-user module.
# Install dependencies
- First you need to make sure that upu have [NodeJS](https://nodejs.org/en/download) downloaded on your machine.

- After downloading node you need to install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (node package manager) in order to install the module that we will be using.

# How to configure

To configure the idler, you need to provide it with your steam credentials, such as username and passowrd. 
After that the script will ask you for your steam guard secret. (If you have steam guard enabled on your account)

Then you can pass him an AppID that will be representing the game you want to idle. You can get the AppID for each game by going to [SteamDB](https://steamdb.info/) and searching for your desired game. Its really that simple!

# How to setup
- To setup the program you need to follow these steps:


Clone the project

```bash
  git clone https://github.com/how2steam/game-hours-idler.git
```

Go to the project directory

```bash
  cd game-hours-idler
```
Then go to the folder that contains the script
```bash
  cd src
```

Install dependencies

```bash
  npm install steam-user
```
Run the script

```bash
  node idler.js
```
