import React, { Component } from 'react';

class Control extends Component {
    render() {

      return (
        <ul>
           <li><a href="/create" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('create');
           }.bind(this)}></a>create</li>
           
           <li><a href="/update" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('update');
           }.bind(this)}></a>update</li>
           
           <il><input onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('delete');
           }.bind(this)}type="button" value="delete"></input></il>
         </ul>
      );
    }
  }

  export default Control;