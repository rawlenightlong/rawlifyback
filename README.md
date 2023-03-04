#Rawlify
###A Spotify streaming app and playlist creator 

####Technologies
- Javascript
- HTML
- Tailwind CSS
- Nextjs
- Mongoose
- Express
- Node
- Render

####Wireframes

![model](https://i.imgur.com/l3lOT9k.png)
![model](https://i.imgur.com/o37IhcH.png)

####Routes
| Route  | Path  | Function  | Request Type  |
|---|---|---|---|
| Index  | /songs  | Display all song cards | GET  |
| Show  | /songs/:id  | Display one song card  | GET  |
| Create  | /songs  | Create a new song card  | POST  |
| Update  | /songs/:id  | Update an song card  | PUT  |
| Delete | /songs/:id  | Delete an existing song card  | DELETE  |
| Show | /songs/playlist | Shows the currently built playlist and all its songs | GET

The Rawlify app will pull upon the Spotify API using Spotify's own authentication mechanism and allow verified users to search Spotify's entire music library, and add their favorite songs to a user-specific playlist. Each song card will have an embedded Spotify player to play the song, and the playlist will have its own embedded player on its specific page.


