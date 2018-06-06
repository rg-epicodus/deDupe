import React, { Component } from 'react';
import ReadJSON from '../ReadJSON';
import Filter from '../Filter';
import './styles.css';

class Home extends Component {
  render() {
    return(
      <section className="main">
        <div>
          <h1>This is: Home Component</h1>
        </div>
        <Filter />
      </section>
    );
  }
}

export default Home;