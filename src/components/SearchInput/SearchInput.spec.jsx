import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} searchValue="test" />);
        
        // Verifica o valor inicial
        const input = screen.getByPlaceholderText(/Type your search/i);
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('test');
    });

    it('should call handleChange on each key press', () => {
        const fn = jest.fn();
        render(<SearchInput handleChange={fn} searchValue="test" />);
        
        const input = screen.getByPlaceholderText(/Type your search/i);
        const value = 'valor';
        
        // Simula a digitação
        userEvent.type(input, value);

        // Confirma que a função `fn` foi chamada o número correto de vezes
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it('should match snapshot', ()=>{
        const fn = jest.fn();

        const {container} = render(<SearchInput handleChange={fn} searchValue="test" />);
        expect(container).toMatchSnapshot()
    })
});
