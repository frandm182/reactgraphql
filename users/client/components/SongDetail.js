import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongs';

class SongDetail extends Component {
    render() {
      return (
          <div>              
              <h3>Song detail</h3>             
          </div>
      )
    }
}

export default SongDetail;