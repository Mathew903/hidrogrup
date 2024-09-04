import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Links from './Links';
import Sidebar from './Sidebar';
import "../style/navbar.css"

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);
	const handleShowSidebar = () : void => { setShowSidebar(!showSidebar) };

	const [isScrolled, setIsScrolled] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => { setIsScrolled(window.scrollY > 50) }
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	return (
		<div className={`w-full h-[90px] items-center flex justify-center navbar ${isScrolled ? 'scrolled' : ''}`}>
			<div className="flex lg:w-7/12 lg:mx-0 mx-6 w-full items-center justify-between">
				<div>
					<a href="/">
						<img
							src="/logoHidrogrup.png"
							className="h-16 w-16 rounded-sm select-none"
							alt="logo"
							id="portada"
						/>
					</a>
				</div>
				<nav className="flex items-center">
					<button
						type="button"
						onClick={handleShowSidebar}
						className={showSidebar ? 'hidden' : 'lg:hidden'}
					>
						<GiHamburgerMenu className="text-2xl text-white" />
					</button>
					<Links />
					<Sidebar
						showSidebar={showSidebar}
						handleShowSidebar={handleShowSidebar}
					/>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
