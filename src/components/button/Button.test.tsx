import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './Button';

const defaultProps = {
    onClick: jest.fn()
};

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'allenss'
};

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
};

describe('test Button components', () => {
    it('should render the correct default Button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });

    it('should render the correct conmonent based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>);
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-large allenss');
    });

    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(
            <Button btnType={ButtonType.Link} href="http://www.baidu.com">
                Link
            </Button>
        );
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    });

    it('should render disabled Button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps}>disabled</Button>);
        const element = wrapper.getByText('disabled') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(defaultProps.onClick).not.toHaveBeenCalled();
    });
});
