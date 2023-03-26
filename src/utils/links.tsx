import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SiHomeassistant } from 'react-icons/si'
import { BsFillPersonFill, BsFillPhoneFill } from 'react-icons/bs'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import type { Link, iconLinks } from '../types';

export const appLinks: Link[] = [
	{ name: 'Inicio', url: '/', Icon: () => <SiHomeassistant /> },
	{ name: 'Acerca de', url: '/acerca-de', Icon: () => <BsFillPersonFill />},
	{ name: 'Servicios', url: '/servicios', Icon: () => <MdOutlineHomeRepairService /> },
	{ name: 'Contacto', url: '/contacto', Icon: () => <BsFillPhoneFill />},
];

export const socialLinks: iconLinks[] = [
	{
		url: 'https://www.facebook.com/cultivandoelpresenteparacosecharelfuturo',
		name: 'facebook',
		Icon: () => <FaFacebookF />,
		colorHover: 'hover:text-sky-600',
	},
	{
		url: 'https://www.instagram.com/hidroponia_sanmiguel/?hl=en',
		name: 'instagram',
		Icon: () => <FaInstagram />,
		colorHover: 'hover:text-pink-700',
	},
	{
		url: 'https://www.facebook.com/cultivandoelpresenteparacosecharelfuturo',
		name: 'whatsapp',
		Icon: () => <FaWhatsapp />,
		colorHover: 'hover:text-emerald-400',
	},
	{
		url: 'https://www.youtube.com',
		name: 'youtube',
		Icon: () => <FaYoutube />,
		colorHover: 'hover:text-red-700',
	},
];
