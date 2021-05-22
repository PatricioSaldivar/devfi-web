import React, { useContext } from "react";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useProject } from "../hooks/useProject";
import { Tag } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f1f47",
    },
    secondary: {
      main: "#0f1f47",
    },
  },
});

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
const Title = styled.h1`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;
interface ParamTypes {
  id: string;
}

const ProjectView = () => {
  let history = useHistory();
  const { user } = useContext(UserContext);
  let { id } = useParams<ParamTypes>();
  const { data: project } = useProject(id);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/landing");
      console.log("No access token");
    }
  }, []);
  return (
    <Container>
      <div>
        <ProjectTitle>{project.name}</ProjectTitle>
        {project.tags &&
          project.tags.map((tag: string, index: number) => {
            return (
              <Tag style={{ marginRight: 10 }} key={index}>
                {tag}
              </Tag>
            );
          })}
        <Title>Descripción de proyecto</Title>
        <h1>{project.description}</h1>
        {project.mail && (
          <h1>
            Correo de contacto:{" "}
            <a href={`mailto:${project.mail}`}>{project.mail}</a>
          </h1>
        )}

        {project.user === user._id && (
          <Button
            onClick={() => history.push(`/project/edit/${project._id}`)}
            style={{ marginTop: 10 }}
          >
            Editar projecto
          </Button>
        )}
        <div style={{ marginTop: 35 }}>
          <Title>Compartir en redes sociales:</Title>
          <FacebookShareButton
            url={`https://devfi.netlify.app/project/${project._id}`}
            quote={project.name}
            style={{ marginRight: 10 }}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={`https://devfi.netlify.app/project/${project._id}`}
            title={project.title}
            style={{ marginRight: 10 }}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton
            url={`https://devfi.netlify.app/project/${project._id}`}
            title={project.title}
            style={{ marginRight: 10 }}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </Container>
  );
};
export default ProjectView;
