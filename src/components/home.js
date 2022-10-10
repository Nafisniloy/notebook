import React from "react";
import Notes from "./notes";


export const Home = (props) => {
const {showAllert}= props;
  return (
    <>

  <Notes showAllert={showAllert}/>

    
    </>
  );
};
export default Home;
