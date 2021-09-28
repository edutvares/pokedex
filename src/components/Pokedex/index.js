import { useEffect, useState } from "react";
import * as S from "./styled";

import PokedexGrid from "./PokedexGrid";
import PokedexCard from "./PokedexCard";

const Pokedex = () => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        //console.log(data);
        data.results.map((pokeData) => {
          fetch(pokeData.url)
            .then((response) => response.json())
            .then((pokeDetails) => {
              //console.log(pokeDetails);
              setPokeList((pokeList) => [...pokeList, pokeDetails]);
            });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <S.Container>
      <S.Title>Pokedex</S.Title>
      <PokedexGrid>
        {pokeList.map((pokemonData) => (
          <PokedexCard
            name={pokemonData.name}
            types={pokemonData.types}
            image={pokemonData.sprites.front_default}
            id={pokemonData.id}
          />
        ))}
      </PokedexGrid>
    </S.Container>
  );
};

export default Pokedex;
