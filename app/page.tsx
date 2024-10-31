"use client";
import {getOrderTracking} from "@/store/requests/orders";
import Image from "next/image";
import OrderSummary from "./components/orderConfirmation/orderSummary";
import ProductRecommendations from "./components/orderConfirmation/recommendations";
import OrderConfirmationBreadcrumb from "./components/orderConfirmation/breadCrumb";
import { useEffect, useState } from "react";
import { OrderTracking } from "@/store/interface/index";

export default function Home() {
  const [orders, setOrders] = useState<OrderTracking | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderTracking = async () => {
      try {
        const response = await getOrderTracking();
        setOrders(response); // Save the API response in the state
      } catch (err) {
        setError("Failed to load user data.");
        console.error(err);
      }
    };

    fetchOrderTracking();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mx-auto">
      <div className="mb-8">
        <Image
          src="/images/banner.jpg"
          alt="Autumn themed arrangement with thermos, pumpkin mug, and pastries"
          width={1200}
          height={400}
          className="w-full rounded-lg shadow-md object-cover h-[250px]"
        />
      </div>

      {/* Summary */}
      <OrderConfirmationBreadcrumb/>

      {/* Product List */}
      <OrderSummary/>

      {/* Product Recommendations */}
      <ProductRecommendations/>
    </div>
  );
}
