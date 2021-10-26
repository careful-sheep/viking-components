import React from 'react';
import classNames from 'classnames';

export enum AlertType {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export interface IAlertProps {
    className?: string;
    type: AlertType;
}

const Alert: React.FC<IAlertProps> = props => {
    const { className, type } = props;
    const classes = classNames('alert', className, {
        [`btn-${type}`]: type
    });
    return <div className={classes}>alert message</div>;
};

export default Alert;
