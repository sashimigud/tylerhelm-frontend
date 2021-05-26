import React, { useState, useEffect } from 'react';
import './home.styles.scss'

const Home = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('http://localhost:6349/api/images')
      const body = await response.json()

      setApiData(body)
      console.log(body)
    }

    fetchImages();
  }, []);

  return <div className="home-container">
    <div className="content">
      HELLO
    </div>
  </div>
}

export default Home;