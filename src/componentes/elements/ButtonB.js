// import styles from './ButtonB.module.css'

// function ButtonB({ text, link, customClass }) {
//     return (
//         <div>
//             <a href={link} target='Blank'>
//                 <button className={`${styles.btn} ${customClass}`}> {text} </button>
//             </a>
//         </div>
//     )
// }

// export default ButtonB



import React from 'react';
import styles from './ButtonB.module.css';

function ButtonB({ text, link, customClass }) {
    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <button className={`${styles['btn']} ${styles['another-btn']} ${customClass}`}>{text}</button>
            </a>
        </div>
    );
}

export default ButtonB;
