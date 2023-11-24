// import styles from './ButtonA.module.css'

// function ButtonA({ text, link }) {
//     return (
//         <div>
//             <a href={link} target='Blank'>
//                 <button className={styles.btn.only-btn}> {text} </button>
//             </a>
//         </div>
//     )
// }

// export default ButtonA



import React from 'react';
import styles from './ButtonA.module.css';

function ButtonA({ text, link }) {
    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <button className={styles['btn'] + ' ' + styles['only-btn']}>{text}</button>
            </a>
        </div>
    );
}

export default ButtonA;
