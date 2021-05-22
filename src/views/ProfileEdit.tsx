import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";
import {
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Button,
  NumberDecrementStepper,
  Tag,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  CreateProject,
  DeleteProject,
  EditProject,
  UpdateUserInfo,
} from "../apiManager";
import { UserContext } from "../context/UserContextProvider";
import { useProject } from "../hooks/useProject";
import { ButtonBase } from "@material-ui/core";
import { useProfile } from "../hooks/useProfile";

const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-flow: column;
  color: black;
  height: 600px;
  width: 100%;
  background: white;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 5px;
`;
interface ParamTypes {
  id: string;
}
const ProfileEdit = () => {
  let history = useHistory();
  let { user } = useContext(UserContext);
  let { id } = useParams<ParamTypes>();
  const { data: profile } = useProfile(user && id);
  const [fullName, setFullName] = useState(profile.fullName);
  const [university, setUniversity] = useState(profile.university);
  const [objectives, setObjectives] = useState(profile.objectives);
  const [languages, setLanguages] = useState<string[]>(profile.languages);
  const [language, setLanguage] = useState("");
  const [github, setGithub] = useState(profile.github);
  const toast = useToast();

  useEffect(() => {
    if (id !== user._id) {
      history.push("/");
    }
    if (!localStorage.getItem("accessToken")) {
      history.push("/");
    } else {
      console.log("No access token");
    }
  }, []);

  const handleSave = async () => {
    if (fullName !== "") {
      let response = await UpdateUserInfo(
        {
          fullName,
          university,
          objectives,
          languages,
          github,
        },
        user._id
      );
      toast({
        title: "El usuario fue editado de manera exitosa.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Favor de llenar los campos.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleAddLang = () => {
    if (language !== "" && !languages.includes(language)) {
      setLanguages([...languages, language]);
      setLanguage("");
    }
  };

  const handleDelete = (t: string) => {
    let newLanguages = languages.filter((tg: string) => tg != t);
    setLanguages(newLanguages);
  };
  return (
    <Container>
      <Title>Editar perfil</Title>
      <div>
        <Row>
          <Col xs={12}>
            <p>Nombre Completo</p>
            <Input
              placeholder="Nombre Completo"
              style={{ marginBottom: 10 }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <p>Nombre de Universidad</p>
            <Input
              placeholder="Universidad"
              style={{ marginBottom: 10 }}
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <p>Objetivos personales</p>
            <Input
              placeholder="Objetivos"
              style={{ marginBottom: 10 }}
              value={objectives}
              onChange={(e) => setObjectives(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <p>Agregar lenguajes de programacion</p>
          </Col>

          <Col xs={12} style={{ display: "flex", flexFlow: "row" }}>
            <Input
              placeholder="Lenguajes"
              style={{ marginBottom: 10 }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <Button onClick={handleAddLang}>Agregar lenguaje</Button>
          </Col>
          <div style={{ marginBottom: 10, marginLeft: 16 }}>
            {languages &&
              languages.map((t, index) => {
                return (
                  <Tag style={{ marginRight: 5 }} key={index}>
                    {t}
                    <a
                      onClick={() => handleDelete(t)}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "revert",
                        color: "grey",
                      }}
                    >
                      x
                    </a>
                  </Tag>
                );
              })}
          </div>
          <Col xs={12}>
            <p>Github Personal</p>
            <Input
              placeholder="Github"
              style={{ marginBottom: 10 }}
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </Col>
        </Row>

        <Button onClick={handleSave}>Guardar</Button>
      </div>
    </Container>
  );
};
export default ProfileEdit;
