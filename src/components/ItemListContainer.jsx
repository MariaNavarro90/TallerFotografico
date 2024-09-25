import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F5B045', borderRadius: '5px', textAlign: 'center', marginTop: '20px'}}> {/* Fondo amarillo */}
        <h1 style={{ color: '#2D2D2D' }}>{greeting}</h1> 
    </div>
  );
}


export default ItemListContainer