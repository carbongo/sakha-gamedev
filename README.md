# Sakha GameDev

A community-driven list of games made by Sakha developers.
Support our Sakha developers by playing their games and sharing your feedback!

Visit the webpage at [carbongo.space/sakha-gamedev/](https://carbongo.space/sakha-gamedev/)

## Features

- [x] Games listing
- [x] Game details page
- [x] Responsive design
- [ ] Multilingual support (Sakha, Russian)
- [ ] Filter games by category, authors, platforms, and tags
- [ ] Sort games by name, and release date.
- [ ] Search games by name or description functionality
- [ ] Dark mode support

## What lead to this project?

This project was created to support and promote Sakha developers and their games. It aims to provide a platform where developers can showcase their work, and players can discover and enjoy games made by the Sakha community.

![Screenshot of a message from a Sakha developer Nikolay Ammosov](/public/assets/screenshot.png)

## How to Contribute (Add a Game)

1. [Fork](https://github.com/carbongo/sakha-gamedev/fork) the repository
2. Create a folder with your game name in `public/games/` directory
3. Add a `info.md` file inside `public/games/{YOUR GAME NAME}` folder with game information (title, description, image, etc.). _*NOTE*: Example `info.md` file is provided in the `games/_Template` directory._
4. Add your game image in the same folder. Make sure the image is named as named in the `info.md` file.
5. Add screenshots in the same folder. Add video link if available (YouTube, Vimeo, etc.).
6. Push your changes and create a [Pull Request](https://github.com/carbongo/sakha-gamedev/compare).

## Development

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/carbongo/sakha-gamedev.git`
2. Navigate to the project directory: `cd sakha-gamedev`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to [http://localhost:5173/sakha-gamedev/](http://localhost:5173/sakha-gamedev/)
6. Make changes to the code and see them reflected in real-time.
   > NOTE: If you did update any of the files in the `public/games/` folder, you need to run `npm run generate-games-data` to regenerate the games data.

## Licence

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file for details
