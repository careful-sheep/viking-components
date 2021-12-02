import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/button/Button';
import Alert from './components/alert/Alert';
import Menu from './components/menu/Menu';
import MenuItem from './components/menu/MenuItem';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Menu
                    defaultIndex={0}
                    onSelect={index => {
                        alert(index);
                    }}
                >
                    <MenuItem index={0}>item 0</MenuItem>
                    <MenuItem index={1} disabled>
                        item 1
                    </MenuItem>
                    <MenuItem index={2}>item 2</MenuItem>
                    <MenuItem index={3}>item 3</MenuItem>
                </Menu>
                <Button onClick={() => console.log('button Onclick')} className="allen-viking-button">
                    hello
                </Button>
                <Button disabled>disabled Button</Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
                    large Primary
                </Button>
                <Button btnType={ButtonType.Error} size={ButtonSize.Small}>
                    small Error
                </Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">
                    Baidu Link
                </Button>
                <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
                    Disabled link
                </Button>
                <br />
                <Alert title="this is alert!" />
                <Alert title="this is Success" type="success" />
                <Alert title="this is Danger!" type="error" />
                <Alert title="this is Warning!" type="warning" closable={false} />
            </header>
        </div>
    );
};

export default App;
