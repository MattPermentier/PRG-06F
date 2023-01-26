import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
const URI_COLLECTION = "http://145.24.222.138:8000/bikes";

export function BikesPut(props) {
    const params = useParams();

    const [bike, setBike] = useState({
        brand: "",
        model: "",
        power: ""
    })

    const loadBikesDetail = () => {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setBike(result))
            .catch(error => console.log('ERROR:' + error))
    }

    useEffect(loadBikesDetail, [])

    const onChangeHandler = (event) => {
        setBike({
            ...bike,
            [event.target.name]: event.target.value
        })
    }

    const saveEditBike = (event) => {
        event.preventDefault()
        fetch(URI_COLLECTION + '/' + params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
            .then(() => props.refreshBikesHandler())
    }

    return <div>
        <h2>Edit Bike</h2>
        <form action="">
            <input type="text" value={bike.brand} name="brand" onChange={onChangeHandler}/><br/>
            <input type="text" value={bike.model} name="model" onChange={onChangeHandler}/><br/>
            <input type="text" value={bike.power} name="power" onChange={onChangeHandler}/><br/>
        </form>
        <button onClick={saveEditBike}><Link to="/">Save</Link></button>
    </div>
}