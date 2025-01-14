import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Home extends Component {
  render() {
    console.log('id'+cookies.get('id'));
    console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
    console.log('apellido_materno: '+cookies.get('apellido_materno'));
    console.log('nombre'+cookies.get('nombre'));
    console.log('username'+cookies.get('username'));
    return (
      <div className="home">
        <header
        
        >
          <div className="hero-text">
            <h1>Bienvenido a OmegaPetShop</h1>
            <p>Encuentra los mejores productos para tus mascotas con grandes ofertas.</p>
            <Link to="/products" className="btn-main">Ver Productos</Link>
          </div>
        </header>
        <section className="features">
          <div className="feature">
            <h2>Ofertas Exclusivas</h2>
            <p>Descubre nuestras ofertas especiales y ahorra en productos para tus mascotas.</p>
          </div>
          <div className="feature">
            <h2>Calidad Garantizada</h2>
            <p>Solo trabajamos con marcas de confianza para asegurar la mejor calidad.</p>
          </div>
          <div className="feature">
            <h2>Envío Rápido</h2>
            <p>Recibe tus productos en la puerta de tu casa en tiempo récord.</p>
          </div>
        </section>
        <section className="promotions">
          <h2>Promociones Destacadas</h2>
          <div className="promo-items">
            <div className="promo-item">
              <h3>Comida Premium para Perros</h3>
              <p>¡Compra ahora y obtén un 20% de descuento!</p>
              <Link to="/products" className="btn-main">Comprar Ahora</Link>
            </div>
            <div className="promo-item">
              <h3>Juguetes Interactivos para Gatos</h3>
              <p>¡Divierte a tu gato con nuestros juguetes interactivos con un 15% de descuento!</p>
              <Link to="/products" className="btn-main">Comprar Ahora</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
