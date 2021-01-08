import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchOriginal}
        LargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTop} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
    </div>
  );
}

export default App;
