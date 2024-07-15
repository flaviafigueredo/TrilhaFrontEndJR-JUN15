import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Header } from '../components/header/Header'
import { Home } from '../components/home/Home'
import { About } from '../components/about/About'
import { Motivations } from '../components/motivations/Motivations'
import { PersonalInterests } from '../components/personal-interests/PersonalInterests'

export const AppRoutes = () => {
    const location = useLocation()

    return (
        <>
            <Header />
            <SwitchTransition>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/motivacoes" element={<Motivations />} />
                        <Route path="/gostos-pessoais" element={<PersonalInterests />} />
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}