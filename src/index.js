import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'

// ACTIONS : Name os the services
const increment = () => {
	return {
		type: 'INCREMENT',
	}
}
const decrement = () => {
	return {
		type: 'DECREMENT',
	}
}

// REDUCER : Logic of actions
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
	}
}

// STORE : Global State
let store = createStore(counter)

// DISPLAY to console
store.subscribe(() => console.log(store.getState()))

// DISPATCH : Calling of the actions
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
