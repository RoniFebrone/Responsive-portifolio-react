import styles from './Skills.module.css'

import JS from '../../Image/Skill/JS.svg'
import html from '../../Image/Skill/html.svg'
import css from '../../Image/Skill/css.svg'
import ReactImg from '../../Image/Skill/ReactImg.svg'
import Java from '../../Image/Skill/Java.svg'
import UiUx from '../../Image/Skill/UiUx.svg'
import Figma from '../../Image/Skill/Figma.svg'


function Skills() {
    return (
        <div className={styles.flexSkill}>
            <section className={styles.skills} id="Skills">
                <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div>
                    <img src={JS} />
                    <img src={html} />
                    <img src={css} />
                    <img src={ReactImg} />
                    <img src={Java} />
                    <img src={UiUx} />
                    <img src={Figma} />
                </div>
            </section>
        </div>
    )
}

export default Skills