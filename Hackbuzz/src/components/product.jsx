import {React,useEffect,useState} from 'react';
import productImage from '/src/assets/nbus.svg';
import styles from './product.module.css';
import vegetablesData from '/src/vegetable.json';
import axios from 'axios';
function Product(props) {
    return (
        <div className={styles.product}>
            <img src={props.img} alt={props.name} />
            <div className={styles.product_description}>
                <h2>{props.name}</h2>
            </div>
            <div className={styles.price}>
                <p>{props.price}</p>
            </div>
        </div>
    );
}
const Farme = (props) => {
    return (
        <> <div className={styles.avgContainer}>
            <h1>Farmer's Price</h1>
            <p>Brinjal: {props.avg_brinjal === null ? 'NULL' : props.avg_brinjal}</p>
            <p>Bitter gourd: {props.avg_bitter_gourd === null ? 'NULL' : props.avg_bitter_gourd}</p>
            <p>Beans: {props.avg_beans === null ? 'NULL' : props.avg_beans}</p>
            <p>Cauliflower: {props.avg_cauliflower === null ? 'NULL' : props.avg_cauliflower}</p>
            <p>Cabbage: {props.avg_cabbage === null ? 'NULL' : props.avg_cabbage}</p>
            <p>Capsicum: {props.avg_capsicum === null ? 'NULL' : props.avg_capsicum}</p>
            <p>Drumstick: {props.avg_drumstick === null ? 'NULL' : props.avg_drumstick}</p>
            <p>Bottle gourd: {props.avg_bottle_gourd === null ? 'NULL' : props.avg_bottle_gourd}</p>
            <p>Carrot: {props.avg_carrot === null ? 'NULL' : props.avg_carrot}</p>
            <p>Garlic: {props.avg_garlic === null ? 'NULL' : props.avg_garlic}</p>
            <p>Ginger: {props.avg_ginger === null ? 'NULL' : props.avg_ginger}</p>
            <p>Ladies finger: {props.avg_ladies_finger === null ? 'NULL' : props.avg_ladies_finger}</p>
            <p>Onion: {props.avg_onion === null ? 'NULL' : props.avg_onion}</p>
            <p>Peas: {props.avg_peas === null ? 'NULL' : props.avg_peas}</p>
            <p>Potato: {props.avg_potato === null ? 'NULL' : props.avg_potato}</p>
            <p>Pumpkin: {props.avg_pumpkin === null ? 'NULL' : props.avg_pumpkin}</p>
            <p>Radish: {props.avg_radish === null ? 'NULL' : props.avg_radish}</p>
            <p>Red chillies: {props.avg_red_chillies === null ? 'NULL' : props.avg_red_chillies}</p>
            <p>Small onion: {props.avg_small_onion === null ? 'NULL' : props.avg_small_onion}</p>
            <p>Coriander: {props.avg_coriander === null ? 'NULL' : props.avg_coriander}</p>
            <p>Sweet potato: {props.avg_sweet_potato === null ? 'NULL' : props.avg_sweet_potato}</p>
            <p>Tomato: {props.avg_tomato === null ? 'NULL' : props.avg_tomato}</p>
            <p>Spinach: {props.avg_spinach === null ? 'NULL' : props.avg_spinach}</p>
            </div>
        </>
    );
}


const Products = () => {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/vegetables')
    .then(response => {
        setVegetables(response.data);
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.productHead}>Vegetables</h1>
                <div className={styles.products}>
                    {vegetablesData.map((vegetable, index) => (
                        <Product
                            key={index}
                            img={vegetable.img}
                            name={vegetable.name}
                            price={vegetable.price}
                        />
                    ))}
                     <div>
                     {vegetables.map((entry, index) => (
    <Farme key={index} 
    avg_brinjal={entry.avg_brinjal}
    avg_bitter_gourd={entry.avg_bitter_gourd}
    avg_beans={entry.avg_beans}
    avg_cauliflower={entry.avg_cauliflower}
    avg_cabbage={entry.avg_cabbage}
    avg_capsicum={entry.avg_capsicum}
    avg_drumstick={entry.avg_drumstick}
    avg_bottle_gourd={entry.avg_bottle_gourd}
    avg_carrot={entry.avg_carrot}
    avg_garlic={entry.avg_garlic}
    avg_ginger={entry.avg_ginger}
    avg_ladies_finger={entry.avg_ladies_finger}
    avg_onion={entry.avg_onion}
    avg_peas={entry.avg_peas}
    avg_potato={entry.avg_potato}
    avg_pumpkin={entry.avg_pumpkin}
    avg_radish={entry.avg_radish}
    avg_red_chillies={entry.avg_red_chillies}
    avg_small_onion={entry.avg_small_onion}
    avg_coriander={entry.avg_coriander}
    avg_sweet_potato={entry.avg_sweet_potato}
    avg_tomato={entry.avg_tomato}
    avg_spinach={entry.avg_spinach}
    />
))}
        </div>
                </div>
            </div>
        </>
    );
}

export default Products;
