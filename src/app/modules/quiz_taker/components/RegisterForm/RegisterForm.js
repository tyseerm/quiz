import React from "react";
import { connect } from "react-redux";
import Button from "../../../../commons/components/Button";
//import { useHistory } from "react-router-dom";
import {
  registerFormCompleted,
  registerFormUpdated
} from "../../state/registerForm/RegisterFormActions";
import { loadQuestions } from "../../state/questions/QuestionActions";
import { REGISTER_MESSAGE } from "../../../../config/messages";
//import { QUIZ_PAGE } from "../../pages";
export const RegisterForm = ({
  name,
  email,
  registerFormUpdated,
  registerFormCompleted,
  invitationId
}) => {
  
 // let history = useHistory();
  return (
    <form
      onSubmit={e => {
        registerFormCompleted(e, invitationId);
        //history.push(QUIZ_PAGE);
      }}
    >
      <div className="m-3 p-3 d-flex justify-content-center">
    <h2>{REGISTER_MESSAGE}</h2>
      </div>
      <div className="form-group row">
        <label htmlFor="inputName3" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputName3"
            placeholder="Name"
            name="name"
            onChange={registerFormUpdated}
            value={name}
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
            name="email"
            onChange={registerFormUpdated}
            value={email}
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 offset-sm-2">
          <Button value="Start" type="submit" />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = ({ registerForm }) => {
  const { name, email } = registerForm;
  return {
    name,
    email
  };
};

const mapDispatchToProps = dispatch => ({
  registerFormUpdated(event) {
    const target = event.target;
    const payload = { [target.name]: target.value };
    dispatch(registerFormUpdated(payload));
  },
  registerFormCompleted(event, invitationId) {
    
    event.preventDefault();
    dispatch(registerFormCompleted());
    dispatch(loadQuestions({invitationId}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
