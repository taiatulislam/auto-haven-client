import { useEffect, useState } from "react";

const UpcommingCars = () => {

    const [upComing, setUpComing] = useState([]);

    useEffect(() => {
        fetch('/upcomming.json')
            .then(res => res.json())
            .then(data => setUpComing(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">Upcomming Cars</h2>
            <p className="text-center text-5xl text-[#fd9c01] mb-10">-------------</p>
            <div className="grid grid-cols-1 px-5 lg:grid-cols-2 gap-10">
                {
                    upComing.map(car =>
                        <div key={car.id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={car.image} alt="Brand" className='h-[200px] md:h-[300px] w-full' /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-serif font-semibold">{car.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UpcommingCars;