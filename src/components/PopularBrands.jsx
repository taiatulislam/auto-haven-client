import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PopularBrands = () => {

    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    const handleClick = name => {
        navigate(`/brandDetails/${name.toLowerCase()}`)
    }

    return (
        <div className="max-w-7xl mx-auto py-16">
            <h2 className="text-5xl font-bold text-center">Popular Brands</h2>
            <p className="text-center text-5xl text-[#fd9c01] mb-10">-------------</p>
            <div className="grid grid-cols-3 gap-10">
                {
                    brands.map(brand =>
                        <div key={brand.id} onClick={() => { handleClick(brand.name) }} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={brand.image} alt="Brand" className='h-[225px]' /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-serif font-semibold">{brand.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularBrands;