import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            input: "",
        }
    }
}

export default App;



