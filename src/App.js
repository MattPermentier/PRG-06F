import {useEffect, useState} from "react";
import {Bike} from "./Bike";
import {NewBike} from "./NewBike";

const URI_COLLECTION = "http://145.24.222.138:8000/bikes";

export function App() {
    const [bikes, setBikes] = useState([]);
    
    const loadBikes = () => {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setBikes(result.items))
    }

    const showBikes = bikes.map((value, key) =>
        <Bike key={value.id} bike={value} bikesRefreshHandler={loadBikes} />
    )

    useEffect(loadBikes, [])

    return <div>
        <h1>Hello Bikes!</h1>
        {showBikes}
        <NewBike bikesRefreshHandler={loadBikes}/>
    </div>
}