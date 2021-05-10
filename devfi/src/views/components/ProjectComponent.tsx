import { Project } from "../../Types";
import { Card, Button, Col } from "react-bootstrap";
import { Tag } from "@chakra-ui/react";
import styled from "styled-components";
import { useHistory } from "react-router";

interface ProjectComponentProps {
  project: Project;
}

const TagsContainer = styled.div`
  margin-bottom: 10px;
`;

const ProjectComponent = (props: ProjectComponentProps) => {
  const { project } = props;
  let history = useHistory();
  const handleClick = () => {
    history.push(`/project/${project._id}`);
  };

  return (
    <Col xs={12} md={4}>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Card.Img
          variant="top"
          style={{ backgroundColor: "#102046", height: 120 }}
        />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <TagsContainer>
            {project.tags.map((tag) => {
              return <Tag style={{ marginRight: 5 }}>{tag}</Tag>;
            })}
          </TagsContainer>

          <Button variant="primary" onClick={handleClick}>
            Ir a proyecto
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectComponent;
