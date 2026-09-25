import { NavLink } from 'react-router-dom';
export default function Nav() {
    return (<nav>
        <NavLink to="/" end> Home </NavLink>
        <NavLink to="/samples" > Samples </NavLink>
        <NavLink to="/portfolio" > Portfolio </NavLink>
    </nav>);
}