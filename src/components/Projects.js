import React, { Component } from 'react';
import { ProjectItem } from './ProjectItem';

export class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    console.log(this.props.projects);
    if (this.props.projects) {
      projectItems = this.props.projects.map((project) => {
        return <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />;
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}
