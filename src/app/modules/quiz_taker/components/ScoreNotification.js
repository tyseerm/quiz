import React from "react";
import {Redirect} from 'react-router';
import { QUIZ_PAGE } from "../../../pages";
import  Notification from "../../../commons/components/Notifications/Notification";

const ScoreNotification = (props) => {
    if (props.show) {
        return(
        <Notification {...props}
        />
        )
    }else{
        return <Redirect to={QUIZ_PAGE} />
    }
}

export default ScoreNotification;