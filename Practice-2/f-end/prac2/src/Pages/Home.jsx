import { useEffect, useState } from "react";
import Lead1 from "../assets/images/lead1.webp"
import Lead2 from "../assets/images/lead2.webp"
import Lead3 from "../assets/images/lead3.webp"
import Hero1 from "../assets/images/hero1.webp"
import Hero2 from "../assets/images/hero2.webp"
function App() {
  return (
    <div>
        <div className="intropart"></div>
        <div className="cards">
          <div className="card1">
            <div className="title">
              <h1 className="title1">RESCUE AN ORPHAN</h1>
              <p className="parag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea labore nobis incidunt nulla qui impedit quaerat enim expedita, laudantium tenetur.</p>
            </div>
          </div>
          <div className="card2">
          <div className="title">
              <h1 className="title1">FEED THE HUNGRY</h1>
              <p className="parag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea labore nobis incidunt nulla qui impedit quaerat enim expedita, laudantium tenetur.</p>
          </div>
          </div>
          <div className="card3">
          <div className="title">
          <h1 className="title1">FREE EDUCATION</h1>
          <p className="parag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea labore nobis incidunt nulla qui impedit quaerat enim expedita, laudantium tenetur.</p>
          </div>
          </div>
        </div>
        <div className="products"></div>
        <div className="leadership">
          <h1 className="title2">OUR LEADERSHIP</h1>
          <p className="parag1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum ad modi laudantium iusto voluptatibus, non voluptatemvoluptatum pariatur nisi inventore!</p>
          <div className="leads">
          <div className="lead1">
            <img src={Lead1} alt="" className="img" />
            <h5 className="job">MINING EXPERT</h5>
            <p className="parag2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus ducimus sint in quidem corporis sapiente iusto harum!</p>
          </div>
          <div className="lead2">
          <img src={Lead2} alt="" className="img"/>
            <h5 className="job">PROJECT MANAGER</h5>
            <p className="parag2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus ducimus sint in quidem corporis sapiente iusto harum!</p>
          </div>
          <div className="lead3">
          <img src={Lead3} alt="" className="img" />
            <h5 className="job">ENGINEER</h5>
            <p className="parag2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus ducimus sint in quidem corporis sapiente iusto harum!</p>
          </div>
          </div>
        </div>
        <div className="blogs">
          <h1 className="title3">OUR BLOG</h1>
          <p className="parag1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum ad modi laudantium iusto voluptatibus, non voluptatemvoluptatum pariatur nisi inventore!</p>
          <div className="blog">
          <div className="blog1">
          <img src={Hero1} alt="" className="img1"/>
          <h3 className="caption">How to invest in investing company</h3>
          <h6 className="date">JANUARY 18, 2019    BY JAMES COOPER</h6>
          <p className="parag3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem culpa sequi, distinctio pariatur, repellendus iusto accusantium soluta inventore nulla quas fugit mollitia provident debitis quis qui. Maxime, et libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus ducimus sint in quidem corporis sapiente iusto harum!</p>
          </div>
          <div className="blog2">
          <img src={Hero2} alt="" className="img1" />
          <h3 className="caption">How to invest in investing company</h3>
          <div className="authority">
          <h6 className="date">JANUARY 18, 2019</h6>
          <h6 className="author">JAMES COOPER</h6>
          </div>
            <p className="parag3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus maiores laudantium quidem perferendis nostrum aliquam dolores reprehenderit? Inventore assumenda voluptates quisquam iure tempore voluptatum, alias fugit quibusdam laudantium amet!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus ducimus sint in quidem corporis sapiente iusto harum!</p>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;