import React from "react";
import '../Card.css';
import styled from "styled-components"
import luis from '../img/Luis.png'
import andrea from '../img/monroe.png'

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 5em;
  margin: 5em;
  
`;


const Nosotros = props =>{
  return (
    <Section>
  <div className="card text-center">
  <div className="overflow">
    <img src={luis} alt="Luis" className="card-img-top"></img>
    </div>
    <div >
      <h4 className="card-title">{props.title}</h4>
      <p style={{Color: 'black'}} className="card-text text-secondary">
      Luis Morales
      </p>
      <a href="https://morales19062020.github.io/bit07me/" target="_blank" className="btn btn-outline-success" rel="noreferrer">Acerca de mi</a>
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
      <a href="https://andreazu14.github.io/bit07me/"target="_blank" className="btn btn-outline-success" rel="noreferrer">Acerca de mi</a>
      </div> 
      <div>
</div>   
  </div>  
  </Section>

  
  );
}


export default Nosotros;