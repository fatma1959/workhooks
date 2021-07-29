import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie/AddMovie";
import { moviedata } from "./Components/data";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [movieList,setMovieList]=useState(moviedata)
  const[title,setTitle]=useState("")
  const[rate,setRate]=useState(0)
  const handleDelete=(idMovie)=>{
    setMovieList(movieList.filter((el)=>el.id!==idMovie));
  };
    const ratingChanged =(newRating)=>{setRate(newRating);}
  const handleChange=(e)=>{
    setTitle(e.target.value);};
    const handleAdd = (newMovie)=>{setMovieList([...movieList,newMovie])}
  return <div className="App">
    <Filter handleChange={handleChange}
    title={title}
    ratingChanged={ratingChanged}
    rate={rate}/>
    <MovieList movieList={movieList.filter((movie)=>(movie.title.toUpperCase().includes(title.toUpperCase()))
    &&  (movie.rate>=rate))}
    handleDelete={handleDelete}/>
    <AddMovie handleAdd={handleAdd}
    />
  </div>;
}

export default App;
