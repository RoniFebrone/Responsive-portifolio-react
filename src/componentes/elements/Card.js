
import styles from './Card.module.css'
import ButtonB from '../elements/ButtonB'

import React from 'react';




function Card({ img, title, tech, description, repo, site }) {
    return (
        <div className={styles.card}>

            <a href={site} target='blank'>
                <img src={img} alt='error' />
            </a>


            <section>
                <h3> {title} </h3>
                <h4>  Tecnologias : {tech} </h4>
                <p className='btnP' > {description} </p>

                <ButtonB text='Acesse o repositório' link={repo} />
            </section>


        </div>
    )
}

export default Card


// import React, { useState } from 'react';
// import styles from './Card.module.css';
// import ButtonB from '../elements/ButtonB';
// import Vermais from './Vermais';

// function Card({ img, title, tech, description, repo, site }) {
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <div className={`${styles.card} ${expanded ? styles.expandedCard : ''}`}>
//             <a href={site} target='blank'>
//                 <img src={img} alt='error' />
//             </a>

//             <section className={styles.section}>
//                 <h3> {title} </h3>
//                 <h4> Tecnologias : {tech} </h4>
//                 <p className={styles.btnP}>
//                     {description}
//                 </p>

//                 <div className={styles.divDescCard}>
//                     <section>
//                         <Vermais onClick={() => setExpanded(!expanded)} />
//                     </section>
//                     <section>
//                         <ButtonB text='Acesse meu repositório' link={repo} />
//                     </section>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Card;
