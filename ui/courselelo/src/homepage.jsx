import { useEffect, useState } from "react";
import Coursecard from "./components/card";
import './App.css'
import backgroundImage from './assets/banner.avif'
import backgroundImage2 from './assets/banner3.png'

import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { FillData } from "./atoms/atoms";
import BasicCard from "./components/joycard";


function Homepage(){
  const [fillCourses,setFillCourses] = useRecoilState(FillData);
  
  useEffect(() => {
    let token = sessionStorage.getItem("token")
    fetch( "http://localhost:3000/users/courses",{
        method : "GET",
        headers : {
            "content-type" : "application/json",
            authorization : token
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        
        setFillCourses(data.courses)
    })
  },[])
  return(
    <>  <div>

  <div className="banner-contain">
  <div style={{ display: "flex", justifyContent: "center" }}>

   <img src={backgroundImage2} alt="banner" id="banner" ></img>
  </div>
</div>
    </div>
    <div>
      <h1 id="welcome">WELCOME TO VIDYAMANDIR</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
  <img src={backgroundImage} alt="banner" id="banner" />
</div>
    </div>
    <div>
      <h2 id="headline">Step into Temple Of Knowlegde Where Knowledge Blossoms. Discover courses that expand your horizons, from creative arts to practical skills. Let your learning adventure begin!</h2>
    </div>
    <hr style={{ margin : "5% 10%"}}></hr>
    <div>
      <h3 id="headline2">Courses to get you started</h3>
    </div>
     <div id="cardgrid"   style={{
      width : "100vw" 
     }}  >
       {fillCourses.map((course) => (
         <BasicCard
         key={course.id}
         title={course.title}
         description={course.description}
         price={course.price}
         ImageLink={course.ImageLink}
         id={course.id} 
         />
         ))}
         </div>      
         <hr style={{ margin : "5% 10%"}}></hr>
    </> 
  )
}

export default Homepage;