import React from 'react';
import classNames from 'classnames';

type menuMode = 'horizontal' | 'vertical';

export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: menuMode;
    style?: React.CSSProperties;
    onSelect?: (selectIndex: number) => void;
}

const Menu: React.FC<IMenuProps> = props => {
    const { defaultIndex, className, mode, style, onSelect, children } = props;

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    });

    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    );
};

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
};

export default Menu;
