import React, { Component } from 'react';
import LearningPage from '../../components/LearningPage/LearningPage';
import LanguageApiService from '../../services/language-api-service'


class LearningRoute extends Component {
  state = {
    head: null
  }

  componentDidMount = () => {
    LanguageApiService.getHead()
      .then(res => {
        console.log('recieved this head: ', res);
        this.setState({head: res})
      })
  }

  render() {
    const { head } = this.state

    const pageContent = head ? (<LearningPage head={head} />) : 'Loading...'

    return (
      <section id='learning'>
        {pageContent}
      </section>
    );
  }
}

export default LearningRoute
