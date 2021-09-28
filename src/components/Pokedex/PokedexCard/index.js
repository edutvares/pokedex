import * as S from "./styled";

const PokedexCard = ({ name, types, image, id }) => {
  //const pokeImage = `https://pokeres.bastionbot.org/images/pokemon/1.png`;
  return (
    <S.Container to={`/${id}`} type={types[0].type.name}>
      <S.Title>{name}</S.Title>
      <S.DetailsArea>
        <S.TypesArea>
          {types.map(({ type }, key) => (
            <li key={key}>
              <span>{type.name}</span>
            </li>
          ))}
        </S.TypesArea>
        <S.ImageWrapper>
          <img src={image} alt={name} />
        </S.ImageWrapper>
      </S.DetailsArea>
    </S.Container>
  );
};

export default PokedexCard;
