import React from "react";

export default ({
  quiz,
  onDelete,
  onEditQuiz
}) => {
    const {id, title, description, level, success_percentage, active, show_results} = quiz;
    const size = quiz.questions.length;
  return (
    <div className="card m-3 d-flex justify-content-center">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="m-3">
        <pre className="">{description}</pre>
        <ul className="m-2 list-group list-group-horizontal">
          <li className="list-group-item">Level: {level} </li>
          <li className="list-group-item">
            Success percentage: {success_percentage}
          </li>
          <li className="list-group-item">Number of questions: {size}</li>
          <li className="list-group-item">Active: {active ? "Yes" : "No"}</li>
          <li className="list-group-item">
            Show results: {show_results ? "Yes" : "No"}
          </li>
        </ul>

        <a
          href="#!"
          className="m-2 card-link"
          onClick= {() => onEditQuiz(quiz)}
        >
          Edit
        </a>

        <a href="#!" onClick={() => onDelete(id)} className="m-2 card-link">
          Delete
        </a>
      </div>
    </div>
  );
};
