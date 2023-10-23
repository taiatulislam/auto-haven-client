import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";

const CarDetails = () => {
    const car = useLoaderData();
    const { user } = useContext(AuthContext);

    Object.assign(car, { user: user?.email });

    const handleCart = (email) => {
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added into cart',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-10 px-5">
            <figure><img src={car.image} alt="" className="rounded-lg h-[50vh] md:h-[80vh] w-full" /></figure>
            <h2 className="text-2xl my-3"><span className="font-semibold">Car Model:</span> {car.name}</h2>
            <p className="text-lg"><span className="font-semibold">Car Brand:</span> {car.brandName}</p>
            <p className="text-lg my-3"><span className="font-semibold">Car Category:</span> {car.category}</p>
            <p className="text-lg"><span className="font-semibold">Car Price: $</span> {car.price}</p>
            <p className="text-lg my-3"><span className="font-semibold">Rating:</span> {car.rating}</p>
            <p className="text-lg"><span className="font-semibold">Details:</span> {car.details}</p>
            <button onClick={() => handleCart(user.email)} className="btn normal-case text-white bg-[#fd9c01] w-full mt-3">Add to Cart</button>
        </div>
    );
};

export default CarDetails;