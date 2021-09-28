import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: ${({ type }) => {
    //console.log(type);
    switch (type) {
      case "grass":
        return "#48d0b0";
      case "fire":
        return "#FB6C6C";
      case "bug":
        return "#DB76FE";
      case "water":
        return "#76BDFE";
      case "normal":
        return "#FEBF76";
      default:
        break;
    }
  }};
  border-radius: 15px;
  padding: 15px;
  text-decoration: none;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 0.9rem;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
`;

export const DetailsArea = styled.div`
  display: flex;
`;

export const TypesArea = styled.ul`
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2px;
  margin-top: 5px;

  span {
    background: rgba(255, 255, 255, 0.2);
    padding: 3px 10px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.6rem;
  }
`;

export const ImageWrapper = styled.div`
  transform: scale(1.8) translate(5px, 10px);
  z-index: -1;
  img {
    width: 100%;
  }
`;
