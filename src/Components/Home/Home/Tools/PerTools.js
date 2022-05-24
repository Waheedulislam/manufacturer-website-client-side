import React from 'react';

const PerTools = ({ item }) => {
    const { img, name, description, minimumOrder, availableQuantity, price } = item;
    return (
        <div>
            <ul><li>{name}</li></ul>
        </div>
    );
};

export default PerTools;