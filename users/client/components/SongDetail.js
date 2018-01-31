import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        console.log(this.props)
      return (
          <div>              
              <h3>Song detail</h3>             
          </div>
      )
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);