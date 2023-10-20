import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const update = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const updateCar = { name, brandName, category, image, price, rating, details }

        console.log(updateCar);

        fetch(`http://localhost:5000/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div>
            <div className="bg-base-300">
                <div className="max-w-7xl mx-auto py-10">
                    <h2 className="text-5xl font-bold text-center">Update Product</h2>
                    <p className="text-center text-5xl text-[#fd9c01] mb-5">-------------</p>
                    <form onSubmit={handleUpdate}>
                        <div className="flex gap-5">
                            <div className="flex flex-col w-1/2 gap-4 px-10">
                                <label>
                                    <p className="mb-2">Name:</p>
                                    <input type="text" name="name" defaultValue={update.name} className="w-full p-2" />
                                </label>
                                <label>
                                    <p className="mb-2">Brand Name:</p>
                                    <input type="text" name="brandName" defaultValue={update.brandName} className="w-full p-2" />
                                </label>
                                <label>
                                    <p className="mb-2">Category:</p>
                                    <input type="text" name="category" defaultValue={update.category} className="w-full p-2" />
                                </label>
                            </div>
                            <div className="flex flex-col w-1/2 gap-4 px-10">
                                <label>
                                    <p className="mb-2">Image:</p>
                                    <input type="text" name="image" defaultValue={update.image} className="w-full p-2" />
                                </label>
                                <label className="my-3">
                                    <p className="mb-2">price:</p>
                                    <input type="text" name="price" defaultValue={update.price} className="w-full p-2" />
                                </label>
                                <label>
                                    <p className="mb-2">Rating:</p>
                                    <input type="text" name="rating" defaultValue={update.rating} className="w-full p-2" />
                                </label>
                            </div>
                        </div>
                        <div className="px-10 mt-5">
                            <label>
                                <p className="mb-2">Details:</p>
                                <textarea name="details" defaultValue={update.details} rows={4} cols={160} />
                            </label>
                        </div>
                        <div className="mt-5 px-10">
                            <input type="submit" value="Update" className="btn normal-case bg-[#fd9c01c9] w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;