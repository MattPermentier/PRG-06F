import {useEffect, useState} from "react";
import {Bike} from "./Bike";
import {NewBike} from "./NewBike";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from './Layout';
import {Error} from './Error';
import {BikeDetail} from "./BikeDetail";
import {BikesPut} from "./BikesPut";

const URI_COLLECTION = "http://145.24.222.138:8000/bikes";

export function App() {
    const [bikes, setBikes] = useState([]);

    function loadBikes() {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setBikes(result.items))
            .catch(error => console.log('ERROR ' + error))
    }

    const showBikes = bikes.map((value) =>
        <Bike key={value.id} bike={value} refreshBikesHandler={loadBikes}/>
    )

    useEffect(() => {
        loadBikes()
    }, [])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={showBikes}/>} />
                <Route path='create' element={<NewBike refreshBikesHandler={() => loadBikes()}/>}/>
                <Route path="bikes/:id" element={<BikeDetail/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path="bikes/edit/:id" element={<BikesPut refreshBikesHandler={loadBikes}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}