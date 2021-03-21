import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, logged } from './actions'

function App() {
	const counter = useSelector((state) => state.counter)
	const isLogged = useSelector((state) => state.isLogged)
	const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>Count: {counter}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => (counter > 0 ? dispatch(decrement()) : null)}>
				-
			</button>
			<br />
			{isLogged ? (
				<button onClick={() => dispatch(logged())}>Logout</button>
			) : (
				<button onClick={() => dispatch(logged())}>Login</button>
			)}
		</div>
	)
}

export default App
