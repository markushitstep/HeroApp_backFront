import axios from "axios" 

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const heroesAPI = {
    getHeroes(currentPage = 1, pageSize = 10) {
        return instance.get(`create?page=${currentPage}&count=${pageSize}`);
    }
}