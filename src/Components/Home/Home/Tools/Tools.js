import React, { useEffect, useState } from 'react';
import PerTools from './PerTools';

const Tools = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `data.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>
            <h1>This is tools: {items.length}</h1>
            {
                items.map(item => <PerTools
                    item={item}
                ></PerTools>)
            }
        </div>
    );
};

export default Tools;