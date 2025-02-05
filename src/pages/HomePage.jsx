import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

function HomePage() {
  return (
    <div className="h-screen flex flex-col gap-12 w-full items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-100">Welcome, Admin!</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          name="Total Revenue"
          icon={DollarSign}
          value={salesStats.totalRevenue}
          color="#6366F1"
        />
        <StatCard
          name="Avg. Order Value"
          icon={ShoppingCart}
          value={salesStats.averageOrderValue}
          color="#10B981"
        />
        <StatCard
          name="Conversion Rate"
          icon={TrendingUp}
          value={salesStats.conversionRate}
          color="#F59E0B"
        />
        <StatCard
          name="Sales Growth"
          icon={CreditCard}
          value={salesStats.salesGrowth}
          color="#EF4444"
        />
      </div>
    </div>
  );
}

export default HomePage;
