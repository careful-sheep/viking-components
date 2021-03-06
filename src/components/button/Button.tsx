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

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
    const { className, disabled, size, btnType, children, href, ...restProps } = props;
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled
    });

    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} {...restProps}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};

export default Button;
