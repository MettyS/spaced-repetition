import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import LanguageApiService from '../../services/language-api-service';

import WordSummaryList from '../../components/WordSummaryList/WordSummaryList';
import Button from '../../components/Button/Button';

class DashboardRoute extends Component {
  static contextType = UserContext

  componentDidMount() {
    LanguageApiService.getLanguage(this.context.user)
                  .then(res => {
                    console.log('the result from languagegetter is: ', res)
                    this.context.processLanguage(res);
                  })
                  .catch(er => {
                    console.log(er);
                  })
  }

  handleButtonClick() {
    console.log('you pressed the button!');
  }

  render() {
    const languageName = this.context.language.name;
    console.log('lang: ',languageName);
    return (
      <section id='dashboard' className='margin-container margin-bar'>
        <h3>{languageName}</h3>
        <Button onClick={this.handleButtonClick}>start practicing</Button>

        <WordSummaryList />
      </section>
    );
  }
}

export default DashboardRoute
