import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list-comp.jsx';
import './App.css';


class App extends Component
{
constructor()
{
  super();
  this.changeName = this.changeName.bind(this)
  this.state={
  monsters:[
   
    ]
  }
}

changeName()
{  
  console.log(this,"yyy")
  this.setState({myName:"Touseen Ji"}) 
}

componentDidMount()
{ // try fetch call

  this.setState({monsters: [{
    id:1,
    name:"suma",
    address:{
      street:"abc",
      city:"vikroli",
      pincode:400016
    }
},
{
  id:2,
  name:"Huma",
  address:{
    street:"axyzbc",
    city:"airoli",
    pincode:400017
  }
},
{
  id:3,
  name:"nida",
  address:{
    street:"pqr",
    city:"thane",
    pincode:400018
  }
}]})
}
   render(){
     return  (
       <div className="App">
         <CardList name='ohBoy'><h2>Ayan</h2></CardList>
         {
 this.state.monsters.map((mn,indx)=><h1 key={'abc_'+indx} >{mn.name}</h1>)
         }
            
       </div>)
   }


}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
