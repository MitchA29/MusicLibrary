import React from 'react';
import "./MusicTable.css";

function MusicTable (props) {
    return(
        <table className="table table-light">
            <thead>
                <tr>
                    <th scope="col">Song</th>
                    <th scope="col">Album</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map(song =>
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.releaseDate}</td>
                        </tr>
                        )}
            </tbody>
        </table>
    )
}
export default MusicTable;