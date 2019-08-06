import React, { Component } from 'react';
import {ProjectItem} from './ProjectItem';
import uuid from 'uuid';
import { connect } from "react-redux";
import { getProjects } from "../actions/projectsActions";

export class Projects extends Component {
    
    getProjects(){
        console.log(this.props);
        this.setState({projects: [
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
                },

        ]})
    }

    componentWillMount(){
        this.getProjects();

    }

    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects})

    }

  render() {
    let projectItems;
    console.log(this.state.projects);
    if(this.state.projects){
        projectItems = this.state.projects.map(project => {

    return(
        <ProjectItem onDelete={this.handleDeleteProject.bind(this)} key={project.title} project={project} />
    );
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

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps, { getProjects })(Projects);
