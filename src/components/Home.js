import React from 'react';
import profile from '../assets/profile.jpeg';
import About from './About';



const Home = () => {
  return (
    <div className='profile-container'>
      <div className='profile-pic'>
        <img src={profile} alt='profile-pic' />
      </div>
      <About />

    </div>
  );
}

export default Home;
