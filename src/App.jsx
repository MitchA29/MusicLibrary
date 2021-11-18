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
        };
    }

    componentDidMount(){
        this.getSongs();
    }

    async getSongs(){
        let response = await axios.get("")
        console.log(response.data.jokes);
        this.setState({
            songs: response.data.songs
        })
    }

    createSong(newSong){
        console.log("From the SongForm on App component", newSong);
        this.songs.push(newSong);
    }

    render() {
        return(
            <div className="container-fluid">
                <SongForm createNewSong={this.createSong} />
            </div>
        )
    }
}

export default App;



