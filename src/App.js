import './App.css';
import { Route, Switch } from 'react-router-dom';
import Creator from './components/Creator/Creator';
import Home from './components/Home/Home';
import NavBarContainer from './components/Nav/NavBarContainer'
import HeroesContainer from './components/Heroes/HeroesContainer';

function App() {

  return (

    <div className="App">
      <NavBarContainer />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' render={ () => <Home /> }/>
          <Route path='/creator' render={ () => <Creator /> }/>
          <Route path='/heroes' render={ () => <HeroesContainer /> }/>
        </Switch>
      </div>
    </div>
    
  );
}

export default App;
