import useItems from '../../hooks/useItems';
import ManagePerOrders from './ManagePerOrders';

const ManageProducts = () => {

    const [items, setItems] = useItems();

    return (
        <div className='my-12 '>
            <h1 className='text-center text-4xl font-bold text-primary'>Tools: {items.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-3 gap-5 '>
                {
                    items.map(item => <ManagePerOrders
                        key={item._id}
                        item={item}
                    ></ManagePerOrders>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;