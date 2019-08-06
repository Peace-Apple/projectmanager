import React, { Component } from 'react';
import { AddProject } from './AddProject';
import { Projects } from './Projects';
import uuid from 'uuid';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      projects: []
      // displayProject: false
    };
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
  }

  // componentDidMount(){
  //     const {match} = this.props
  //     console.log(match)
  //     if (match.params.endpoint === "projects"){
  //         this.setState({
  //             displayProject: true
  //         });
  //     }
  // }

  handleDeleteProject(id) {
    console.log(this.state.projects);
    let projects = this.state.projects;
    let index = projects.findIndex((x) => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  render() {
    //   const addProjectProps = {displayProject: this.state.displayProject}
    //   console.log(addProjectProps);
    return (
      <div className="container">
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default Root;
