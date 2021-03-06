import React from 'react';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
