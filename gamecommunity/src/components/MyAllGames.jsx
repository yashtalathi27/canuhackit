import React, {useEffect} from 'react'
import arr from './data'
import Cards from './Cards';
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function MyAllGames() {

  const navigate = useNavigate();

  const [games, setGames] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:6005/games', {withCredentials: true})
        .then(games => setGames(games.data))
        .catch(err => console.log(err))
  }, []);

  const type = "action";
  return (
    <>
    <div className="flex justify-between gap-3 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 ml-5 p-[60px] pt-[90px] m-18 ">
      {games.map((detail) => {
        return (
            // eslint-disable-next-line react/jsx-key
          <Cards
            imageUrl={detail.image}
            type={type}
            smallDetail={detail.description}
            name={detail.name}
            className="m-[5px] mb-5"
            detailed={detail._id}
          />
        );
      })}
      </div>
    </>
  )
}
