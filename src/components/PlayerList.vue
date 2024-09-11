<template>
    <div>
        <nav class="navbar">
            <div class="navbar-container">
                <div style="display: flex;">
                    <h1>Sportz Interactive</h1>
                    <select v-model="selectedTeam" class="team-select">
                        <option value="ALL">ALL</option>
                        <option value="IND">IND</option>
                        <option value="PAK">PAK</option>
                        <option value="AUS">AUS</option>
                        <option value="ENG">ENG</option>
                    </select>
                </div>
                <div class="navbar-content">
                    <form class="search-form" @submit.prevent="searchPlayers">
                        <input class="search-input" type="search" placeholder="Search" v-model="searchQuery" />
                        <button class="search-button" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row" v-for="(players, category) in categorizedPlayers" :key="category">
                <h1 class="category-title">{{ category }}</h1>
                <div class="card-container">
                    <div class="card" v-for="player in players" :key="player.name">
                        <img :src="player.image || 'https://via.placeholder.com/150'" class="card-img" alt="Player Image" />
                        <div class="card-body">
                            <h5 class="card-title">{{ player.name }}</h5>
                            <p class="card-text">Matches: {{ player.matches }}</p>
                            <p class="card-text">Runs: {{ player.runs }}</p>
                            <p class="card-text">50s: {{ player['50s'] }}</p>
                            <p class="card-text">100s: {{ player['100s'] }}</p>
                            <p class="card-text">Highest Score: {{ player.highest_score }}</p>
                            <p class="card-text">Team Name: {{ player.team_name }}</p>
                            <p class="card-text">Best Bowling Figures: {{ player.best_bowling_figures }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchPlayers } from '../services/playerService'
export default {
    name: 'PlayerList',
    data(){
        return{
            players: [],
            searchQuery: '',
            selectedTeam: 'ALL',
            filteredPlayers: []
        }
    },
    async created(){
        try {
            const data = await fetchPlayers();
            this.players = data.originalPlayers;
            this.filteredPlayers = this.players;
        } catch (error) {
            throw "Error loading player data: " + error
        }
    },
    computed: {
        categorizedPlayers() {
            const categories = {
                Batsman: [],
                Bowler: [],
                AllRounder: [],
            };

            this.filteredPlayers.forEach(player => {
                if (this.selectedTeam !== 'ALL' && player.team_name !== this.selectedTeam) return;

                if (player.role === 2) {
                    categories.Batsman.push(player);
                } else if (player.role === 3) {
                    categories.AllRounder.push(player);
                } else if (player.role === 4) {
                    categories.Bowler.push(player);
                }
            });

            return categories;
        },
    },
    methods: {
        searchPlayers() {
            const query = this.searchQuery.toLowerCase();
            this.filteredPlayers = this.players.filter(player =>
                player.name.toLowerCase().includes(query)
            );
        },
    }
}
</script>

<style scoped>
.navbar {
    background-color: #f8f9fa;
    padding: 10px 20px;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    font-size: 1.5em;
    font-weight: bold;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.team-select {
    margin-right: 15px;
}

.search-form {
    display: flex;
}

.search-input {
    padding: 5px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-right: 5px;
}

.search-button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

.search-button:hover {
    background-color: #218838;
}

.container {
    padding: 20px;
}

.row {
    margin-bottom: 30px;
}

.category-title {
    font-size: 2em;
    margin-bottom: 20px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    width: 300px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ced4da;
}

.card-body {
    padding: 15px;
}

.card-title {
    font-size: 1.25em;
    margin-bottom: 10px;
}

.card-text {
    margin-bottom: 10px;
}
</style>