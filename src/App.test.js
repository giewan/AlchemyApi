// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AlchemyApi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AlchemyApi/i);
    expect(titleElement).toBeInTheDocument();
});
