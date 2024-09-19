import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    iniciarSesion = async () => {
        try {
            const response = await axios.get(baseUrl, {
                params: {
                    username: this.state.form.username,
                    password: md5(this.state.form.password)
                }
            });

            if (response.data.length > 0) {
                const respuesta = response.data[0];
                // Verificar si apellido existe
                const apellidoPaterno = respuesta.apellido?.paterno || 'desconocido';
                const apellidoMaterno = respuesta.apellido?.materno || 'desconocido';
                
                cookies.set('id', respuesta.id, { path: "/" });
                cookies.set('apellido_paterno', apellidoPaterno, { path: "/" });
                cookies.set('apellido_materno', apellidoMaterno, { path: "/" });
                cookies.set('nombre', respuesta.nombre, { path: "/" });
                cookies.set('username', respuesta.username, { path: "/" });
                window.location.href = "./Home";
                alert(`Bienvenido ${respuesta.nombre} ${apellidoPaterno}`);
            } else {
                alert('El usuario o la contraseña no son correctos');
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert('Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
        }
    }

    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña:</label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={this.iniciarSesion}>
                            Iniciar Sesiòn
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
