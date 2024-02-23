import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse"
import GenreMovieList from "./components/GenreMovieList"; 
import "./App.css";

function App() {
    return (
        <>
            <Header/>
            <Slider/>
            <ProductionHouse/>
            <GenreMovieList/>
        </>
    );
}

export default App;
