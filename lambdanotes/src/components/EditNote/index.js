import React, { Component } from 'react';
import './index.css';

class EditNote extends Component {
    render() {
        return (
          <div className='noteView_container'>
              <div className='noteView_topContent'>
                  <h4 className='content_header'>
                      Edit Note:
                  </h4>
              </div>
              <div className='createNote_form'>
                  <input
                      type='text'
                      className='createNote_tfield'
                      placeholder='Title'
                  />
                  <textarea
                      className='createNote_bfield'
                      placeholder='Content'
                  />
                  <a href='#' className='button_link'>
                      <div className='nav_button createNote_button'>Update</div>
                  </a>
              </div>
          </div>
        );
    }
}

export default EditNote;
