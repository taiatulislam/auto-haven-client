import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Cart = () => {

    const cartData = useLoaderData();
    const [loadData, setLoadData] = useState(cartData);

    const handleRemove = id => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car delete from cart',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    const remaining = loadData.filter(car => car._id !== id);
                    setLoadData(remaining);
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-16">
            <h2 className="text-5xl font-bold text-center">Cart Product</h2>
            <p className="text-center text-5xl text-[#fd9c01] mb-10">-------------</p>
            <div>
                {

                    loadData.length ?
                        <div className="grid grid-cols-2 gap-10">
                            {loadData.map(car =>
                                <div key={car._id} className="card flex-row card-compact bg-base-100 shadow-xl">
                                    <figure><img src={car.image} alt="Brand" className='w-[400px] h-[220px] rounded-lg' /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-2xl font-serif font-semibold">{car.name}</h2>
                                        <p className="text-center text-xl font-serif font-semibold">{car.category}</p>
                                        <p className="text-center text-xl font-serif font-semibold">$ {car.price}</p>
                                        <p className="text-center text-xl font-serif">{car.rating}/5.0</p>
                                        <button onClick={() => handleRemove(car._id)} className="bg-[#fd9c01] text-white btn normal-case rounded-lg">Remove from cart</button>
                                    </div>
                                </div>
                            )}
                        </div> :
                        <div>
                            <figure><img src='https://i.ibb.co/ZGMbjH3/2953962.jpg' alt="No data" className="w-1/2 mx-auto" /></figure>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;