import React, { Component } from 'react'

class WordSummary extends Component {
  render() {
    const word = this.props.word;

    return (
      <li className='word-summary'>
        <div className='word-panel-top'>
          <div className='wordtop-panel-left'>
            <h3>{word.original}</h3>
          </div>
          <div className='wordtop-panel-right'>
            <h4>{word.translation}</h4>
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