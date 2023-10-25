import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const add = { name, brandName, category, image, price, rating, details }

        fetch('https://auto-haven-server-hdc371zlv-md-taiatul-islam-apons-projects.vercel.app/cars/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center">Add Product</h2>
                <p className="text-center text-5xl text-[#fd9c01] mb-5">-------------</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col w-full lg:w-1/2 gap-4 px-10">
                            <label>
                                <p className="mb-2">Name:</p>
                                <input type="text" name="name" placeholder="Your Name" className="w-full p-2" required />
                            </label>
                            <label>
                                <p className="mb-2">Brand Name:</p>
                                <input type="text" name="brandName" placeholder="Brand Name (Toyota, Ford etc)" className="w-full p-2" required />
                            </label>
                            <label>
                                <p className="mb-2">Category:</p>
                                <input type="text" name="category" placeholder="Category Name" className="w-full p-2" required />
                            </label>
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 gap-4 px-10">
                            <label>
                                <p className="mb-2">Image:</p>
                                <input type="text" name="image" placeholder="Photo URL" className="w-full p-2" required />
                            </label>
                            <label>
                                <p className="mb-2">Price:</p>
                                <input type="number" name="price" placeholder="Car Price" className="w-full p-2" required />
                            </label>
                            <label>
                                <p className="mb-2">Rating:</p>
                                <input type="text" name="rating" placeholder="Give between 1-5" className="w-full p-2" required />
                            </label>
                        </div>
                    </div>
                    <div className="px-10 mt-5">
                        <label>
                            <p className="mb-2">Details:</p>
                            <textarea name="details" rows={4} className='w-full p-2' required />
                        </label>
                    </div>
                    <div className="mt-5 px-10">
                        <input type="submit" value="Add" className="btn normal-case text-white bg-[#fd9c01c9] w-full p-2" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;