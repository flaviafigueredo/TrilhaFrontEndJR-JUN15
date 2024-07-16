import '../../transitions.css'
import { BackgroundAnimation } from '../background-animation/BackgroundAnimation'
import avatarCodigoCert from '../../assets/boneco-codigocerto.webp'
import { Section, H1, Image, Description, ColorHighlight } from './styles'

export const Motivations = () => {
    return (
        <>
            <BackgroundAnimation />
            <Section>
                <H1>Motiv<ColorHighlight>ações</ColorHighlight></H1>

                <Description>
                    <p>
                        <Image src={avatarCodigoCert} alt="" />
                        Minha motivação para participar da comunidade Código Certo Coders é profundamente alimentada pela minha paixão por <ColorHighlight>aprender, colaborar e inovar</ColorHighlight>. A Código Certo Coders, sendo uma comunidade dedicada ao aprendizado contínuo, colaboração e inovação na área de tecnologia, oferece exatamente o ambiente que procuro para <ColorHighlight>crescer profissionalmente</ColorHighlight>.
                    </p>

                    <p>
                        O trabalho <ColorHighlight>voluntário</ColorHighlight> é uma porta de entrada crucial para quem está migrando de carreira, e vejo nesta oportunidade uma <ColorHighlight>chance inestimável</ColorHighlight> de aplicar minhas habilidades e adquirir novas experiências. Participar de uma iniciativa como a Código Certo Coders, com sua abordagem centrada nas pessoas e na excelência técnica, me permitirá <ColorHighlight>desenvolver</ColorHighlight> meu potencial e <ColorHighlight>contribuir</ColorHighlight> ativamente para projetos que realmente fazem a diferença.
                    </p>

                    <p>
                        Acredito que tenho muito potencial a ser desenvolvido, e essa oportunidade é perfeita para isso. Não vejo a hora de colocar a mão na massa e usar minha dedicação para colaborar com o time. Trabalhar em um ambiente inclusivo que valoriza a diversidade de experiências e promove a colaboração é um sonho para mim. Estou ansiosa para contribuir com minha criatividade e inovação, ajudando a <ColorHighlight>construir um amanhã</ColorHighlight> melhor junto com a equipe da Código Certo Coders.
                    </p>
                </Description>
            </Section>
        </>
    )
}