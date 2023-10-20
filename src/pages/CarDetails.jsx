import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    const car = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto py-10">
            <figure><img src={car.image} alt="" className="rounded-lg h-[80vh] w-full" /></figure>
            <h2 className="text-2xl my-3"><span className="font-semibold">Car Model:</span> {car.name}</h2>
            <p className="text-lg"><span className="font-semibold">Car Brand:</span> {car.brandName}</p>
            <p className="text-lg my-3"><span className="font-semibold">Car Category:</span> {car.category}</p>
            <p className="text-lg"><span className="font-semibold">Car Price: $</span> {car.price}</p>
            <p className="text-lg my-3"><span className="font-semibold">Rating:</span> {car.rating}</p>
            <p className="text-lg"><span className="font-semibold">Details:</span> {car.details}</p>
            <button className="btn normal-case text-white bg-[#fd9c01] w-full mt-3">Add to Cart</button>
        </div>
    );
};

export default CarDetails;