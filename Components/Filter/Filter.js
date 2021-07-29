import React from 'react'
import { Navbar,FormControl } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const Filter = ({ratingChanged,handleChange,title,rate}) => {
  
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">OldSchool</Navbar.Brand>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        onChange={handleChange}
        value={title}
        
      />
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    isHalf={true}
    value={rate}
  />,
 
      
  </Navbar>
        </div>
    )
}

export default Filter
