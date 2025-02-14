// write product card here
import React from 'react';
import Button from './button';

const Productcard = () => {

  const productImage = 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography'; 
  const productName = 'Awesome Product';
  const productPrice = '$99.99';

  return (
    <div style={styles.card}>
      <img src={productImage} alt="Product" style={styles.image} />
      <h3 style={styles.name}>{productName}</h3>
      <p style={styles.price}>{productPrice}</p>
      <Button />
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
  name: {
    fontSize: '16px',
    margin: '10px 0',
  },
  price: {
    fontSize: '14px',
    color: '#28a745',
  },
};

export default Productcard;
