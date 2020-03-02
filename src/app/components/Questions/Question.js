import React from "react";

const Choice = ({ choice, onClick, selected }) => {
  return (
    <button
      className={
        "list-group-item list-group-item-action " + (selected ? "active" : "")
      }
      onClick={onClick}
    >
      {choice}
    </button>
  );
};
const withImage = Choice => props => {
  const newProps = {
    ...props,
    choice: (
      <>
        {props.choice} - <img src={props.imgSrc} alt={props.choice} /> 
      </>
    )
  };
  const Withimage = <Choice {...newProps} />;
  return Withimage;
};

const ImageChoice = withImage(Choice);

const Question = ({ question, onAttempt, attempted }) => (
  <div className="card m-3">
    <h3 className="card-header">{question.title}</h3>
    <div className="list-group">
      {question.choices.map(choice =>
        choice.imgSrc ? (
          <ImageChoice
            onClick={() => {
              onAttempt(question.id, choice.id);
            }}
            key={choice.id}
            choice={choice.value}
            selected={attempted && attempted === choice.id}
            imgSrc={choice.imgSrc}
          />
        ) : (
          <Choice
            onClick={() => {
              onAttempt(question.id, choice.id);
            }}
            key={choice.id}
            choice={choice.value}
            selected={attempted && attempted === choice.id}
          />
        )
      )}
    </div>
  </div>
);

export default Question;
