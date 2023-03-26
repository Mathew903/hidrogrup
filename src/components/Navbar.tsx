import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '/logoHidrogrup.png';
import Links from './Links';
import Sidebar from './Sidebar';

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);
	const [scrollY, setScrollY] = useState<number>(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const handleShowSidebar = () : void => { setShowSidebar(!showSidebar) };
	const handleScroll = () : void => { setScrollY(window.scrollY) };
	const handleStyleNav = () : void => {
		let img: HTMLImageElement | null;
		if (scrollY > 0) {
			ref.current.classList.add('bg-gray-900');
			ref.current.classList.replace('top-6', 'top-0');
			img = ref.current.querySelector("[id='portada']");
			img.classList.replace('h-20', 'h-14');
			img.classList.replace('w-20', 'w-14');
		}
		else if (scrollY === 0) {
			ref.current.classList.remove('bg-gray-900');
			ref.current.classList.replace('top-0', 'top-6');
			img = ref.current.querySelector("[id='portada']");
			img.classList.replace('h-14', 'h-20');
			img.classList.replace('w-14', 'w-20');
		}
	};

	useEffect(() => {
		handleScroll();
		handleStyleNav();
		window.addEventListener('scroll', handleScroll);
		return () => { window.removeEventListener('scroll', handleScroll) };
	}, [scrollY]);

	return (
		<div
			className="transition-all ease duration-500 h-20 w-full flex justify-center z-50 top-6 left-0 fixed"
			ref={ref}
		>
			<div className="flex lg:w-7/12 lg:mx-0 mx-6 w-full items-center justify-between">
				<div>
					<a href="/">
						<img
							src={logo}
							className="transition-all ease duration-500 h-20 w-20 rounded-sm select-none"
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

					<div className={showSidebar ? 'block' : 'hidden'}>
						<Sidebar handleShowSidebar={handleShowSidebar} />
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
