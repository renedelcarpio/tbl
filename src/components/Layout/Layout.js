import './Layout.scss';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Navbar />
			{children}
			<Footer className='layout__footer' />
		</div>
	);
};
export default Layout;
