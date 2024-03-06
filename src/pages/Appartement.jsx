import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../sass/Appartement.scss'
import data from '../data.json'
import Star from '../assets/Star.svg'
import Starcolored from '../assets/Starcolored.svg'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Appartement() {
    // Récupération des paramètres de l'URL
    const { id } = useParams()
    // Hook de navigation pour la redirection

    // Utilisation des différents états avec useState
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [pictures, setPictures] = useState('')
    const [picture, setPicture] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [equipments, setEquipments] = useState('')
    const [tags, setTags] = useState([])
    const [rating, setRating] = useState([])

    // Utilisation d'un tableau pour la plage d'étoiles
    const range = [1, 2, 3, 4, 5]

    // Utilisation de useEffect pour effectuer des actions après le rendu du composant
    useEffect(() => {
        try {
            // Recherche de l'appartement dans les données en fonction de l'ID
            const apartment = data.find((item) => item.id === id)
            if (apartment) {
                // Mise à jour des états avec les données de l'appartement trouvé
                setTitle(apartment.title)
                setName(apartment.host.name)
                setPicture(apartment.host.picture)
                setPictures(apartment.pictures)
                setLocation(apartment.location)
                setTags(apartment.tags)
                setDescription(apartment.description)
                setEquipments(apartment.equipments)
                setRating(apartment.rating)
            } else {
                // Redirection vers une page d'erreur si l'appartement n'est pas trouvé
                navigate('/erreur')
            }
        } catch (error) {
            console.error(error)
            // Redirection vers la page d'erreur en cas d'erreur imprévue
            navigate('/erreur')
        }
    }, [id, navigate])

    // Fonction pour déterminer si une étoile doit être colorée ou non en fonction de l'index
    // const isStarColored = (index) => {
    //     return index < data.rating
    // }
    return (
        <>
            <div className="container-carousel">
                {/* Utilisation du composant Slideshow pour afficher les images */}
                <Slideshow pictures={pictures} />

                <div className="container-apart">
                    <div className="location-apart">
                        {/* Affichage du titre et de la localisation de l'appartement */}
                        <h1 className="title-apart">{title}</h1>
                        <p className="text-apart">{location}</p>
                    </div>
                    <div className="container-profil">
                        <div className="profil-apart">
                            {/* Affichage du nom de l'hôte */}
                            <h2 className="title-profil">{name}</h2>
                            <div className="profil-picture">
                                {/* Affichage de l'image de l'hôte */}
                                <img src={picture} alt="Profil" className="picture" />
                            </div>
                        </div>
                        <div className="container-star">
                            {/* Affichage des étoiles en fonction de la note */}
                            {range.map((rangeElem) =>
                                rating >= rangeElem ? (
                                    <img src={Starcolored} alt="Note" className="star-icon" />
                                ) : (
                                    <img src={Star} alt="Note" className="star-icon" />
                                )
                            )}
                        </div>
                    </div>
                    <div className="button-apart">
                        {/* Affichage des tags */}
                        {tags.map((item, index) => (
                            <span className="btn-tag" key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="collapse-container">
                        <div className="col-50">
                            {/* Utilisation du composant Collapse pour afficher la description */}
                            <Collapse title="Description" description={description} />
                        </div>
                        {/* Utilisation du composant Collapse pour afficher les équipements */}
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
