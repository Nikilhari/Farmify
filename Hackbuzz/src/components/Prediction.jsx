import React, { useState } from 'react';
import axios from 'axios';
import styles from './prediction.module.css';  // Import the CSS file

function Prediction() {
    const [forecast, setForecast] = useState(null);
    const [columnName, setColumnName] = useState('');

    const getForecast = async () => {
        console.log()
        try {
            const response = await axios.post('http://127.0.0.1:8002/forecast', {
                column_name: columnName,
                forecast_periods: 10
            });
            setForecast(response.data);
        } catch (error) {
            console.error('Error fetching forecast:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Future Price Prediction</h1>
            
            <input
                type="text"
                id='predict'
                list='Predict'
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
                placeholder="Enter product name"
            />
            <datalist id='Predict'>
                <option value="Beans">Beans</option>
                <option value="Bitter gourd">Bitter gourd</option>
                <option value="cauliflower">Cauliflower</option>
                <option value="cabbage">Cabbage</option>
                <option value="capsicum">Capsicum</option>
                <option value="Drumstick">Drumstick</option>
                <option value="bottle gourd">Bottle gourd</option>
                <option value="carrot">Carrot</option>
                <option value="garlic">Garlic</option>
                <option value="ginger">Ginger</option>
                <option value="ladies finger">Ladies finger</option>
                <option value="onion">Onion</option>
                <option value="peas">Peas</option>
                <option value="brinjal">Brinjal</option>
                <option value="potato">Potato</option>
                <option value="pumpkin">Pumpkin</option>
                <option value="radish">Radish</option>
                <option value="small onion">Small onion</option>
                <option value="coriander">Coriander</option>
                <option value="Sweet Potato">Sweet Potato</option>
                <option value="tomato">Tomato</option>
                <option value="spinach">Spinach</option>
            </datalist>
            
            <button onClick={getForecast}>Pedict</button>
            
            {forecast && (
                <div>
                    <h2>Price prediction for next 10 days:</h2>
                    <pre>{JSON.stringify(forecast, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Prediction;
