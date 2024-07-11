import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre">Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/motivacoes">Motivações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gostos-pessoais">Gostos pessoais</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}