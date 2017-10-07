import React from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

import FirstHeader from './components/common/header';
import FirstFooter from './components/common/footer';
import FirstComponent from './components/firstcomponent/firstC';
import SecondComponent from './components/secondcomponent/secondC';
import Menu from './components/nestedcomponent/menu';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <FirstHeader/>
        <h1>Routing overview</h1>
        <Router>
          <div>
            {/* for simple links with paths */}
            <Link to='/first'>First Component</Link>
            <Link to='/second'>Second Component</Link><br/><br/>

            {/* for styling the links, we use NavLinks */}
            {/* first, activeClassName when we want to use external css */}
            <NavLink activeClassName='active' to='/navclass/'>Nav activeClassName Component - </NavLink>
            {/* then we use, activeStyle for internal styling */}
            <NavLink activeStyle={{color : 'orange'}} to='/navstyle/'>Nav activeStyle Component</NavLink>
            <br/><br/>

            {/* Use of strict and exact args in link */}
            {/* Exact verifies that the path should be exactly same as link */}
            <Link exact to='/exact/menu'>Exact Menu Component - </Link>
            {/* Strict only checks the link and dont matches exactly with the path */}
            <Link strict to='/strict/menu'>Strict Menu Component</Link><br/><br/>
              {/* DO SEE STRICT AND EXACT DIFF IN BROWSER BY RUNNING */}

            {/* Now, we will use arguments in our URL */}
            {/* We uses props.match for passing params to components */}
            <Link to='/first/Prashant/jain/developer'>props.Match</Link><br/>
            {/* we use props.location for mainly dynamic url routinng where params may vary */}
            <Link to='/second/?fname=Prashant&lname=Jain'>props.Location</Link><br/>
            {/* <Link to='/props.his'>props.History</Link><br/> */}
            <br/><br/>

            {/* this is used for Nested Component */}
            <Link to='/menu'>MENU</Link>


          {/* Simple route path
            <Route path='/first' component={FirstComponent}/>
            <Route path='/second' component={SecondComponent}/> */}

           {/* Navlink route path */}
            <Route path='/navclass/' component={FirstComponent}/>            
            <Route path='/navstyle/' component={SecondComponent}/>  

            {/* for exact and strict args route */}
            <Route path='/exact/menu' component={Menu}/>
            <Route path='/strict/menu' component={Menu}/>
            

            <Route path='/first/:fname/:lname/:job?' component={FirstComponent}/>            
            <Route path='/second' component={SecondComponent}/> 
            {/* <Route path='/props.his' component={FirstComponent}/>  */}
  
            {/* route path for Nested component */}
            <Route path='/menu' component={Menu}/> 


          </div>
        </Router>
        <FirstFooter/>
      </div>
    )
  };

};

export default App;