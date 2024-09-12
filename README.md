# Player-VueJS-app

A Vue.js application to display and filter a list of cricket players. This project utilizes Vue.js for the frontend and Vue Router for navigation, with Axios used to fetch player data from a JSON file.

## Project Overview

This application features:
- A home page with navigation.
- A player list page that displays cricket players categorized by their roles (Batsman, Bowler, All-Rounder).
- Filtering and searching functionalities to easily find players.

## Project Structure

- `main.js`: The entry point of the application, initializing Vue, setting up the router, and mounting the app.
- `App.vue`: The root component of the application.
- `router/index.js`: Contains the route configuration for the application.
- `services/playerService.js`: Provides a function to fetch player data using Axios.
- `components/HelloWorld.vue`: Displays the home page with a button to navigate to the player list.
- `components/PlayerList.vue`: Displays the list of players with filtering and searching capabilities.

## Dependencies

- `vue`: ^2.6.10
- `vue-router`: ^2.8.1
- `axios`: ^0.21.1

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/aniketparate/Player-VueJS-app.git
    cd player-vuejs-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run serve
    ```

   This will start the development server and you can view the application in your browser at `http://localhost:8080`.

## Usage

- Visit `http://localhost:8080` to see the home page.
- Navigate to the player list page by clicking the button on the home page or visiting `http://localhost:8080/players`.

## Development

- To build the project for production, run:
    ```bash
    npm run build
    ```

- To lint the project, run:
    ```bash
    npm run lint
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
