import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  userId: string
  name: string
  email: string
}

export interface Product {
    productId: string
    name: string
    price: number
    rating: number
    stockQuantity: number
  }

export interface NewProduct {
    name: string
    price: number
    rating: number
    stockQuantity: number
  }


export interface SalesSummary {
    salesSummaryId:   string 
    totalValue: number
    changePercentage?: number
    date: string
  }

export interface PurchaseSummary {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: string
  }

export interface ExpenseSummary {
    expenseSummaryId: string             
    totalExpenses: number
    date: string
  }
  
export interface expenseByCategorySummary {
    expenseByCategoryId: string         
    category: string
    amount: number
    date: string
  }
  
  
export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: expenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
    endpoints: (builder) => ({
        getDashboardMetrics: builder.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        getProducts: builder.query<Product, string | void>({
            query: (search) => ({
                url: "/products",
                params: search ? { search } : {}
            }),
            providesTags: ["Products"]
        }),
        createProduct: builder.mutation<Product, NewProduct>({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["Products"]
        }),
        getUsers: builder.query<User[], void>({
          query: () => "/users",
          providesTags: ["Users"]
        }),
        getExpensesByCategory: builder.query<expenseByCategorySummary[], void>({
          query: () => "/expenses",
          providesTags: ["Expenses"]
        }),
    }),
});

export const {
    useGetDashboardMetricsQuery,
    useGetProductsQuery,
    useCreateProductMutation,
    useGetUsersQuery,
    useGetExpensesByCategoryQuery
} = api;