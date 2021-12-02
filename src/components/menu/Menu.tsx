import React, { useState, createContext } from 'react';
import classNames from 'classnames';

type menuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: number) => void;
export interface IMenuProps {
    defaultIndex: number;
    className?: string;
    mode?: menuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });
const Menu: React.FC<IMenuProps> = props => {
    const { defaultIndex, className, mode, style, onSelect, children } = props;
    const [currentActive, setCurrentActive] = useState<number>(defaultIndex);

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    });

    const handleClick = (index: number) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    const passContext: IMenuContext = {
        index: currentActive || 0,
        onSelect: handleClick
    };
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passContext}>{children}</MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
};

export default Menu;
