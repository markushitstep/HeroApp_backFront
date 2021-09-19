import { connect } from 'react-redux';
import NavBar from '../../components/Nav/NavBar'
import {getAllHeroes} from '../../redux/heroesReducer'



// let mapStateToProps = (state) =>({
//     heroesPage: state.heroesPage.heroes
// })

// const NavBarContainer = (props) =>{
//     return(
//         <NavBar getAllHeroes={props.getAllHeroes}/>
//     )
// }

export default  connect() (NavBar) 