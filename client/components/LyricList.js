import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricList extends Component {

    onLike(id) {
        this.props.mutate({
            variables: {id: id}
        })
    
    }

    renderLyrics() {
        return (
            this.props.lyrics.map((lyric => {
                return (
                    <li key={lyric.id} className="collection-item">{lyric.content}
                        <div className="vote-box">
                            <i className="material-icons" onClick={() => this.onLike(lyric.id)}>thumb_up</i>
                            {lyric.likes}
                        </div>
                    </li>)
            }))
        )
    }

    render() {

        console.log(this.props)
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID!) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
