import {useState} from "react";
import {Link, Outlet} from 'react-router-dom';
import {BikesPut} from "./BikesPut";

export function Bike(props) {
    const deleteBike = () => {
        fetch(props.bike._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => props.refreshBikesHandler())
            .catch(error => console.log('ERROR: ' + error))
    }

    console.log(props);
    return <div>
        <h2>{props.bike.brand}</h2>
        <Link to={"bikes/" + props.bike.id}>Read more</Link> <br/>
        <Link to={"bikes/" + "edit/" + props.bike.id } element={ <BikesPut />}>Edit</Link> <br/>
        <button onClick={deleteBike}>DELETE</button>
    </div>;
}