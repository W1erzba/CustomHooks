import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]); // *[forwards]* when we are adding an parameters we have to add them to the dependencies

	return counter;
};

export default useCounter;

// Side note: this is just a equivalent of vanila javaScript functions xD
// It was just a simple example, introduction to custom hook world.
