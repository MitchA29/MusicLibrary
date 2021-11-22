import React, { Component } from 'react';
import "./SongForm.css";

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            album: "",
            artist: "",
            genre: "",
            release_date: "",
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
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <label>Album:</label>
                <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />
                <label>Artist:</label>
                <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                <label>Genre:</label>
                <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                <label>Release Date:</label>
                <input type="date" name="release_date" value={this.state.release_date} onChange={this.handleChange} />
                <button type="submit">Add Song</button>
            </form>
        );
    }
}

export default SongForm;