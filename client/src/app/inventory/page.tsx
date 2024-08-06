"use client"

import { Product, useGetProductsQuery } from '@/state/api';
import Header from '@/app/(components)/Header';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Breadcrumbs from '../(components)/Breadcrumb';

const columns: GridColDef[] = [
  { field: 'productId', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Product Name', width: 110 },
  { field: 'price', headerName: 'Price', type: 'number',  width: 110, valueGetter: (value, row) => `$${row.price}`, },
  { field: 'rating', headerName: 'Rating', type: 'number', width: 110, valueGetter: (value, row) => (row.rating ? row.rating : "N/A"), },
  { field: 'stockQuantity', headerName: 'Stock Quantity', type: 'number', width: 150 },
]

const Inventory = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery();
    
    if (isLoading) {
        return <div className='py-4'>Loading...</div>
    }

    if (isError || !products) {
      return (
        <div className='text-center text-red-500 py-4'>Failed to fetch products</div>
      )
    }
    
  return (
      <div className='flex flex-col'>
        <Header name="Inventory" />
        <Breadcrumbs items={[
                { href: '/', label: 'Home' },
                { href: '#inventory', label: 'Inventory' },
            ]} />
        <DataGrid 
          rows={products as any}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
          className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
        />
      </div>
    )
}

export default Inventory