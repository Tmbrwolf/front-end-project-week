import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import NotesList from '../NotesList';
import NoteView from '../NoteView';
import CreateNote from '../CreateNote';
import EditNote from '../EditNote';
import SideNav from '../SideNav';


class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
            <Switch>
                  <Route exact path="/" component={NotesList}></Route>
                  <Route path="/ViewNotesList" component={NotesList}></Route>
                  <Route path="/CreateNote" render={(props) => (
                  <CreateNote/>
                  )} />
                  <Route path="/EditNote" component={EditNote}></Route>
                  <Route path="/ViewNote" component={NoteView}></Route>
            </Switch>
                  <Route path="/" component={SideNav}></Route>
            </div>
        );
    }
}

export default MainContent;
