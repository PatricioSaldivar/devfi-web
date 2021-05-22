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
import { CreateProject, DeleteProject, EditProject } from "../apiManager";
import { UserContext } from "../context/UserContextProvider";
import { useProject } from "../hooks/useProject";
import validator from "validator";

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
const EditProjectView = () => {
  let history = useHistory();
  let { user } = useContext(UserContext);
  let { id } = useParams<ParamTypes>();
  const { data: project } = useProject(id);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [github, setGithub] = useState(project.github);
  const [colab, setColab] = useState(project.colab);
  const [tags, setTags] = useState<string[]>(project.tags);
  const [tag, setTag] = useState("");
  const [mail, setMail] = useState(project.mail);
  const toast = useToast();

  const validateEmail = (email: string) => {
    if (!validator.isEmail(email) && email !== "") {
      toast({
        title: "Email incorrecto.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (project.user != user._id) {
      history.push("/");
    }
    if (!localStorage.getItem("accessToken")) {
      history.push("/");
    } else {
      console.log("No access token");
    }
  }, []);
  const handleEditProject = async () => {
    if (
      name !== "" &&
      description !== "" &&
      colab > 0 &&
      (mail === "" || validator.isEmail(mail))
    ) {
      if (description.length < 65) {
        let response = await EditProject(
          {
            name,
            description,
            colab,
            github,
            tags,
            mail,
          },
          project._id
        );
        toast({
          title: "El projecto fue editado de manera exitosa.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Favor de describir su proyecto en menos de 65 palabras.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Favor de llenar los campos.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleAddTag = () => {
    if (tag !== "" && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleDelete = (t: string) => {
    let newTags = tags.filter((tg: string) => tg !== t);
    setTags(newTags);
  };

  const handleDeleteProject = async () => {
    let response = await DeleteProject(project._id);
    gotoProjects();
    toast({
      title: "El projecto fue borrado de manera exitosa.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const gotoProjects = async () => {
    await history.push("/projects");
  };
  return (
    <Container>
      <Title>Editar proyecto</Title>
      <div>
        <Row>
          <Col xs={12}>
            <p>Nombre del proyecto</p>
            <Input
              placeholder="Proyecto pelos"
              style={{ marginBottom: 10 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <p>Descripcion del proyecto</p>
            <Textarea
              placeholder="Descripcion del proyecto"
              style={{ marginBottom: 10 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6}>
            <p>URL Github</p>
            <Input
              placeholder="Github (opcional)"
              style={{ marginBottom: 10 }}
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6}>
            <p>Numero de colaboradores</p>
            <NumberInput
              defaultValue={0}
              value={colab}
              onChange={(value) => setColab(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Col>
          <Col xs={12} md={6}>
            <p>Mail Contacto</p>
            <Input
              placeholder="ejemplo@mail.com"
              style={{ marginBottom: 10 }}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onBlur={(e) => {
                validateEmail(e.target.value);
              }}
            />
          </Col>
          <Col xs={12}>
            <p>Agregar etiquetas</p>
          </Col>

          <Col xs={12} style={{ display: "flex", flexFlow: "row" }}>
            <Input
              placeholder="Etiquetas"
              style={{ marginBottom: 10 }}
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button onClick={handleAddTag}>Agregar etiqueta</Button>
          </Col>
        </Row>
        <div style={{ marginBottom: 10 }}>
          {tags &&
            tags.map((t, index) => {
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

        <Button onClick={handleEditProject}>Editar proyecto</Button>
        <Button
          style={{ marginLeft: 10 }}
          color="red"
          onClick={handleDeleteProject}
        >
          Borrar proyecto
        </Button>
      </div>
    </Container>
  );
};
export default EditProjectView;
