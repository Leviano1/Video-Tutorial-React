const API_KEY = "8a3a31de2536c99abb38ba3bb7b2f248";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodedURIComponent(query)}`);
    const data = await response.json()
    return data.results
};