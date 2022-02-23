import React from "react";
import { add } from ".";

const addMovie = () => {
  let title;
  let image;
  let comment;

  return (
    <>    
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={(e) => { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={(e) => { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={(e) => { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={() => { add(title, image, comment); }} value="ADD MOVIE" />
    </>
  )
}

export default addMovie