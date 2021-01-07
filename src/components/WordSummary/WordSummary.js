import React, { Component } from 'react'

class WordSummary extends Component {
  render() {
    const word = this.props.word;

    return (
      <li className='word-summary'>
        <div className='word-panel-top'>
          <div className='wordtop-panel-left'>
            <h4>{word.original}</h4>
          </div>
          <div className='wordtop-panel-right'>
            <h5>{word.translation}</h5>
          </div>

        </div>
        <div className='word-panel-bottom'>
          <div className='word-correct-count'>
            {`correct answer count: ${word.correct_count}`}
          </div>
          <div className='word-incorrect-count'>
            {`incorrect answer count: ${word.incorrect_count}`}
          </div>
        </div>
      </li>
    )
  }
}

export default WordSummary;