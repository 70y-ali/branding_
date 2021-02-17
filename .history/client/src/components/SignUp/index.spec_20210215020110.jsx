/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginForm from './index'

test('loads and displays', () => {
	const { getByTestId } = render(<LoginForm />)
	const inputUsername = getByTestId('input-username')
	const inputPassword = getByTestId('input-password')

	expect(inputUsername).toBeRequired()
	expect(inputUsername).toBeVisible()
	expect(inputUsername).not.toBeValid()
	expect(inputUsername).toBeEnabled()
	expect(inputUsername).toHaveAttribute('type', 'text')

	expect(inputPassword).toBeRequired()
	expect(inputPassword).toBeVisible()
	expect(inputPassword).not.toBeValid()
	expect(inputPassword).toBeEnabled()
	expect(inputPassword).toHaveAttribute('type', 'password')
})
