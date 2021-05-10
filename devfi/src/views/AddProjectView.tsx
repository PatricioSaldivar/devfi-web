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
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { CreateProject } from "../apiManager";
import { UserContext } from "../context/UserContextProvider";

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
const AddProjectView = () => {
  let history = useHistory();
  let { user } = useContext(UserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [colab, setColab] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/");
    } else {
      console.log("No access token");
    }
  }, []);
  const handleAddProject = async () => {
    if (name != "" && description != "" && colab > 0) {
      let response = await CreateProject(
        {
          name,
          description,
          colab,
          github,
          tags,
        },
        user._id
      );
      toast({
        title: "El projecto fue creado de manera exitosa.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setName("");
      setDescription("");
      setColab(0);
      setGithub("");
      setTags([]);
      setTag("");
    }
  };

  const handleAddTag = () => {
    if (tag !== "" && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag("");
    }
  };
  return (
    <Container>
      <Title>Agregar proyecto</Title>
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
          {tags.map((t, index) => {
            return (
              <Tag style={{ marginRight: 5 }} key={index}>
                {t}
              </Tag>
            );
          })}
        </div>

        <Button onClick={handleAddProject}>Agregar proyecto</Button>
      </div>
    </Container>
  );
};
export default AddProjectView;
