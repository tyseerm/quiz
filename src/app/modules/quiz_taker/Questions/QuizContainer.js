import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Questions from './Questions'
import {attemptQuestion, submitQuiz} from '../../../../state/questions/QuestionActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);