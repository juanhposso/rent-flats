import CarouselItem from './Carousel-item';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel.js';

const Button = ({ data }) => {
	return (
		<>
			{data.map((item, index) => {
				if (index === 0) {
					return (
						<button
							key={item.id}
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to={index}
							className={index === 0 ? 'active' : null}
							aria-current="true"
							aria-label={`Slide ${index + 1}`}
						></button>
					);
				} else {
					return (
						<button
							key={item.id}
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to={index}
							aria-label={`Slide ${index + 1}`}
						></button>
					);
				}
			})}
		</>
	);
};

function Description({ data }) {
	return (
		<section
			id="carouselExampleDark"
			className="carousel-container carousel carousel-dark slide mb-5 container-lg w-100"
			data-bs-ride="carousel"
			data-interval="false"
		>
			<article className="carousel-indicators">
				<Button data={data} />
			</article>
			<article className="carousel-inner carousel-test">
				<CarouselItem data={data} />
			</article>
			<button
				className="carousel-control-prev text-white"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next text-white"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</section>
	);
}

export default Description;
