"use client";
import { useState } from "react";

export default function AddProductPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setError("");
        setSuccess("");

        try{
            const response = await fetch("/api/auth/products", {
            method:"POST",
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
        });

        const data = await response.json();

        if (!response.ok) {
            setError(data.error || "Something went wrong.");
            return;
        }

        setSuccess("Product created successfully!");

        setName("");
        setDescription("");
        setCategory("");
        setPrice("");
        setImage("");
    } catch {
        setError("Unable to connect to the server.");
    }

}

return (
    <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">
            Add Product
        </h1>

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input
            type="text"
            placeholder="Product name"
            className="w-full border rounded-lg p-3"
            value={name}
            onChange={(e)=>
                setName(e.target.value)
             }
             required
            />

            <textarea
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            value={description}
            onChange={(e)=>
                setDescription(e.target.value)
             }
             required
            />
            

            <input
            type="text"
            placeholder="Category"
            className="w-full border rounded-lg p-3"
            value={category}
            onChange={(e)=>
                setCategory(e.target.value)
             }
             required
            />


            <input
            type="number"
            placeholder="Price"
            className="w-full border rounded-lg p-3"
            value={price}
            onChange={(e)=>
                setPrice(e.target.value)
             }
             required
            />

            <input
            type="text"
            placeholder="Image URL"
            className="w-full border rounded-lg p-3"
            value={image}
            onChange={(e)=>
                setImage(e.target.value)
             }
             required
            />


            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            {success && (
                <p className="text-green-600">
                    {success}
                </p>
            )}

            <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
                Create Product
            </button>
        </form>
    </div>
    );
}