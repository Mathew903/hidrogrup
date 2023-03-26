import { appLinks } from '../utils/links';
interface Props {
	sidebar?: boolean;
}

const Links = ({ sidebar = false }: Props) => (
	<ul className={sidebar ? 'mx-auto sm:m-0' : 'lg:flex gap-x-5 hidden'}>
		{appLinks.map(({ name, url, Icon }) => (
			<li className="links uppercase " key={name}>
				<a
					href={url}
					className={`${
						sidebar
							? 'flex items-center px-3 py-2 hover:bg-[#3D4FCB] rounded-md'
							: 'link-animation-underline'
					} relative gap-x-3 text-slate-300 hover:text-white text-2xl sm:text-base tracking-wide font-medium`}
				>
					{sidebar && <Icon />}
					{name}
				</a>
			</li>
		))}
	</ul>
);

export default Links;
