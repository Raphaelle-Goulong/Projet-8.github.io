import arrowTop from '../assets/arrowTop.png'
import arrowBottom from '../assets/arrowBottom.png'
import '../sass/Collapse.scss'
import { useState } from 'react'

function Collapse({ title, description, equipments }) {
    const [openCollapse, setOpenCollapse] = useState(false)
    function handleCollapse() {
        //    si c'est ouvert alors tu fermes sinon tu ouvres
        if (openCollapse === true) {
            setOpenCollapse(false)
        } // else {
        //     setOpenCollapse(true)
        // }
        if (openCollapse === false) {
            setOpenCollapse(true)
        }
    }

    return (
        <>
            {/* props */}
            {/* Bouton pour ouvrir/fermer le collapse */}
            <button className="collapse" onClick={handleCollapse}>
                <p className="text-Collapse">{title}</p>
                <img
                    src={openCollapse ? arrowTop : arrowBottom}
                    alt="Flèche icon"
                    className="arrows-Collapse"
                />
            </button>
            {/* Contenu du collapse, affiché en fonction de l'état d'ouverture */}
            <div className={`toggle-collapse ${openCollapse ? 'show' : 'hide'}`}>
                <p className="toggle-collapse-text">{openCollapse}{description}</p>
                <ul>
                    {equipments &&
                        equipments.map((equipments, index) => (
                            <li key={index} className="toggle-collapse-li">
                                {equipments}
                            </li>
                        ))}
                </ul>
                {/* ))}  */}
            </div>
        </>
    )
}

export default Collapse
