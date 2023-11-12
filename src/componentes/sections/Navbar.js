import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><NavLink href='#Presentation'> Apresentação</NavLink></li>
                <li><NavLink href='#Skills'> Habilidades </NavLink></li>
                <li><NavLink href='#Projects'> Projetos </NavLink></li>
            </ul>
            <ul>
                <li> <a href='https://instagram.com/roninho_f?igshid=OGQ5ZDc2ODk2ZA==' target='Blank'> <FaInstagram size={30}/> </a></li>
                <li> <a href='https://www.linkedin.com/notifications/?filter=all' target='Blank'> <FaLinkedin size={30}/> </a></li>
                <li> <a href='https://github.com/RoniFebrone' target='Blank'> <FaGithub size={30}/> </a></li>
            </ul>
        </div>
    )
}

export default Navbar