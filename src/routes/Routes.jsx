import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../components/header/Header'
import { Home } from '../components/home/Home';
import { About } from '../components/about/About';
import { Motivations } from '../components/motivations/Motivations';
import { PersonalInterests } from '../components/personal-interests/PersonalInterests';

export const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/motivacoes" element={<Motivations />} />
                <Route path="/gostos-pessoais" element={<PersonalInterests />} />
            </Routes>
        </Router>
    )
}