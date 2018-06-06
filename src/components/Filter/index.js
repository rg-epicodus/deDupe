import React, { Component } from 'react';
import data from '../../lib/leads.json';

class Filter extends Component {
  constructor(props) {
    super(props);
    function filterJSON(){
      
      let people = [];
      people = data.filter(function(item, pos, self){
        return self.indexOf(item) === pos;
      })
      let items = people.map((item) => 
        item+','
      );
    
    this.state = {items};
  }
}

  render(){

    return(
      <div>
          {this.state.people.map((person, index) => (
          <ul key={index}>
            <li>Lead ID: {person.id}</li>
            <li>Lead Email: {person.email}</li>
            <li>Lead First Name: {person.firstName}</li>
            <li>Lead Last Name: {person.lastName}</li>
            <li>Lead Address: {person.address}</li>
            <li>Lead Entry Date: {person.entryDate}</li>
          </ul>
        ))}

      </div>

    );
  }
}
export default Filter;