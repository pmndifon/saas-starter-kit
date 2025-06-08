
import { render, screen } from '@testing-library/react';
import App from './App';

// This is a simple "smoke test". 
// It checks if the component renders at all without crashing.
test('renders main app component with a welcome message', () => {
  render(<App />);

  // Use 'screen' to find an element by its text content.
  // This example assumes your App.tsx renders "SaaS Starter Kit" somewhere from the boilerplate.
  // You can change the text to match whatever your App actually shows.
  const welcomeElement = screen.getByText(/SaaS Starter Kit/i);

  // Assert that the element was actually found in the document.
  expect(welcomeElement).toBeInTheDocument();
});
