import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';

class LearningRoute extends Component {
  static contextType = UserContext;

  render() {
    const languageName = this.context.language;
    console.log('lAnGuAgE: ',languageName);

    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default LearningRoute
