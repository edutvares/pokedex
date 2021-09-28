import { useRef } from "react";
import Pokedex from "../components/Pokedex";
import { Transition } from "react-transition-group";
import gsap from "gsap";

const Home = ({ show }) => {
  const bodyRef = useRef(null);

  return <Pokedex ref={bodyRef} />;
};

export default Home;
