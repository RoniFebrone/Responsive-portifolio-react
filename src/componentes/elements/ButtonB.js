import styles from './ButtonB.module.css'

function ButtonB({ text, link, customClass}) {
    return (
        <div>
            <a href={link} target='Blank'>
                <button className={`${styles.btn} ${customClass}`}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonB