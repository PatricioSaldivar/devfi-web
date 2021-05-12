import React, {useContext} from 'react';
import "react-bootstrap";
import { Button, Nav } from 'react-bootstrap';
import {UserContext} from '../context/UserContextProvider';

const ProfileEdit = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <div>
                <p>Nombre: </p> 
                <input type="text" id="name" name="name"></input>
                <p>Apellido: </p> 
                <input type="text" id="LastName" name="LastName"></input>
                <p>Universidad: </p> 
                <input type="text" id="University" name="University"></input>
                <p>Objetivos Personales: </p> 
                <input type="text" id="Objectives" name="Objectives"></input>
                <p>Lenguajes de Programacion: (Separados por coma): </p> 
                <input type="text" id="Languages" name="Languages"></input>
                </div>
            <div>
                <button className="button">Guardar Cambios</button>
            </div>
            
            
        </div>
    )
}

export default ProfileEdit;
