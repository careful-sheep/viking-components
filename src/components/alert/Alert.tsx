import React, { useRef } from 'react';
import classNames from 'classnames';

export enum AlertType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export interface IAlertProps {
    className?: string;
    children?: React.ReactNode;
    type?: AlertType;
}

const Alert: React.FC<IAlertProps> = props => {
    const { className, children, type } = props;
    const alertRef = useRef<HTMLDivElement>(null);

    const classes = classNames('alert', className, {
        [`alert-${type}`]: type
    });

    const closeAlert = () => {
        if (alertRef.current) {
            alertRef.current.style.display = 'none';
        } else {
            setTimeout(() => {
                closeAlert();
            }, 50);
        }
    };
    return (
        <div className={classes} ref={alertRef}>
            <span className="alert-icon" onClick={closeAlert}>
                关闭
            </span>
            <div className="alert-message">{children}</div>
        </div>
    );
};

export default Alert;
