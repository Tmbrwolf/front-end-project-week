import React, { Component } from 'react';
import './index.css';

class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            notes: [
                {
                    id: '1',
                    title: 'First Note',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                },
                {
                    id: '2',
                    title: 'Second Note',
                    body: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                },
                {
                    id: '3',
                    title: 'Third Note',
                    body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                },
                {
                    id: '4',
                    title: 'Fourth Note',
                    body: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                },
            ]
        }
    }

    displayNotes = (note, index) => {
        return (
            <div className='note' key={note + index.title}>
                <div>
                    <h4>{note.title}</h4>
                    <hr></hr>
                    <p>{note.body}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notes.map(this.displayNotes)}
                </div>
            </div>
        );
    }
}

export default NotesList;
