// import React, { useState, useEffect, useRef } from 'react';

// const useInterval = (callback, delay) => {
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       savedCallback.current();
//     }, delay);
//     return () => clearInterval(intervalId);
//   }, [delay]);
// };

// const DogFacts = () => {
//   const [dogFacts, setDogFacts] = useState([]);
//   const [currentFact, setCurrentFact] = useState('');

//   useInterval(async () => {
//     const delay = Math.random() * 1500;
//     const response = await fetch('https://dog-api.kinduff.com/api/facts');
//     const data = await response.json();
//     setCurrentFact(data.facts[0]);
//     setDogFacts([...dogFacts, data.facts[0]]);
//   }, delay);

//   return (
//     <div>
//       <h2>Dog Facts</h2>
//       <div>{currentFact}</div>
//       <ul>
//         {dogFacts.map((fact, index) => (
//           <li key={index}>{fact}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const AnimeQuotes = () => {
//   const [animeQuotes, setAnimeQuotes] = useState([]);
//   const [currentQuote, setCurrentQuote] = useState('');

//   useInterval(async () => {
//     const delay = Math.random() * 1500;
//     const response = await fetch('https://animechan.vercel.app/api/random');
//     const data = await response.json();
//     setCurrentQuote(data.quote);
//     setAnimeQuotes([...animeQuotes, data.quote]);
//   }, delay);

//   return (
//     <div>
//       <h2>Anime Quotes</h2>
//       <div>{currentQuote}</div>
//       <ul>
//         {animeQuotes.map((quote, index) => (
//           <li key={index}>{quote}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ChatFeed = ({ currentTab, setCurrentTab }) => {
//   const [dogFacts, setDogFacts] = useState([]);
//   const [animeQuotes, setAnimeQuotes] = useState([]);
//   const [scrollPositions, setScrollPositions] = useState({
//     dogFacts: 0,
//     animeQuotes: 0,
//   });
//   const feedRef = useRef(null);

//   useEffect(() => {
//     setScrollPositions({
//       ...scrollPositions,
//       [currentTab]: feedRef.current.scrollHeight,
//     });
//   }, [currentTab, animeQuotes, dogFacts]);

//   useEffect(() => {
//     feedRef.current.scrollTop = scrollPositions[currentTab];
//   }, [currentTab]);

