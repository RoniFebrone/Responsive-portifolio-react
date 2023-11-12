// import styles from './Vermais.module.css'



// function Vermais() {
//     return (
//         <complete>
//             <button className={styles.btn}>Ver mais</button>
//         </complete>
//     );
// }

// export default Vermais


import React from 'react';
import PropTypes from 'prop-types';
import styles from './Vermais.module.css';

function Vermais({ onClick }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            Ver Mais
        </button>
    );
}

Vermais.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Vermais;



