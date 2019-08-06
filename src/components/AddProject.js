import React, { Component } from 'react';
import uuid from 'uuid';

export class AddProject extends Component {
  //    to add the data that we submit into state

  static defaultProps = {
    categories: [ 'Web Design', 'Web Development', 'Mobile Development' ]
  };

  addProject(project) {
    this.props.handleAddProject(project);
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title is required');
    } else {
      console.log(this.refs.category.value);
      const newProject = {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      };

      this.props.addProject(newProject);
    }

    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map((category) => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
