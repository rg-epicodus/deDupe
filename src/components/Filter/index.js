import React, { Component } from 'react';
import data from '../../lib/leads.json';

class Filter extends Component {
  constructor(props) {
    super(props);
    const filteredLeads = [];

    this.state = {filteredLeads};
  }

  render(){

    return(
      <div>
        {this.state.filteredLeads.map((lead, index) => (
          <ul key={index}>
            <li>Lead ID: {lead.id}</li>
          </ul>
        ))}
    </div>

    );
  }
}

export default Filter;