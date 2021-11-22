import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './components/TitleBar/TitleBar';
import SongForm from './components/SongForm/SongForm';
import MusicTable from './components/MusicTable/MusicTable';


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
        let response = await axios.get("http://127.0.0.1:8000/music/")
        console.log(response.data.jokes);
        this.setState({
            songs: response.data.songs
        })
    }

    async createSong(newSong){
        console.log("From the SongForm on App component", newSong);
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong)
        console.log(response)
    }

    render() {
        return(
            <div className="container-fluid">
                <TitleBar />
                <MusicTable />
                <SongForm createNewSong={this.createSong} />
            </div>
        )
    }
}

export default App;



