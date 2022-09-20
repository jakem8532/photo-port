import React from "react";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('contact component', () => {
    it('renders', () => {
        render(<Contact></Contact>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact></Contact>)
        expect(asFragment()).toMatchSnapshot()
    })
})

it('renders contact field', () => {
    const { getByTestId } = render(<Contact />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
})

it('renders submit button', () => {
    const { getByTestId } = render(<Contact />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit')
})