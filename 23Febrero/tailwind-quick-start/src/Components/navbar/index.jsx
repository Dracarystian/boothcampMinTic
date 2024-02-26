import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center w-full">
            <ul className="flex items-center gap-8">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'>
                        Portafolio
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to = '/Home'
                        className= { ({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = '/Projects'
                        className= { ({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = '/About_me'
                        className= { ({isActive}) =>
                            isActive ? activeStyle:undefined
                        }>
                        About Me 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar