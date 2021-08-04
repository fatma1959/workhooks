import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie/AddMovie";
import { moviedata } from "./Components/data";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Detail from "./Components/Detail/Detail";
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
    <Router>
      <Filter handleChange={handleChange} title={title}
    ratingChanged={ratingChanged}
    rate={rate}/>
      <Switch>
      <Route path="/" exact render={() =><MovieList movieList={movieList} handleDelete={handleDelete}/>}/>
    <Route path="/add" exact render={()=><AddMovie handleAdd={handleAdd}/>}/>
    
      <Route path="/movieList/:id" render={(props) =><Detail {...props} movieList={movieList}/>}/>
      </Switch>
      </Router>
    
 
  </div>;
}

export default App;
