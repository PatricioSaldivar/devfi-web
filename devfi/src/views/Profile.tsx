import React, {useContext} from 'react';
import "react-bootstrap";
import { Button, Nav } from 'react-bootstrap';
import {UserContext} from '../context/UserContextProvider';

const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <div style={{textAlign:'center'}}>
            <div>
            <span>{user.email}</span> 
            </div>
            <div>
            <p>Id: </p>
            <span>{user._id}</span>
            </div>
            <div className="button-wrapper">
                <button className="button">Agregar CV</button>
                <Nav.Link
                style={{ color: "white", alignSelf: "center" }}
                href="/profile/edit"
              >
                {" "}
                <Button >
                Editar Perfil
                </Button>
              </Nav.Link>
            </div>
        </div>
    )
}

export default Profile;
