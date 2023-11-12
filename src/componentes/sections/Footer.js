import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://instagram.com/roninho_f?igshid=OGQ5ZDc2ODk2ZA==' target='Blank'> <FaInstagram size={30} /> </a></li>
                <li> <a href='https://www.linkedin.com/notifications/?filter=all' target='Blank'> <FaLinkedin size={30} /> </a></li>
                <li> <a href='https://github.com/RoniFebrone' target='Blank'> <FaGithub size={30} /> </a></li>
            </ul>

            <p>
                ronifebrone9@gmail.com Roni Febrone © 2023
            </p>
        </div>
    )
}

export default Footer