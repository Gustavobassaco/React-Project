import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const postMock = {
    title: 'Post Title',
    cover: 'https://via.placeholder.com/150',
};

describe('<PostCard />', () => {
    it('should render PostCard with image, title, and paragraph', () => {
        render(<PostCard post={postMock} />);

        // Verificar se a imagem foi renderizada com o src correto e o alt com o título do post
        const image = screen.getByRole('img', { name: postMock.title });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', postMock.cover);
        expect(image).toHaveAttribute('alt', postMock.title);

        // Verificar se o título foi renderizado
        const heading = screen.getByRole('heading', { name: postMock.title });
        expect(heading).toBeInTheDocument();

        // Verificar se o parágrafo foi renderizado com o título do post
        const paragraph = screen.getByText(postMock.title, { selector: 'p' });
        expect(paragraph).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard post={postMock} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
