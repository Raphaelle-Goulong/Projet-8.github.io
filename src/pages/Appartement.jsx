import '../sass/Appartement.scss'
import React, { useState, useEffect } from 'react'
import data from '../data.json'
import Star from '../assets/Star.svg'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Appartement({ id }) {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [location, setLocation] = useState('')
    const [tags, setTags] = useState([])
    // const [rating, setRating] = useState('');

    useEffect(() => {
        const apartment = data.find((item) => item.id === id)
        if (apartment) {
            setTitle(apartment.title)
            setName(apartment.name)
            setPicture(apartment.picture)
            setLocation(apartment.location)
            setTags(apartment.tags)
            // setRating(apartment.rating);
        } else {
            setTitle('Appartement non trouvé')
            setName('Nom non trouvé')
            setPicture('photo non trouvé')
            setLocation('localisation non trouvé')
            setTags('Tags non trouvé')
            // setRating("note non trouvé")
        }
    }, [id])

    return (
        <>
            <div className="container-carousel">
                <Slideshow />

                <div className="container-apart">
                    <div className="location-apart">
                        <h1 className="title-apart">{title}</h1>
                        <p className="text-apart">{location}</p>
                    </div>
                    <div className="container-profil">
                        <div className="profil-apart">
                            <h2 className="title-profil">{name}</h2>
                            <div className="profil-picture">
                                <img src={picture} alt="Photo de profil" className="picture" />
                            </div>
                        </div>
                        <div className="container-star">
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                        </div>
                    </div>
                    <div className="button-apart">
                        {/* {data.map((item, index) => ( */}
                            <button className="btn-tag" >
                                {/* {item.tag} key={index}*/}
                            </button>
                        {/* // ))} */}
                    </div>
                    <div className="collapse-container">
                        <Collapse />
                        <Collapse />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appartement
