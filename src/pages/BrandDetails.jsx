import { useLoaderData, useNavigate } from "react-router-dom";
import Caurosal from "../components/Caurosal";


const BrandDetails = () => {

    const navigate = useNavigate();
    const cars = useLoaderData();


    const handleUpdate = id => {
        navigate(`/updateProduct/${id}`)
    }

    const handleDetails = id => {
        navigate(`/carDetails/${id}`)
    }

    return (
        <div>
            <Caurosal></Caurosal>
            <div className="max-w-7xl mx-auto my-10">
                <h2 className="text-5xl font-bold text-center"> Our Popular Cars</h2>
                <p className="text-center text-5xl text-[#fd9c01] mb-10">-------------</p>

                <div>{
                    cars.length ?

                        <div className="grid grid-cols-2 gap-10">
                            {
                                cars.map(car => <div key={car._id} className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img src={car.image} alt="Brand" className='h-[300px] w-full' /></figure>
                                    <div className="card-body">
                                        <h2 className="text-2xl"><span className="font-semibold">Car Model:</span> {car.name}</h2>
                                        <p className="text-lg"><span className="font-semibold">Car Brand:</span> {car.brandName}</p>
                                        <p className="text-lg"><span className="font-semibold">Car Category:</span> {car.category}</p>
                                        <p className="text-lg"><span className="font-semibold">Car Price: $</span> {car.price}</p>
                                        <p className="text-lg"><span className="font-semibold">Rating:</span> {car.rating}</p>
                                        <div className="flex gap-5">
                                            <button onClick={() => handleDetails(car._id, car.brandName)} className="bg-[#fd9c01] text-white p-2 w-full rounded-lg">Details</button>
                                            <button onClick={() => handleUpdate(car._id)} className="bg-[#fd9c01] text-white p-2 w-full rounded-lg">Update</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                        :
                        <div>
                            <figure><img src='https://i.ibb.co/ZGMbjH3/2953962.jpg' alt="No data" className='' /></figure>
                        </div>}
                </div>
            </div>
        </div >
    );
};

export default BrandDetails;