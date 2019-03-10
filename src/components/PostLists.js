import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostLists extends React.Component{
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return(
            <div>
                Post lists
            </div>
        );
    }

}

export default connect (
    null, 
    { fetchPosts } 
)(PostLists);
