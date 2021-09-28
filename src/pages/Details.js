import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { pokemonId } = useParams();
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokeData(data);
      });
  }, [pokemonId]);

  return (
    <>
      <Link to="/">Voltar</Link>

      <h1>Name: {pokeData.name}</h1>
    </>
  );
};

export default Details;
