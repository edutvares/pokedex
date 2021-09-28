import { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const detailsRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route
                path="/:pokemonId"
                children={<Details ref={detailsRef} />}
              />
              <Route exact path="/">
                <Home ref={homeRef} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
