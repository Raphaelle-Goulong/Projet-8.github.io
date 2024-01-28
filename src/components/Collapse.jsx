import arrowTop from '../assets/arrowTop.png'
import arrowBottom from '../assets/arrowBottom.png'
import '../sass/Collapse.scss'
import { useState } from 'react'

function Collapse() {
    const [openCollapse, setOpenCollapse] = useState(false)
    function handleCollapse() {
        //    si c'est ouvert alors tu fermes sinon tu ouvres
        if (openCollapse === true) {
            setOpenCollapse(false)
         }// else {
        //     setOpenCollapse(true)
        // }
        if (openCollapse === false){
            setOpenCollapse(true)
        }
    }

    return (
        <>
            {/* props */}
            <button className="collapse" onClick={handleCollapse}>
                <p className="text-Collapse">Fiabilité</p>
                <img src={arrowTop} alt="Flèche icon" className="arrows-Collapse" />
            </button>
            {/* ceci sert à changer la classe hide à show et vice-versa */}
            <div className={`toggle-collapse ${openCollapse ? 'show' : 'hide'}`}>
            
                <p className="toggle-collapse-text">{openCollapse}</p>
                <p className="toggle-collapse-text">exemple</p>
                <p className="toggle-collapse-text">exemple</p>
            </div>
        </>
    )
}

export default Collapse
