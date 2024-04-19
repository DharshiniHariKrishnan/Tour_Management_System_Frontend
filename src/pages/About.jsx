
import React from "react";
import "../styles/about.css";

const About = () => {
  return (  
      <div class="about-container">
        <div class="about_data_title">
          <h1 class="about-title" style={{color:"white"}}>
          Learn More About Toureaze
          </h1>
        </div>
          <p class="about__description"> 
          All the trips around the world are a great<br></br>
          pleasure and happiness for anyone, enjoy
          the sights when you travel the world. Travel<br></br>
          safely and without worries, get your trip and 
          explore the paradises of the world.
          </p>
          
        <div class="about_data_step1">
        <h2>STEP 1</h2>
        <p class="about__description"> 
          Visit our home page and search for the city you would like to travel to. <br></br>Once you select a city, 
          you will be brought to an explore page for that place where you will find <br></br>images as well as options
          to navigate to our hotel and transportation search pages<br></br>
          </p>
          </div>

        <div class="about_data_step2">
        <h2>STEP 2</h2>
        <p class="about__description"> 
        On our hotel search page, you will see a list of all available hotels in that city.<br></br> You can search
        the hotel result list by name as well as filter by price and stars. <br></br>You will be able to select a hotel 
        result to view reviews and pricing. <br></br>On our transportation search page, you will need to input a departure 
        city <br></br>and will then see a list of all available modes of transportation between those two cities.<br></br>
          </p>
        </div>

        <div class="about_data_step3">
        <h2>STEP 3</h2>
        <p class="about__description"> 
        Once you find your preferred accomodations and transportation, you can book and pay <br></br>directly on our site! 
        Any bookings will appear on your itinerary on our "Tours" page. <br></br>You can share your itinerary with other
        travelers in your group and make comments on the tour plan on this page.<br></br>
          </p>
        </div>
      </div>

    );
    
};



export default About;

