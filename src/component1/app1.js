import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../actions'
import { Table } from 'react-bootstrap'

class App1 extends Component {
  
 
  componentWillMount() {
    this.props.showUsers()
  }
  
  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td><h3>{user.id}</h3></td>
          <br/>
          <td><h3>{user.login}</h3></td>
          {/*<td>{user.avatar_url}</td>
          <td>{user.node_id}</td> */}

          
        </tr>
      )
    })
  }
  
  render() {
    return (
      <div>
        <button className= "btn btn-primary">Users List</button>
        <Table responsive>
          <thead>
            <tr>
              <th ><h3>Id----</h3></th>
              
              <th ><h3>Login Name</h3></th>
              
              {/* <th>Avtar link</th>
              <th>Node ID</th>*/}

            </tr>
          </thead>
          <tbody>
            { this.renderUsersList() }
          </tbody>
        </Table>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { showUsers })(App1)