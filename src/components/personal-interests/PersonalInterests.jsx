import '../../transitions.css'
import { BackgroundAnimation } from '../background-animation/BackgroundAnimation'
import { Image, Anchor, P } from './styles'
import { Section, Title, ColorHighlight, Description } from '../../global-styles'
import photography from '../../assets/photography.jpg'
import book from '../../assets/book.jpg'
import dog from '../../assets/dog.jpg'

export const PersonalInterests = () => {
    return (
        <>
            <BackgroundAnimation />
            <Section>
                <Title>Gostos <ColorHighlight>pessoais</ColorHighlight></Title>

                <Description>
                    <p>
                        Além da programação, tenho uma paixão por diversas áreas que ajudam a expandir minha criatividade e inovação.
                    </p>

                    <P>
                        <ColorHighlight>🎵 Música:</ColorHighlight> Se deixar, passo o dia inteiro escutando música. Adoro explorar novos artistas e estilos musicais. Sempre tenho uma trilha sonora para cada momento do meu dia. Dê uma olhada em duas playlists que criei e que estão sempre no repeat!

                        <div>
                            <Anchor href="https://www.youtube.com/watch?v=DgVNLxyEBj4&list=PLkC8kGli6CInJ3Mefbe0DV6_aoIIIJ1sF" target='_blank'>Playlist 1</Anchor> <Anchor href="https://www.youtube.com/watch?v=43n1wghXRGM&list=PLkC8kGli6CIlgvx0Z5NnniLy1GXUkPvZ_" target='_blank'>Playlist 2</Anchor>
                        </div>
                    </P>

                    <P>
                        <ColorHighlight>🎬 Filmes e Séries:</ColorHighlight> Sou uma verdadeira maratonista de séries. Não tem final de semana melhor do que aquele que envolve horas a fio assistindo filmes e séries, com uns lanchinhos do lado, claro!
                    </P>

                    <P>
                        <Image src={photography} alt="fotografia do Theatro São Pedro em Porto Alegre" />
                        <ColorHighlight>📸 Fotografia:</ColorHighlight> Minha paixão por filmes e séries me levou a cursar Produção Audiovisual, mas foi a fotografia que realmente capturou meu coração. Adoro explorar minha criatividade e capturar momentos especiais do cotidiano. Dá uma olhada em uma das minhas fotos favoritas!
                    </P>

                    <P>
                        <Image src={book} alt="foto do livro Pageboy de Elliot Page" />
                        <ColorHighlight>📚 Leitura:</ColorHighlight> Sou fã de livros de ficção e biografias inspiradoras. Nada como viajar para outros mundos ou conhecer a trajetória de grandes figuras enquanto relaxo com um bom livro.
                    </P>

                    <P>
                        <Image src={dog} alt="foto de um cachorro" />
                        <ColorHighlight>🐶 Animais:</ColorHighlight> Amo passear com meu cachorro e sou completamente apaixonada por animais. Aliás, quando era criança, passava minhas férias andando a cavalo, o que me trouxe uma conexão especial com a natureza e os animais.
                    </P>
                </Description>
            </Section>
        </>
    )
}