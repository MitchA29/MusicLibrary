import React, { Component } from 'react';
import "./SongForm.css";

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: "",
            album: "",
            artist: "",
            genre: "",
            releaseDate: "",
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state);

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Song Title:</label>
                <input type="text" name="songTitle" value={this.state.songTitle} onChange={this.handleChange} />
                <label>Album:</label>
                <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />
                <label>Artist:</label>
                <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                <label>Genre:</label>
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                <label>Release Date:</label>
                <input type="text" name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} />
                <button type="submit">Add Song</button>
            </form>
        );
    }
}

export default SongForm;