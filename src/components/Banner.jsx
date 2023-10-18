
const Banner = () => {
    return (
        <div className="hero min-h-[100vh] absolute top-0 -z-10" style={{ backgroundImage: 'url(https://i.ibb.co/wdbqWhv/auto-cover.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-7xl">
                    <h1 className="mb-5 text-5xl font-bold">Auto <span className="text-[#fd9c01]">Haven</span></h1>
                    <p className="mb-5 text-lg font-medium text-justify">
                        Auto Haven, your ultimate destination for exceptional cars, is delighted to welcome you. Discover a wide range of vehicles meticulously selected to elevate your driving experience. Our commitment to quality and customer satisfaction is at the core of everything we do. Begin your journey with us and find the perfect ride that matches your aspirations and style. At Auto Haven, we are dedicated to turning your automotive dreams into reality.</p>

                    <p className="text-5xl font-semibold mt-28 ">Call: <span className="text-[#fd9c01]">+99 9033 204</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;