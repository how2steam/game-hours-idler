const SteamUser = require('steam-user');// This line imports the steam-user module and assigns it to a constant variable named SteamUser. 
const client = new SteamUser();// We create a new instance of SteamUser and assign it to a const called 'client'.

const logOnOptions = {// We create an object named logOnOptions that contains the Steam account's login credentials, that we will be using as keys.
  accountName: 'your_steam_profile_usernae',
  password: 'your_steam_profile_password'
};

client.logOn(logOnOptions);// Here we login into the steam account using the keys provided above

client.on('loggedOn', () => {// Now we wait for steam to log us in.
    console.log('Successful LogIn!');
    client.setPersona(SteamUser.EPersonaState.Online);// Here we set the user's status to 'online'
    client.gamesPlayed(730);// Now that he is online we are telling him to play csgo (we do that by passing the AppID)
  });
