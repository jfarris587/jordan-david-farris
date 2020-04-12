import React, { FC } from "react";
import { Heading, IconWrapper, Description, Icon, ProjectType } from "./styles";
import { Project } from "./types";

const ProjectHeader: FC<Project> = ({
  name,
  description,
  color,
  type,
  icons,
}) => (
  <>
    <a href="#" style={{ textDecoration: "none", color: "#000" }}>
      <Heading color={color}>{name}</Heading>
    </a>
    <ProjectType>{type}</ProjectType>
    <IconWrapper>
      {icons.map((icon) => (
        <Icon key={icon} className={icon} />
      ))}
    </IconWrapper>
    <Description dangerouslySetInnerHTML={{ __html: description }} />
  </>
);

export default ProjectHeader;
