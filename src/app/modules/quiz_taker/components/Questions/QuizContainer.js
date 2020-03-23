import React from "react";

import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import Questions from './Questions'
import {attemptQuestion, submitQuiz} from '../../state/questions/QuestionActions';

const WithUrlParam = (props) => {
    const {invitationId}  = useParams()
    return <Questions {...props} invitationId={invitationId} />
}

const mapStateToProps = ({quiz, attempts, registerForm, results}) => {
    
    return{
        quiz,
        attempts,
        results,
        registered: registerForm.registered
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({attemptQuestion, submitQuiz}, dispatch)
}
);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlParam);