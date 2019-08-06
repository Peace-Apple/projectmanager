import React, { Component } from 'react';
import uuid from 'uuid';
import {connect} from "react-redux";
import {addProject} from "../actions/addProjectActions";

export class AddProject extends Component {
    
//    to add the data that we submit into state
    // constructor(){
    //     super();
    //     this.state = {
    //         projects: [],
    //         newProject: {},
    //     }

    // }
static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile Development"]
}

handleAddProject(project){
    console.log(this.state.projects)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
}

handleSubmit(e){
    if(this.refs.title.value === ''){
        alert('Title is required');
    } else {
        const newProject = {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }
        console.log(newProject);
        this.handleAddProject(newProject);
    }

    e.preventDefault();
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items,
        newProject: state.newProject.item

    };
};

export default connect(mapStateToProps, {addProject})(AddProject);







