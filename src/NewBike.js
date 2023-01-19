import {useState} from "react";

const URI_COLLECTION = "http://145.24.222.138:8000/bikes";

export function NewBike(props) {
    console.log(props);

    const [bike, setBike] = useState({
        brand: "",
        model: "",
        power: ""

    })

    const saveBike = (event) => {
        event.preventDefault();

        fetch(URI_COLLECTION, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
            .then((response) => props.bikesRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setBike({
            ...bike,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>New Bike</h2>
        <form action="">
            <input type="text" value={bike.brand} name="brand" onChange={onChangeHandler}/><br/>
            <input type="text" value={bike.model} name="model" onChange={onChangeHandler}/><br/>
            <input type="text" value={bike.power} name="power" onChange={onChangeHandler}/><br/>
            <button onClick={saveBike}>Save</button>
        </form>

    </section>;
}