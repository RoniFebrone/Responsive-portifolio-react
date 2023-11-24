import styles from './presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useState, useEffect } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = [' Roni Febrone   ', ' Desenvolvedor front-end! ', ' Futuro Full-stack  '];
    const [loop, setLoop] = useState(0);
    const [Deleting, setDeliting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(15)


    useEffect(() => {
        let ticker = setInterval( ()=> {
            toType()
        }, delta)
        return () => { clearInterval(ticker)}
    }, [text])
    
    const toType = () => {

        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = Deleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if (!Deleting && updatedText === fullText) {    
            setDeliting(true);
            setDelta(period);
        } else if (Deleting && updatedText === ''){ 
            setDeliting(false);
            setDelta(period);
            setLoop(loop+1)
        }

    }


    return (
        <div className={styles.presentation} id="Presentation">
            <h4>
                <strong>Bem-vindo ao meu Portifólio </strong>
            </h4>

            <h1>
                Olá, eu sou  <a href='https://www.linkedin.com/in/roni-febrone-97b007275/'>{text} </a>
            </h1>

            <p>
                <strong>Explorando o Universo Full Stack | Apaixonado por esse mundo web | Focado em evoluir constantemente</strong>              <br /><br />

                <strong>Sobre Mim:</strong> E aí, pessoal! 👋 Eu sou Roni, um entusiasta de 20 anos apaixonado por desenvolvimento de software.  <br />
                Minha jornada começou com uma imersão de 6 meses em desenvolvimento Back - end, navegando pelos mares do temido Java.             <br /><br />


                <strong>Aventura Full Stack:</strong> Atualmente, estou trilhando o caminho para me tornar um Dev Full Stack web, por meio de uma <br />
                formação intensiva em tecnologia. <br />

                Estou nos estágios finais da parte de front-end, nessa nova aventura, dominando o React e construindo uma base sólida             <br />
                para criar experiências incríveis na web.<br /><br />

                <strong>Pronto para ação!</strong>  <br />
                Com a confiança crescendo a cada dia, meu objetivo é claro: ingressar no mercado de trabalho como um desenvolvedor Full Stack.    <br />
                Estou preparado para enfrentar desafios do mundo real e contribuir para projetos que fazem a diferença.

            </p>

            <ButtonA id={styles.btnPresentation} link='https://www.linkedin.com/notifications/?filter=all' text='Conecte-se comigo!! ' />

        </div>
    )
}

export default Presentation