import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { PeopleLists } from "./features/PeopleList";
import { MovieDetails } from "./features/MovieDetails/index";
import { PeopleDetails } from "./features/PeopleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation toMovies={"/people"} toPeople={"/movies"} />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />{" "}
          <Route path="/movies" component={MovieList} />
          <Route path="/people/:id" component={PeopleDetails} />{" "}
          <Route path="/people" component={PeopleLists} />
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
