import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext';
import WordSummary from '../WordSummary/WordSummary';

class WordSummaryList extends Component {
  static contextType = UserContext;

  render() {
    let totalCorrect = 0;
    const items = this.context.words.map(wordObj => {
      console.log('CURRENT WORDOBJ IS: ', wordObj)
      totalCorrect += wordObj.correct_count;
      return (
        <WordSummary word={wordObj} key={wordObj.id}/>
      )
    });
    return (
      <div className='word-summary-list-container'>
        <div className='wordsummarylist-panel-top'>
        {`Total correct answers: ${totalCorrect}`}
        </div>
        <ul id='word-summary-list'>
          {items}
        </ul>
      </div>
    )
  }
}

export default WordSummaryList;