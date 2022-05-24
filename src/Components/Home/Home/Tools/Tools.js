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
        <div className='my-12 '>
            <h1 className='text-center text-2xl font-bold text-primary'>Tools: {items.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    items.map(item => <PerTools
                        item={item}
                    ></PerTools>)
                }
            </div>
        </div>
    );
};

export default Tools;