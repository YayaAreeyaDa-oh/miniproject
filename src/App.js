import React, {useState, useEffect} from 'react';
import Navidator from './Navigator'
import Header from './Header'
import Footer from './Footer'
import CommentForm from './CommentForm';
import ShowComment from './ShowComment';
import ApiWeather from './ApiWeather';
import Login from './components/Login.js';
import auth from './firebase';
import './App.css';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  })
  useEffect(()=>{
    const handleAuth = auth.onAuthStateChanged(user =>{
      if(user){
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        })
      }
    });

    return()=>{
      handleAuth();
    }
  },[])
 
  const handlelogout = () => {
    auth.signOut();
    auth.signOut().then(Response=>{
      setSession({
        isLoggedIn: false,
      currentUser: null
      })
    });
  }

  return (
    <div>
      
      {
        session.isLoggedIn ? 
        ( 
        <header className="App-header">
        <button type="button" onClick={handlelogout} >Logout</button>
        </header>
      ) : (
        
      <Login setSession={setSession}/>
      )}<Navidator />
      <div class="container-lg">
        <Header />
        <div class="row">
          <div class="column-main-l">
            <div class="card">
              <CommentForm />
            </div>
          </div>
          <div class="column-main-r">
            <div class="card">                        
              <ApiWeather />           
            </div> 
          </div>
        </div>   
        <ShowComment />  

      </div>
      <Footer />
    </div>
);
}

export default App;


