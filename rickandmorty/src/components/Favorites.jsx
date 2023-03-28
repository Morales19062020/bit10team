import React, { useState,} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Navbar from './Navbar'
import '../App.css'
import {Modal,ModalHeader,ModalBody,ModalFooter,} from "reactstrap";

//Creando la tabla y las funciones y las Constantes del Crud//
function Favorites () {
  const dataArt = [
    { id: 1, nombre: "Rick Sanchez", anime: 'Rick and Morty' },
    { id: 2, nombre: "Morty Smith", anime: 'Rick and Morty' },
    { id: 3, nombre: "Summer Smith", anime: 'Rick and Morty' },
    { id: 4, nombre: "Beth Smith", anime: 'Rick and Morty' },
    { id: 5, nombre: "Jerry Smith", anime: 'Rick and Morty' },
    { id: 6, nombre: "Annie", anime: 'Rick and Morty' },
  ];
  const [data, setData] = useState(dataArt);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [artSeleccionado, setArtSeleccionado] = useState({
    id: '',
    orden: '',
    cantidad: ''
  });
  const seleccionarPersonaje=(elemento, caso)=>{
    setArtSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }
  const handleChange=e=>{
    const {name, value}=e.target;
    setArtSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }
  //Const de Editacion//
  const editar=()=>{
    let dataNueva=data;
    dataNueva.map(personaje=> {
      if(personaje.id===artSeleccionado.id){
        personaje.nombre=artSeleccionado.nombre;
        personaje.anime=artSeleccionado.anime;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  //Const de Eliminacion//
  const eliminar =()=>{
    setData(data.filter(personaje=>personaje.id!==artSeleccionado.id));
    setModalEliminar(false);
  }
  const abrirModalInsertar=()=>{
    setArtSeleccionado(null);
    setModalInsertar(true);
  }
  //Const de Insertar// 
  const insertar =()=>{
    var valorInsertar=artSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }
  // Creando la tabla en el HTML//
  //Agregar Personajes//
  return ( 
    <div className="App">
    <div class= "tabla">
      <h2>Escribe aquí tu personaje favorito</h2>
      <br />
    <button type="button" class="btn btn-outline-danger" onClick={()=>abrirModalInsertar()}>Agrega tu Personaje</button>
    <br /><br /><br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>PERSONAJE</th>
            <th>ANIME</th>
            <th>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.anime}</td>
              <td><button type="button" class="btn btn-warning" onClick={()=>seleccionarPersonaje(elemento, 'Editar')}>Editar</button> {"   "} 
              <button type="button" class="btn btn-danger" onClick={()=>seleccionarPersonaje(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
      </div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Personaje</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Id</label>
            <input
              className="form-control"
              readOnly
              type="number"
              name="id"
              value={artSeleccionado && artSeleccionado.id}
            />
            <br />
            <label>Personaje</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={artSeleccionado && artSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />
            <label>Anime</label>
            <input
              className="form-control"
              type="text"
              name="anime"
              value={artSeleccionado && artSeleccionado.anime}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button"   onClick={()=>editar()}>Actualizar</button>
          <button type="button"  onClick={()=>setModalEditar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el personaje {artSeleccionado && artSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button type="button"  onClick={()=>eliminar()}>
            Aceptar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEliminar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agrega un nuevo Personaje</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Id</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />
            <label>Personaje</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={artSeleccionado ? artSeleccionado.nombre: ''}
              onChange={handleChange}
            />
            <br />
            <label>Anime</label>
            <input
              className="form-control"
              type="text"
              name="anime"
              value={artSeleccionado ? artSeleccionado.anime: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button"  onClick={()=>insertar()}>Insertar</button>
          <button type="button"  onClick={()=>setModalInsertar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }



export default Favorites;