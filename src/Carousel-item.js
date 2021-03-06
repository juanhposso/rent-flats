function CarouselItem({ data }) {
	return (
		<>
			{data.map((item, index) => {
				const { id, src, name } = item;
				return (
					<div
						key={id}
						className={index === 0 ? 'carousel-item active' : 'carousel-item'}
						data-interval="false"
					>
						<img src={src} alt={name} className="slide-img d-block" />
					</div>
				);
			})}
		</>
	);
}

export default CarouselItem;
