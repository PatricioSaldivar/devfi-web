import React, { useContext } from "react";
import "react-bootstrap";
import { Button, Nav } from "react-bootstrap";
import { UserContext } from "../context/UserContextProvider";
import { useProfile } from "../hooks/useProfile";
import styled from "styled-components";
import { useHistory } from "react-router";
import { profileEnd } from "node:console";

const Container = styled.div`
  display: flex;
  padding: 16px;
  color: black;
  height: 650px;
  width: 100%;
  background: white;
`;

const ProjectTitle = styled.h1`
  font-size: 42px;
`;
const Profile = () => {
  let history = useHistory();
  const { user } = useContext(UserContext);
  const { data: profile } = useProfile(user && user._id);
  return (
    <Container>
      <div>
        <ProjectTitle>Hola, {profile.fullName}</ProjectTitle>
        <Button onClick={() => history.push(`/profile/edit/${user._id}`)}>
          Edit
        </Button>
      </div>
    </Container>
  );
};

export default Profile;
