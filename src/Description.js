import sala1 from './assets/sala1.webp';
import sala2 from './assets/sala2.webp';
import bano1 from './assets/bano1.webp';
import logoHeader from './assets/logoHeader.webp';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel.js';

function Description() {
	return (
		<section
			id="carouselExampleDark"
			className="carousel-container carousel carousel-dark slide mb-5 container-lg w-100"
			data-bs-ride="carousel"
			data-interval="false"
		>
			<article className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</article>
			<article className="carousel-inner carousel-test">
				<div className="carousel-item active" data-interval="false">
					<img
						src={sala1}
						className="slide-img img-fluid d-block"
						alt="jiji."
					/>
					{/* <div className="carousel-caption d-none d-md-block">
						<h5>Esta es la sala</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div> */}
				</div>
				<div className="carousel-item" data-interval="false">
					<img src={sala2} className="slide-img d-block" alt="jiji." />
					{/* <div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div> */}
				</div>
				<div className="carousel-item" data-interval="false">
					<img src={bano1} className="slide-img d-block" alt="jiji." />
					{/* <div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div> */}
				</div>
			</article>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
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
