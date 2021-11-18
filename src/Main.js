import { useState, useEffect } from 'react';
import Description from './Description';

function Main() {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);

		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);

	return (
		<main>
			<h1 className="description-title fw-bold text-center">
				{size < 768 ? 'Fotos' : 'Descripcion y Fotos'}
			</h1>
			<div className="line"></div>
			<Description />
		</main>
	);
}

export default Main;
