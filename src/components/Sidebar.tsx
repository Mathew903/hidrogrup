import Links from './Links';
import { RiCloseCircleLine } from 'react-icons/ri';
interface Props { handleShowSidebar: () => void }

const Sidebar = ({ handleShowSidebar }: Props) => {
	return (
		<div className="fixed right-0 top-0 h-screen sm:w-60 w-full bg-[#4459E8] ">
			<div className="px-3 py-5 flex flex-col gap-y-3">
				<button type="button" onClick={handleShowSidebar} className="ml-auto sm:ml-0">
					<RiCloseCircleLine className="text-gray-50 sm:text-3xl text-4xl" />
				</button>
				<Links sidebar={true} />
			</div>
		</div>
	);
};

export default Sidebar;
