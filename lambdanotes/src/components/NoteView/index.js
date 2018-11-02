import React, { Component } from 'react';
import './index.css';

class NoteView extends Component {
  constructor() {
      super()
      this.state = {
          notes: [
              {
                  id: '1',
                  title: 'First Note',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                  createdAt: 1527536455211,
              },
              {
                  id: '2',
                  title: 'Second Note',
                  body: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                  createdAt: 1527536455220,
              },
              {
                  id: '3',
                  title: 'Third Note',
                  body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                  createdAt: 1527536455230,
              },
              {
                  id: '4',
                  title: 'Fourth Note',
                  body: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                  createdAt: 1527536455230,
              },
          ]
      }
  }
    render() {
      return (
          <div className='noteView_container'>
              <div className='noteView_topContent'>
                  <h3 className='content_header'>
                      {this.state.notes[0].title}
                  </h3>
                  <div>
                      <a href='#' className='func_link'>edit</a>
                      <a href='#' className='func_link'>delete</a>
                  </div>
              </div>
              <div className='notesList'>
                  <p className=''>
                      {this.state.notes[0].body}
                  </p>
              </div>
          </div>
        );
    }
}

export default NoteView;
