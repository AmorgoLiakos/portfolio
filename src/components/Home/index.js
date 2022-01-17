import React from "react"
import "./home.css"

const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="hero-container">
          <h2 className="home-welcome" >Welcome</h2>
          <p>I'm <span className="home-name" >Ilias</span> <br/> <span className="home-job-title" >Web Developer / WordPress Expert</span></p>
        </div>
      </div>
    </>
  )
}

export default Home