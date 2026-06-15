import Link from "next/link";

export default function Navbar() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">
                Seller Dashboard
            </h1>
        <p className="mt-4">
            Welcome! Here you'll be able to manage your products.
        </p>


        <div className="flex gap-4">
            <Link
            href="/seller-dashboard/add-product"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
            Add Product
            </Link>

        <Link
            href="/seller-dashboard/my-products"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
            My Products
            </Link>


        </div>
        </div>
    )
}