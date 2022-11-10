import axios from "axios";

export const wordInfo = async (word) => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    return response;
}

export const subtitles = async (id) => {
    const response = await axios.post("http://localhost:1500/api/add/subtitles", {id})
    return response;
}