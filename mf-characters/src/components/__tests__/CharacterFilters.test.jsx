import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterFilters } from '../CharacterFilters';

test('llama a onChange al cambiar filtros', () => {
  const handleChange = jest.fn();

  render(<CharacterFilters onChange={handleChange} />);

  fireEvent.change(screen.getByPlaceholderText('Nombre'), {
    target: { value: 'Morty' },
  });

  expect(handleChange).toHaveBeenCalledWith('name', 'Morty');
});
