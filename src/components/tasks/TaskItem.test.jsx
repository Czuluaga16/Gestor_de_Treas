import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TaskItem from './TaskItem'; // Asumiendo que este es tu componente

describe('Pruebas en <TaskItem />', () => {

  const mockTask = {
    id: '123',
    title: 'Aprender Vitest',
    status: 'pending'
  };

  it('Debe renderizar el título de la tarea correctamente', () => {
    // 1. Arrange (Preparar)
    render(<TaskItem task={mockTask} />);

    // 2. Act (Actuar - buscar en el DOM)
    const titleElement = screen.getByText('Aprender Vitest');

    // 3. Assert (Afirmar)
    expect(titleElement).toBeInTheDocument();
  });
});