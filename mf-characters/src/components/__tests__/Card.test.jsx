import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

const mockChar = { id:1, name: 'Rick Sanchez', species: 'Human', status: 'Alive', image: '...' };

test('renderiza información básica del personaje', () => {
  render(<Card char={mockChar} />);
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  expect(screen.getByText(/Human/)).toBeInTheDocument();
  expect(screen.getByAltText(/Rick Sanchez/)).toBeInTheDocument();
});
