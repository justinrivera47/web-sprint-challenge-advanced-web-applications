// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'
import "@testing-library/jest-dom"


test('spinner on', () => {
  render(<Spinner on={true}/>)
  expect(screen.getByText(/please wait/i)).toBeInTheDocument()
})

test('spinner off', () => {
  render(<Spinner on={false}/>)
  expect(screen.queryByText(/please wait/i)).not.toBeInTheDocument()
})