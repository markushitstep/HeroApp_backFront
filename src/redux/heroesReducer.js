import { heroesAPI } from "../api/api";

const GET_HEROES = 'GET_HEROES';
const SET_HEROES_TOTAL_COUNT = 'SET_HEROES_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    heroes:[  ],
    pageSize: 2,
    totalUsersCount: 0,
    currentPage: 1
};

const heroesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_HEROES:{
            return {
                ...state, heroes: action.heroes,  
            }
        }
        case SET_HEROES_TOTAL_COUNT:{
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state, currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}

export const setHeroes = (heroes) =>({ type: GET_HEROES, heroes});
export const setHeroesTotalCount = (count) =>({type: SET_HEROES_TOTAL_COUNT, count});
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage });

export const getAllHeroes = (currentPage,pageSize) => (dispatch) =>{
    heroesAPI.getHeroes(currentPage,pageSize).then(response =>{
        dispatch(setHeroes(response.data.heroes));
        dispatch(setHeroesTotalCount(response.data.total));
    })
}

export const onPageChanged = (pageNumber, pageSize) => (dispatch) =>{
    dispatch(setCurrentPage(pageNumber));
    heroesAPI.getHeroes(pageNumber,pageSize).then(response =>{
        dispatch(setHeroes(response.data.heroes));
    })
}
export default heroesReducer;