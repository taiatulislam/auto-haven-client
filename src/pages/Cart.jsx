import { useLoaderData } from "react-router-dom";


const Cart = () => {

    const cartData = useLoaderData();
    console.log(cartData);

    return (
        <div className="max-w-7xl mx-auto py-16">
            {/* <h2 className="text-5xl font-bold text-center">Cart Product</h2>
            <p className="text-center text-5xl text-[#fd9c01] mb-10">-------------</p>
            <div className="grid grid-cols-2 gap-10">
                {
                    cart.map(car =>
                        <div key={car._id} className="card flex-row card-compact bg-base-100 shadow-xl">
                            <figure><img src={car.image} alt="Brand" className='w-[400px] h-[220px] rounded-lg' /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-serif font-semibold">{car.name}</h2>
                                <h2 className="text-center text-2xl font-serif font-semibold">$ {car.price}</h2>
                            </div>
                        </div>
                    )}
            </div> */}
        </div>
    );
};

export default Cart;