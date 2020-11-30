import React, {Component} from 'react';
import './App.css';
class App extends Component{
      render(){
        return(
          <div className="App">
          
       <div className="container-fluid">
           <nav className="navbar navbar-expand-sm bg-danger navbar-dark justify-content-center col-12">
            <a className="navbar-brand col-12" href="#">
                <img src="logo.gif" alt="logo" style={{width:'100px'}} />
            </a>
            <ul className="navbar-nav navbar-brand col-10">
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="produtos.html">Produtos</a>
                </li>
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="lojas.html">Nossas Lojas</a>
                </li>
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="contato.html">Contato</a>
                </li>
            </ul>
        </nav>
    </div>
    <div className="container-fluid col-10">
        <h3 className="text-dark display-6">Seja bem vindo(a)!</h3>
        <p ><h5 className="text-danger font-weight-bolder">Aqui em nossa loja,programadores tem desconto nos produtos para sua casa!.</h5></p>
    </div>
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br />
    <div className="container-sm text-center">
        <p className="text-danger" id="formas_pagamento"><b>Formas de pagamento</b></p>
        <img src="./logo_pagamento.jpg" width="30%" />
        <p className="text-danger">&copy; Recod Pro</p>
    </div>
    
 </div>
   
        )}};
        
export default App;
