"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
    const params = useParams();
    const router = useRouter();


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    `/api/auth/products/${params.id}`
                );

                const data = await response.json();

                if (response.ok) {
                    setName(data.name);
                    setDescription(data.description);
                    setCategory(data.category);
                    setPrice(data.price.toString());
                    setImage(data.image);
                } else {
                    alert(data.error);
                    router.push("/seller-dashboard/my-products");
                }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    }

    fetchProducts();
    }, [params.id, router]);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const response = await fetch(
            `/api/auth/products/${params.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name,
                    description,
                    category,
                    price,
                    image,
                }),
            }
        );


        const data = await response.json();
        if (!response.ok) {
            alert(data.error);
            return;

        }

        alert("Product updated successfully!");

        router.push("/seller-dashboard/my-products");
    }

    if (loading) {
        return <p className="p-10">Loading...</p>
    }

    return (
        <div className="mx-w-xl mx-auto-p-10">
            <h1 className="text-3xl font-bold mb-6">
                Edit Product
            </h1>
            
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full border p-3 rounded"
                        required
                        />

                    <textarea
                        placeholder="Description"
                        className="w-full border p-3 rounded"
                        value={description}
                        onChange={(e)=>
                            setDescription(e.target.value)
                        }
                        required
                    />

                     <input
                        type="text"
                        placeholder="Category"
                        className="w-full border p-3 rounded"
                        value={category}
                        onChange={(e)=>
                            setCategory(e.target.value)
                        }
                        required
                    />

                     <input
                        type="number"
                        placeholder="Price"
                        className="w-full border p-3 rounded"
                        value={price}
                        onChange={(e)=>
                            setPrice(e.target.value)
                            }
                            required
                        />

                    <input
                        type="text"
                        placeholder="Image URL"
                        className="w-full border p-3 rounded"
                        value={image}
                        onChange={(e)=>
                            setImage(e.target.value)
                        }
                        required
                        />


                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded cursor-pointer"
                        >
                Update Product
            </button>
            </form>

        </div>
    );
}