import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Main() {
  const [question, setQuestion] = useState('');
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [opt4, setOpt4] = useState('');
  const [ans,setAns] = useState('')

  async function formSubmit(e) {
     e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/form', {
        question,
        opt1,
        opt2,
        opt3,
        opt4,
        ans,
      });

      if (res.data === 'inserted') {
        alert('Question added');
      } else {
        console.log('Failed to insert');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className='title'>Admin page to add Questions for MCQ</h1>
      <div>
        <form className='border' >
          <textarea
            cols='20'
            name='question'
            id='question'
            placeholder='Question'
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <br />
          <input
            type='text'
            name='option1'
            id='option1'
            placeholder='Option 1'
            onChange={(e) => setOpt1(e.target.value)}
          />
          <br />
          <input
            type='text'
            name='option2'
            id='option2'
            placeholder='Option 2'
            onChange={(e) => setOpt2(e.target.value)}
          />
          <br />
          <input
            type='text'
            name='option3'
            id='option3'
            placeholder='Option 3'
            onChange={(e) => setOpt3(e.target.value)}
          />
          <br />
          <input
            type='text'
            name='option4'
            id='option4'
            placeholder='Option 4'
            onChange={(e) => setOpt4(e.target.value)}
          />
          <br />
          <input
            type='text'
            name='answer'
            id='answer'
            placeholder='Answer'
            onChange={(e) => setAns(e.target.value)}
          />
          <button type='submit' onClick={formSubmit} >Submit</button>
          <button >Add new</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
