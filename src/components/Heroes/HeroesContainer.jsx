import React from 'react'
import { connect } from 'react-redux';
import Heroes from './Heroes';
import {getAllHeroes, onPageChanged} from '../../redux/heroesReducer'

let mapStateToProps = (state) =>({
    heroes: state.heroesPage.heroes,
    pageSize: state.heroesPage.pageSize,
    totalUsersCount: state.heroesPage.totalUsersCount,
    currentPage: state.heroesPage.currentPage
})

const HeroesContainer = (props) =>{
    return(
        <Heroes 
            pageSize={props.pageSize} 
            heroes={props.heroes} 
            getAllHeroes={props.getAllHeroes}  
            totalUsersCount={props.totalUsersCount}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
        />
    )
}

export default  connect(mapStateToProps, { getAllHeroes, onPageChanged }) (HeroesContainer) 
