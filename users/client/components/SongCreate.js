import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }
    render() {
      return (
          <div>
              <h3>Create new song</h3>
              <form>
                  <label>Song Title:</label>
                  <input type="text" 
                    onChange={ev => this.setState({ title: ev.target.value })} 
                    value={this.state.title}
                    />
              </form>
          </div>
      )
    }
}




export default SongCreate;