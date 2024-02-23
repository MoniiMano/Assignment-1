import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/?format=json');
        const data = await response.json();
        setPlanets(data.results);
        setNextPage(data.next);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const fetchNextPage = async () => {
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      setPlanets(prevPlanets => [...prevPlanets, ...data.results]);
      setNextPage(data.next);
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };

  return (
    <div className="planets-container">
  
      {planets.map(planet => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
      {nextPage && (
        <button onClick={fetchNextPage} className="pagination-button">
           Click Here !!!
        </button>
      )}
     
      
    </div>
  );
};


export default PlanetsDirectory