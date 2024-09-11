import axios from "axios";

const API_URL = '/players.json'

export const fetchPlayers = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data;
    } catch (error) {
        throw error
    }
}