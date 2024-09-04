import Links from './Links';
import { RiCloseCircleLine } from 'react-icons/ri';
import "../style/sidebar.css"

interface Props { showSidebar: boolean, handleShowSidebar: () => void }

const Sidebar = ({ showSidebar, handleShowSidebar }: Props) => {
	return (
		<div className={`fixed right-0 top-0 h-screen sm:w-60 sm:before:w-60 before:w-full w-full sidebar ${showSidebar ? "show" : ""}`}>
			<div className={`px-3 py-5 flex flex-col gap-y-3 ${showSidebar ? 'block' : 'hidden'}`}>
				<button type="button" className="ml-auto sm:ml-0 inline-flex cursor-default">
					<RiCloseCircleLine onClick={handleShowSidebar} className="text-gray-50 sm:text-3xl text-4xl hover:cursor-pointer" />
				</button>
				<Links sidebar={showSidebar} />
			</div>
		</div>
	);
};

export default Sidebar;
