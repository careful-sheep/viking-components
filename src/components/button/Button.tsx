import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'large',
    Small = 'small'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Error = 'error',
    Link = 'link'
}

export interface IBaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

const Button: React.FC<IBaseButtonProps> = props => {
    const { className, disabled, size, btnType, children, href } = props;
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled
    });

    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};

export default Button;
