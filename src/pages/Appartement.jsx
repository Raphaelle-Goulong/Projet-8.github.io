import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../sass/Appartement.scss'
import data from '../data.json'
import Star from '../assets/Star.svg'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'


function Appartement() {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [pictures, setPictures] = useState('')
    const [picture, setPicture] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [equipments, setEquipments] = useState('')
    const [tags, setTags] = useState([])
    const [rating, setRating] = useState([]);
    const range = [1,2,3,4,5]

    useEffect(() => {
        const apartment = data.find((item) => item.id === id)
        if (apartment) {
            setTitle(apartment.title)
            setName(apartment.name)
            setPicture(apartment.host.picture)
            setPictures(apartment.pictures)
            setLocation(apartment.location)
            setTags(apartment.tags)
            setDescription(apartment.description)
            setEquipments(apartment.equipments)

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
    const stars = rating.length;
    return (
        <>
            <div className="container-carousel">
                <Slideshow pictures={pictures} />

                <div className="container-apart">
                    <div className="location-apart">
                        <h1 className="title-apart">{title}</h1>
                        <p className="text-apart">{location}</p>
                    </div>
                    <div className="container-profil">
                        <div className="profil-apart">
                            <h2 className="title-profil">{name}</h2>
                            
                            <div className="profil-picture">
                                <img src={picture} alt="Profil" className="picture" />
                            </div>
                        </div>
                        <div className="container-star">
                        {range.map((rangeElem) =>
                           rating >= rangeElem ? <img src={Star} alt="Note" className="star-icon" />: null
                        )}
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                            <img src={Star} alt="Note" className="star-icon" />
                        </div>
                    </div>
                    <div className="button-apart">
                        {tags.map((item, index) => (
                            <span className="btn-tag" key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="collapse-container">
                        <div className="col-50">
                            <Collapse title="Description" description={description} />
                        </div>
                        <div className="col-50">
                            <Collapse title="Equipments" equipments={equipments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appartement
