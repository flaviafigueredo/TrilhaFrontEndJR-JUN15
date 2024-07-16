import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faHtml5, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import '../../transitions.css'
import { BackgroundAnimation } from '../background-animation/BackgroundAnimation'
import { Section, H1, ColorHighlight, PersonalInfos, H2, IconContainer, Skills, Education, ListItem, Year, Icon, Paragraph, H3, Span } from './styles'

export const About = () => {
    return (
        <>
            <BackgroundAnimation />
            <Section>
                <H1>Sobre <ColorHighlight>mim</ColorHighlight></H1>

                <PersonalInfos>
                    <p> 
                        Olá, me chamo <ColorHighlight>Flávia Figueredo</ColorHighlight> e tenho 32 anos. Desde muito jovem, nutro uma paixão pela tecnologia. Minha jornada acadêmica iniciou-se com
                        uma formação em <ColorHighlight>Produção Audiovisual</ColorHighlight>, mas meu verdadeiro sonho sempre foi explorar o fascinante
                        mundo da programação. Decidi transformar esse sonho em realidade, embarcando em uma jornada de
                        estudos dedicados ao <ColorHighlight>frontend</ColorHighlight>.
                    </p>

                    <p>
                        Com uma visão de longo prazo, concluí uma <ColorHighlight>Pós-graduação em Desenvolvimento FullStack</ColorHighlight> e, atualmente, estou nos momentos finais de uma <ColorHighlight>Pós-graduação em Engenharia de Software</ColorHighlight>. Essa trajetória reflete meu comprometimento e determinação na transição de carreira para a área de Desenvolvimento FrontEnd, contribuindo com inovação e criatividade para a vanguarda da tecnologia.
                    </p>
                </PersonalInfos>

                <Skills>
                    <H2>Minhas habilidades</H2>

                    <IconContainer>
                        <FontAwesomeIcon icon={faReact} />
                        <FontAwesomeIcon icon={faJsSquare} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faGitAlt} />
                    </IconContainer>
                </Skills>

                <Education>
                    <H2>Educação</H2>
                    <ListItem>
                        <Year>
                            <Icon><FontAwesomeIcon icon={faBriefcase} /></Icon>
                            <Paragraph>2024</Paragraph>
                        </Year>

                        <H3>Pós-Graduação em Engenharia de Software <Span>- Faculdade Descomplica</Span></H3>
                    </ListItem>

                    <ListItem>
                        <Year>
                            <Icon><FontAwesomeIcon icon={faBriefcase} /></Icon>
                            <Paragraph>2023 - Presente</Paragraph>
                        </Year>

                        <H3>Curso em Desenvolvimento FrontEnd <Span>- DevQuest</Span></H3>
                    </ListItem>

                    <ListItem>
                        <Year>
                            <Icon><FontAwesomeIcon icon={faBriefcase} /></Icon>
                            <Paragraph>2023</Paragraph>
                        </Year>

                        <H3>Pós-Graduação em Desenvolvimento FullStack <Span>- Faculdade Descomplica</Span></H3>
                    </ListItem>

                    <ListItem>
                        <Year>
                            <Icon><FontAwesomeIcon icon={faBriefcase} /></Icon>
                            <Paragraph>2014</Paragraph>
                        </Year>

                        <H3>Produção Audiovisual <Span>- PUCRS</Span></H3>
                    </ListItem>
                </Education>
            </Section>
        </>
    )
}