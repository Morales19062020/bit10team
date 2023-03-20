import React from "react";
import '../Card.css';
import styled from "styled-components"
import luis from '../img/luis.png'
import andrea from '../img/andrea.png'




const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: fixed;
  top: -0.6rem;
  left: 24%;
  z-index: 5;

`;


const Nosotros = props =>{
  return (
    <Section>
      
    

   <div className="card text-center">
     <div className="overflow">
       <img src={luis} alt="Luis" className="card-img-top"></img>
     </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>
       <p className="card-text text-secondary">
       Luis Morales
       </p>
       <a href="https://morales19062020.github.io/bit07me/" target="_blank" className="btn btn-outline-success">Acerca de mi</a>
       </div> 
   </div>
   
   <div className="card text-center">
     <div className="overflow">
       <img src={andrea}  alt="Image1" className="card-img-top"></img>
     </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>
       <p className="card-text text-secondary">
       Andrea Zuluaga
       </p>
       <a href="https://andreazu14.github.io/bit07me/"target="_blank" className="btn btn-outline-success">Acerca de mi</a>
       </div> 
       <div>
 </div>   
   </div>  
   </Section>
 
   
  );
}


export default Nosotros;