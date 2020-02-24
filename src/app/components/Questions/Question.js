import React from 'react';

const Choice = ({ choice, onClick, selected }) => {
  return (
    <button
      className={'list-group-item list-group-item-action ' + (selected ? 'active': '')}
      onClick={onClick}
    >
      {choice.value}
    </button>
  );
};

const Question = ({ question, onAttempt, attempted }) => (
  <div className='card m-3'>
    <h3 className='card-header'>{question.title}</h3>
    <div className='list-group'>
      {question.choices.map(choice => (
        <Choice
          onClick={() => {
            onAttempt(question.id, choice.id);
          }}
          key={choice.id}
          choice={choice}
          selected= {attempted && attempted === choice.id}
        />
      ))}
    </div>
  </div>
);

export default Question;
