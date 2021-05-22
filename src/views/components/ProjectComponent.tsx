import { Project } from "../../Types";
import { Card, Button, Col } from "react-bootstrap";
import { Tag } from "@chakra-ui/react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useProfile } from "../../hooks/useProfile";

interface ProjectComponentProps {
  project: Project;
}

const TagsContainer = styled.div`
  margin-bottom: 10px;
`;

const ProjectComponent = (props: ProjectComponentProps) => {
  const { project } = props;
  const { data: profile } = useProfile(project?.user);
  let history = useHistory();

  const handleClick = () => {
    history.push(`/project/${project._id}`);
  };

  const handleGoToProfile = () => {
    history.push(`/profile/${project?.user}`);
  };
  console.log(project);
  return (
    <Col xs={12} md={4}>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 32,
        }}
      >
        <Card.Img
          variant="top"
          style={{
            backgroundColor: "#102046",
            height: 120,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <a style={{ color: "blue" }} onClick={handleGoToProfile}>
            {" "}
            {profile.fullName}
          </a>
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
