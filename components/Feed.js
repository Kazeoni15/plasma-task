import useOnScreen from "hooks/useOnScreen";
import { useState, useEffect, useRef } from "react";
import AnimeCard from "./AnimeCard";
import DogCard from "./DogCard";
import { motion } from "framer-motion";

export default function Feed({ currentTab, feedData }) {
  const bottomRef = useRef(null);
  const feedRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [dogPosition , setDogPosition] = useState(0) ;
  const [animePosition , setAnimePosition] = useState(0) ;

  useEffect(() => {
    // console.log(feedRef.current.scrollHeight - feedRef.current.scrollTop >  feedRef.current.clientHeight*1.2)

    // if(feedRef.current.scrollHeight - feedRef.current.scrollTop < feedRef.current.clientHeight)

    if (scrollActive){
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    } 
    

    //   console.log("scrollHeight: ", feedRef.current.scrollHeight, "scrollTop: ", feedRef.current.scrollTop, "Client height: ", feedRef.current.clientHeight )
  }, [feedData]);

  useEffect(()=>{
    if(currentTab == 'anime'){
        feedRef.current.scrollTop = animePosition

    } else if (currentTab == 'dogs'){
        feedRef.current.scrollTop = dogPosition
    }

  },[currentTab])

  return (
    <div
      onScroll={(e) => {
        if (
          e.target.scrollTop + e.target.clientHeight >
          e.target.scrollHeight - 4
        ) {
          setScrollActive(true);
        } else {
          setScrollActive(false);
        }

        if(currentTab === "anime"){
            setAnimePosition(e.target.scrollTop)
        } else if (currentTab = 'dogs'){
            setDogPosition(e.target.scrollTop)
        }

      }}
      ref={feedRef}
      className="main-section"
    >
      {feedData.map((data, index) => (
        <div key={index}>
          {currentTab === "anime" ? (
            <AnimeCard
              anime={data.anime}
              character={data.character}
              quote={data.quote}
            />
          ) : (
            <DogCard fact={data} />
          )}
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
