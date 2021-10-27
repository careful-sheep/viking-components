import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/button/Button';
import Alert, { AlertType } from './components/alert/Alert';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
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
                <Alert type={AlertType.Error}>some message</Alert>
            </header>
        </div>
    );
};

export default App;
