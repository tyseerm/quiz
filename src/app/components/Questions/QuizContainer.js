import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Questions from './Questions'
import {attemptQuestion, submitQuiz} from '../../state/questions/QuestionActions';

const mapStateToProps = ({questions, attempts, registerForm}) => {
    return{
        questions,
        attempts,
        registered: registerForm.registered
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({attemptQuestion, submitQuiz}, dispatch)
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);