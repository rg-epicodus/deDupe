import React, { Component } from 'react';
import data from '../../lib/leads.json';

class ReadJSON extends Component{
  constructor(props) {
    super(props);
    const people = [];
    for (let i = 0; i < data.leads.length; i++) {
      people.push({
        id: data.leads[i]._id,
        email: data.leads[i].email,
        firstName: data.leads[i].firstName,
        lastName: data.leads[i].lastName,
        address: data.leads[i].address,
        entryDate: data.leads[i].entryDate
      });
      
    }
    this.state = {people};
  }

  render() {


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


export default ReadJSON;