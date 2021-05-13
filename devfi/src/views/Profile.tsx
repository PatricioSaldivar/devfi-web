import React, { useContext } from "react";
import "react-bootstrap";
import { Button, Nav } from "react-bootstrap";
import { UserContext } from "../context/UserContextProvider";
import { useProfile } from "../hooks/useProfile";
import styled from "styled-components";
import { useHistory } from "react-router";
import { profileEnd } from "node:console";
import { Tag } from "@chakra-ui/tag";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  color: black;
  height: 650px;
  width: 100%;
  background: white;
`;

const ProjectTitle = styled.h1`
  font-size: 42px;
  text-align: center;
`;
const Profile = () => {
  let history = useHistory();
  const { user } = useContext(UserContext);
  const { data: profile } = useProfile(user && user._id);
  console.log(profile);
  return (
    <Container>
      <Button onClick={() => history.push(`/profile/edit/${user._id}`)}>
        Editar perfil
      </Button>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ProjectTitle>Hola, {profile.fullName}</ProjectTitle>
        {profile.university != "" && (
          <div>
            <p style={{ fontWeight: "bold" }}>Universidad:</p>
            <p>{profile.university}</p>
          </div>
        )}

        {profile.objectives != "" && (
          <div>
            <p style={{ fontWeight: "bold" }}>Objetivos:</p>
            <p>{profile.objectives}</p>
          </div>
        )}

        {profile.languages && profile.languages.length > 0 && (
          <div>
            <p style={{ fontWeight: "bold" }}>Lenguajes de programacion: </p>

            <div
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "center",
              }}
            >
              {profile.languages &&
                profile.languages.map((lang: string) => {
                  return <Tag style={{ marginRight: 5 }}>{lang}</Tag>;
                })}
            </div>
          </div>
        )}

        {profile.github != "" && (
          <div>
            <p style={{ fontWeight: "bold" }}>Github:</p>
            <a href={profile.github}>{profile.github}</a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Profile;
