
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with text Load More', () => {
        render(<Button text="Load More" />); // Use apenas 'render'

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function button click', () => {
        const fn = jest.fn();
        render(<Button text="Load More" onClick={fn}/>); 

        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1);
        
    });
});
