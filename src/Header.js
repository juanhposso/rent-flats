import LogoHeader from './assets/sala1.webp';

function Header() {
	return (
		<header className="vh-100 position-relative">
			<img
				src={LogoHeader}
				alt="logo name"
				className="logo-header w-100 h-100 opacity-75"
			/>
			<h1 className="text-header position-absolute top-50 start-50 translate-middle text-white fw-bold lh-sm">
				Estoy En <br /> <span> Arriendo</span>
			</h1>
		</header>
	);
}

export default Header;
