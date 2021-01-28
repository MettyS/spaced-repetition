import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
//import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button'
import { Input, Label } from '../Form/Form'

import './LearningPage.css'

class LearningPage extends Component {

  constructor(props) {
    super(props)
    const { head } = props;
    let state = {
          word: head ? head.nextWord : null,
          prevWord: head ? head.nextWord : null,
          answer: null,
          totalScore: null,
          wordCorrectCount: null,
          wordIncorrectCount: null,
          error: null,
          first: true,
          guess: null
        }

    this.state = state;
  }
  

  componentDidMount = () => {

  }

  handleGuess = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    const { guess } = e.target;

    const guessReq = {
      guess: guess.value
    }
    LanguageApiService.makeGuess(guessReq)
      .then(res => {
        console.log(res);
        
        this.setState({
          ...res,
          first: false,
          guess: guess.value,
          prevWord: this.state.word,
          word: res.nextWord,
        });
      })
      .catch( er => {
        console.log('ERROR: ', er);
        this.setState({
          error: er
        })
      })
  }

  renderPage = (word, totalScore, wordCorrectCount, wordIncorrectCount) => {
    // const { word, totalScore, wordCorrectCount, wordIncorrectCount} = this.state;
    return (
      <div className='learning-body'>
        <div className='top-panel'>
          <h2>{`Translate the word:`}</h2>
          <span>{`${word}`}</span>
          <div className='DisplayScore'>
            <p>{`Your total score is: ${totalScore}`}</p>
          </div>
        </div>
        <div className='bottom-panel'>

          <form onSubmit={this.handleGuess}>
            <Label htmlFor='learn-guess-input'>What's the translation for this word?</Label>
            <Input required type='text' id='learn-guess-input' name='guess' placeholder='abc' />
            <Button type='submit' className='learning-btn'>
            Submit your answer
            </Button>
            
          </form>

          <div className='stats'>
            <div><h5>{`correct answers: ${wordCorrectCount}`}</h5></div>
            <div><h5>{`incorrect answers: ${wordIncorrectCount}`}</h5></div>
          </div>
        </div>
      </div>
    )
  }

  renderFirst = ( head ) => {
    return (
      <div className='learning-body'>
        <div className='top-panel'>
          <h2>{`Translate the word:`}</h2>
          <span>{`${head.nextWord}`}</span>
          <div className='DisplayScore'>
            <p>{`Your total score is: ${head.totalScore}`}</p>
          </div>
        </div>
        <div className='bottom-panel'>

          <form onSubmit={this.handleGuess}>
            <Label htmlFor='learn-guess-input'>What's the translation for this word?</Label>
            <Input required type='text' id='learn-guess-input' name='guess' placeholder='abc' />
            <Button type='submit' className='learning-btn'>
              Submit your answer
            </Button>
            
          </form>

          <div className='stats'>
            <div><h5>{`You have answered this word correctly ${head.wordCorrectCount} times.`}</h5></div>
            <div><h5>{`You have answered this word incorrectly ${head.wordIncorrectCount} times.`}</h5></div>
          </div>
        </div>
      </div>
    )
  }

  handleContinue = () => {
    this.setState({
      error: null,
      guess: null
    })
  }

  renderResult = (answer, totalScore, guess, prevWord) => {
    // const { word, answer, totalScore, guess, prevWord } = this.state;
    console.log('ANSWER: ', answer);
    console.log('GUESS: ', guess);
    const isCorrect = (answer === guess);

    return (
      <div className='learning-body'>
        <h2>{isCorrect ? 'You were correct! :D' : 'Good try, but not quite right :('}</h2>
        <div className='DisplayFeedback'>
          <p>{`The correct translation for ${prevWord} was ${answer} and you chose ${guess}!`}</p>
        </div>
        <Button type='button' onClick={this.handleContinue}>Try another word!</Button>
        <div className='DisplayScore'>
            <p>{`Your total score is: ${totalScore}`}</p>
          </div>
      </div>
    )
  }

  render() {
    const { head } = this.props;
    const { first } = this.state;
    const loading = head ? false : true;

    const { word, answer, totalScore, guess, prevWord, wordCorrectCount, wordIncorrectCount } = this.state;

    const pageContent = loading ? (<div>Loading...</div>)
      : first 
        ? this.renderFirst(head) 
        : guess 
          ? this.renderResult(answer, totalScore, guess, prevWord)
          : this.renderPage(word, totalScore, wordCorrectCount, wordIncorrectCount);

    return (
      <div className='learning-page'>
        {pageContent}
      </div>
    );
  }
}

export default LearningPage
