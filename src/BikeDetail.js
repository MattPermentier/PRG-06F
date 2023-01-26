import {Link, Outlet, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

const URI_COLLECTION = "http://145.24.222.138:8000/bikes";

export function BikeDetail() {
    const params = useParams()

    const [bike, setBike] = useState(null)

    function loadBike()  {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setBike(result))
            .catch(error => console.log('ERROR ' + error))
    }

    useEffect(() => {
        loadBike()
    }, [])

    return <section>
        <h1>{bike && bike.brand}</h1>
        <p>{bike && bike.model}</p>
        <p>{bike && bike.power}</p>
    </section>
}