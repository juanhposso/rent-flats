function Footer() {
	return (
		<section className="footer h-25 py-4">
			<article className="container ">
				<div className="row justify-content-center">
					<div className="col-12 text-center mb-3">
						<h5 className="footer-title">Mas Informacion</h5>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h4 className="text-footer">
							<span className="d-block">Juan David:</span>
							<a href="tel:+573505470769" className="text-blue">
								313 297 1709
							</a>
						</h4>
					</div>
					<div className="col">
						<h4 className="text-footer">
							<span className="d-block">Fabian Andres:</span>
							<a href="tel:+573132971790" className="text-blue">
								318 816 5194
							</a>
						</h4>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Footer;
