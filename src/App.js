import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutUs from '../src/pages/AboutUs/AboutUs';
import Contact from '../src/pages/Contact/Contact';
import Dogs from '../src/pages/Dogs/Dogs';
import Edit from '../src/pages/Edit/Edit';
import Home from '../src/pages/Home/Home';
import Layout from './components/Layout/Layout';
import Login from '../src/pages/Login/Login';
import Puppies from '../src/pages/Puppies/Puppies';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/aboutUs' component={AboutUs} />
					<Route exact path='/dogs' component={Dogs} />
					<Route exact path='/puppies' component={Puppies} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/edit' component={Edit} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
export default App;
