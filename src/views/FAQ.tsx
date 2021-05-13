
import "react-bootstrap";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: black;
  height: 600px;
  width: 100%;
  background: white;
`;

const FAQ = () =>{
  return(<Container>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Preguntas</th>
      <th>Respuestas</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>¿Cómo Funciona?</td>
      <td>Tu como usuario puedes decidir si quieres dirigir un trabajo o si quieres formar parte del equipo de otra persona, si decides dirigir un equipo, solo debes de especificar tu idea para proyecto y esperar que personas se postulen a el, si quieres formar parte de algun proyecto solo lo seleccionas y te postulas para el. </td>
      
    </tr>
    <tr>
      <td>¿Quiénes se pueden inscribir?</td>
      <td>Cualquier persona que este de alta en la plataforma puede formar parte de Devfi.</td>
    </tr>
    <tr>
      <td>¿Qué necesito para inscribirme a un proyecto?</td>
      <td>Para inscribirte a un proyecto lo unico que se ncesita es tu CV.</td>
    </tr>
   
  </tbody>
</Table>
  </Container>)
  
};

export default FAQ;

