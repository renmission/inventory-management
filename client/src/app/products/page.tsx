"use client"

import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import { useState } from "react";
import Header from "@/app/(components)/Header";
import { PlusCircleIcon, Search } from "lucide-react";
import Rating from "@/app/(components)/Rating";
import CreateProductModal from "./CreateProductModal";
import Breadcrumbs from "@/app/(components)/Breadcrumb";

type ProductFormData = {
    name: string
    rating: number
    price: number
    stockQuantity: number
}

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm);

    const [createProduct] = useCreateProductMutation();

    const handleCreateProduct = async (newProduct: ProductFormData) => {
        await createProduct(newProduct);
        setIsModalOpen(false);
    }

    if (isLoading) {
        return <div className="py-4">Loading...</div>
    }

    if (isError || !products) {
        return <div className="text-center text-red-500 py-4">Failed to fetch products</div>
    }


  return (
    <div className="mx-auto pb-5 w-full">
        {/* SEARCH BAR */}
        <div className="mb-6">
            <div className="flex items-center border-2 border-gray-200 rounded">
                <Search className="w-5 h5 text-gray-500 m-2" />
                <input 
                    className="w-full py-2 rounded bg-white"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />

            </div>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
            <Header name="Products" />
            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>
                <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create Product
            </button>
        </div>

        <Breadcrumbs items={[
                { href: '/', label: 'Home' },
                { href: '#products', label: 'Products' },
            ]} customStyle="mb-5" />

        {/* BODY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-between">
            {isLoading ? (<div className="py-4">Loading...</div>) : (
                (products as any)?.map((product: any) => (
                    <div key={product.productId} className="border shadow rounded-md p-4 max-w-full w-full mx-auto" >
                       <div className="flex flex-col items-center">
                            img
                            <h3 className="text-lg text-gray-900 font-semibold">{product.name}</h3>
                            <p className="text-gray-800">${product.price.toFixed(2)}</p>
                            <div className="text-sm text-gray-600 mt-1">
                                Stock: {product.stockQuantity}
                            </div>
                            {product.rating && (
                                <div className="flex items-center mt-2">
                                    <Rating rating={product.rating} />
                                </div>
                            )}
                       </div>
                    </div>
                ))
            )}
        </div>

        {/* MODAL */}
        <CreateProductModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            onCreate={handleCreateProduct}
        />
    </div>
  )
}

export default Products