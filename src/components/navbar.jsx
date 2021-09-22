import React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const navBar= () =>{
  return (
		<header>
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/inicio">BajoMundo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">               
                <li class="nav-item">
                  <Link to="/bajos">Bajos</Link> 
                </li>
                <li class="nav-item">
                  <Link to="/equipos">Equipos</Link>
                </li>
                <li class="nav-item">
                  <Link to="/accesorios">Accesorios</Link>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="buscar..." aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
            </div>
          </nav>

      </div>
    </header>
  );
}
export default navBar;