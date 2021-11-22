import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import logo from './IMG-20191029-WA0007.jpg';


console.log(logo)

function App() {

  function handleName(){
    alert(this.fullName)
  }

  return (

    <div className="App" style={{display:"flex", justifyContent:"center"}}>
  
     <Profile fullName='Ayodeji Atanda' 
     handle = {handleName}
     bio= "i love watching movies, coding and musiccc plus twitter lol " 
     profession='Software Developer'>
        <img style={{width:'8rem' }} alt='timer' src={logo}/>
         </Profile>
    </div>
  );
}



export default App;
