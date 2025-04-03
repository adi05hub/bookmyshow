import React from 'react';
import logob from './logob.svg';
import './Narbar.css';
import { useNavigate } from 'react-router-dom';
import './MovieList'
import './Concerts'
import './Contentbody'

const Navbar = () => {
  const navigate = useNavigate(); // This works only inside Router context
  const handleHome = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };
  const handleMovie = () => {
    navigate('/MovieList');
  };
   const handleConcert = () => {
    navigate('/Concerts');
  };



  return (
    <div>
      <nav>
        <img src={logob} alt="Logo" />
        <input type="search" name="search" placeholder="  search movies, concerts, events, plays..." />
        <ul>
        <a href = "/" onclick = {handleHome}><li>Home</li></a>
         <a href = "/MovieList" onclick = {handleMovie}><li>Movies</li></a>
         <a href = "/Concerts" onClick = {handleConcert}><li>Concerts</li></a>  
        
        </ul>
        <button onClick={handleSignIn}>Sign in</button>
      </nav>
    </div>
  );
};

export default Navbar;
