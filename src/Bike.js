import {useState} from "react";

export function Bike(props) {
    console.log(props);

    const deleteBike = () => {
        fetch(props.bike._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.bikesRefreshHandler())
    }

    return <section>
        <h2>{props.bike.brand}</h2>
        <button onClick={deleteBike}>DELETE</button>
    </section>;
}