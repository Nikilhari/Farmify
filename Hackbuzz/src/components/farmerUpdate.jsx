import React, { useState } from 'react';
import styles from './farmerUpdate.module.css';
import vegetableData from '/src/VegetableData.json';
import axios from 'axios';
const farmerUpdate = () => {
    const addData = (event) => {
        const vegie=event.target.vegetable.value;
        event.preventDefault();
        const values = {
            vegetable: event.target.vegetable.value,
            Price: event.target.Price.value,
        };
        if(vegie==' '){
            alert("Enter atleast a single vegetable")
        }
        else{
            axios.post('http://localhost:8001/store',values)
          .then(res=>{console.log(res)})
          .catch(err=>{console.log(err)});
        }
    }
  const [vegetables, setVegetables] = useState(['']);
  const [prices, setPrices] = useState(['']);

  const handleAddButtonClick = () => {
    setVegetables([...vegetables, '']);
    setPrices([...prices, '']);
  };

  const handleRemoveButtonClick = () => {
    if (vegetables.length > 1) {
      const newVegetables = [...vegetables];
      newVegetables.pop();
      setVegetables(newVegetables);

      const newPrices = [...prices];
      newPrices.pop();
      setPrices(newPrices);
    }
  };

  const handleVegetableChange = (event, index) => {
    const newVegetables = [...vegetables];
    newVegetables[index] = event.target.value;
    setVegetables(newVegetables);

    const selectedPrice = vegetableData[event.target.value];
    const newPrices = [...prices];
    newPrices[index] = selectedPrice;
    setPrices(newPrices);
  };

  return (
    <div className={styles.farmerMainContainer}>
      <h1 className={styles.farmHead}>Set Price</h1>
      <div className={styles.farmInputContainer}>
        <p className={styles.inputHead}>Select the vegetable</p>
        <form action="" onSubmit={addData}>
            {vegetables.map((vegetable, index) => (
              <div key={index} className={styles.textbox}>
                <input type="text" list={`Veg${index}`} value={vegetable} placeholder="Enter Vegetable"
                  name="vegetable" className={styles.vegInput} onChange={(event) => handleVegetableChange(event, index)}/>
                <datalist id={`Veg${index}`}>
                  {Object.keys(vegetableData).map((veg, idx) => (
                    <option key={idx} value={veg}>
                      {veg}
                    </option>
                  ))}
                </datalist>
                {prices[index] && (
                  <p className={ styles.priceDisp}>
                    Price of {vegetable}: {prices[index]}
                  </p>
                )}
                <input type="text" placeholder="Enter your price" className={styles.priceInput} name="Price"/>
                <button className={styles.updateBtn}>Update</button>
              </div>
            ))}
        </form>
        <div className={styles.inputBtn}>
          <button className={styles.addbtn} onClick={handleAddButtonClick}>Add
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </button>
          <button className={styles.removebtn} onClick={handleRemoveButtonClick} disabled={vegetables.length===1}>Remove
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default farmerUpdate;
  