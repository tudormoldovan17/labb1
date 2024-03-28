import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});

describe('CRUD operations', () => {
  it('should add a new car', () => {
    render(
          <App />
    );

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'New Car' } });
    fireEvent.change(screen.getByPlaceholderText('Horsepower'), { target: { value: '300' } });
    fireEvent.change(screen.getByPlaceholderText('Color'), { target: { value: 'Green' } });
    fireEvent.change(screen.getByPlaceholderText('Year'), { target: { value: '2023' } });
    fireEvent.change(screen.getByPlaceholderText('Country'), { target: { value: 'Germany' } });

    fireEvent.click(screen.getByText('Add Car'));

    expect(screen.getByText('New Car')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('Green')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('should delete a car', () => {
    render(
          <App />
    );

    fireEvent.click(screen.getAllByText('Delete')[0]);

    expect(screen.queryByText('Toyota Camry')).not.toBeInTheDocument();
    expect(screen.queryByText('200')).not.toBeInTheDocument();
    expect(screen.queryByText('Blue')).not.toBeInTheDocument();
    expect(screen.queryByText('2022')).not.toBeInTheDocument();
    expect(screen.queryByText('Japan')).not.toBeInTheDocument();
  });

  it('should update a car', () => {
    render(
          <App />
    );

    fireEvent.click(screen.getAllByText('Update')[0]);

    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Updated Car' } });

    fireEvent.click(screen.getByText('Confirm'));

    expect(screen.getByText('Updated Car')).toBeInTheDocument();
  });
});
