import './App.css';
import requests from "./requests"
import Row from './Row';
import Banner from "./Banner"
import Nav from "./Nav"
//netflix-clone-d299e.web.app
//11fa28afacabf123aba1cc78ffc5bbad


const categories = {
  fetchTrending: `TRENDING`,
  fetchNetflixOriginals: `NETFLIX ORIGINALS`,
  fetchTopRated: `TOP RATED`,
  fetchAction:`ACTION`,
  fetchComedy:`COMEDY`,
  fetchHorror:`HORROR`,
  fetchRomance:`ROMANCE`,
  fetchDocumentaries:`DOCUMENTARIES`
  
}

function App() {
  
  return (

    <div className="App">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals } isLargeRow = {true} />
      {

       Object.keys(requests).map(r => {
         if (!(r === "fetchNetflixOriginals")){
            console.log(r)
            return <Row title={categories[r]} fetchUrl={requests[r]} isLargeRow = {false} />
         }})
          //  return <Row title="NETFLIX ORIGINALS" fetchUrl={requests[r]} />
          //}
        //})
      }
      
      
    </div>
  );
}

export default App;
