import {Link, Outlet} from 'react-router-dom';

export function Layout() {

    return <div>
        <header>
            <h1>Motoren</h1>
        </header>
        <nav>
            <ul>
                <li><Link to="/">All Bikes</Link> </li>
                <li><Link to="create">New Bike</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
}