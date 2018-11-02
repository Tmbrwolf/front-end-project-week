import React, { Component } from 'react';
import './index.css';

class CreateNote extends Component {
    constructor() {
      super();
      this.state = {
        title: '',
        content: ''
      }
    }

    // updateFieldChange = e => {
    //   this.setState({ [e.target.name]: e.target.value});
    // }

    submitChange = e => {
      // const notes = this.state.notes;
      const note = {
        title: this.state.title,
        content: this.state.content
      }
      //add axios call here?
    }

    render() {
        return (
          <div className='noteView_container'>
            <div className='noteView_topContent'>
              <h2 className='content_header'>
                Create New Note:
              </h2>
            </div>
            <div className='createNote_form'>
              <input type='text'
                className='createNote_tfield'
                placeholder='Note Name'
                value={this.state.title}
                onChange={this.updateFieldChange}
              />
            <textarea className='createNote_bfield'
              placeholder='Content Body'
              rows="28"
              value={this.state.content}
              onChange={this.updateFieldChange}
            />
            <a href='#' className='button_link'>
              <div className='nav_button createNote_button' onClick={this.submitChange}>Save</div>
            </a>
            </div>
          </div>
        );
    }
}

export default CreateNote;
