"use client"

import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react"
import CardExpenseSummary from "./CardExpenseSummary"
import CardPopularProducts from "./CardPopularProducts"
import CardPurchaseSummary from "./CardPurchaseSummary"
import CardSalesSummary from "./CardSalesSummary"
import StatCard from "./StatCard"
import Header from "@/app/(components)/Header"
import Breadcrumbs from "@/app/(components)/Breadcrumb"

const Dashboard = () => {
  return (
    <div>
      <Header name="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows mt-5">
        <CardPopularProducts />
        <CardSalesSummary />
        <CardPurchaseSummary />
        <CardExpenseSummary />
        <StatCard 
          title="Customer & Expenses"
          primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
          details={[
            { 
              title: "Customers Growth",
              amount: "169.00",
              changePercentage: 37,
              IconComponent: TrendingUp
            },
            { 
              title: "Expenses",
              amount: "10.00",
              changePercentage: -50,
              IconComponent: TrendingDown
            }
          ]}
          deteRange="22 - 24 August 20203"
          />
        <StatCard 
          title="Dues & Pending Orders"
          primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
          details={[
            { 
              title: "Dues",
              amount: "200.00",
              changePercentage: 37,
              IconComponent: TrendingUp
            },
            { 
              title: "Expenses",
              amount: "115.00",
              changePercentage: -57,
              IconComponent: TrendingDown
            }
          ]}
          deteRange="22 - 24 August 20203"
          />
          <StatCard 
          title="Sales & Discounts"
          primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
          details={[
            { 
              title: "Sales",
              amount: "250.00",
              changePercentage: 37,
              IconComponent: TrendingUp
            },
            { 
              title: "Discounts",
              amount: "200",
              changePercentage: -10,
              IconComponent: TrendingDown
            }
          ]}
          deteRange="22 - 24 August 20203"
          />
      </div>
    </div>
   
  )
}

export default Dashboard