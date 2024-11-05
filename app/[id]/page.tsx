"use client";
import { useParams } from 'next/navigation';
import { getOrdersDynamically } from "@/store/requests/orders";
import { useEffect, useState } from "react";
import { OrderTracking } from "@/store/interface";
import {getOrderTracking} from "@/store/requests/orders";
import Image from "next/image";
import OrderSummary from "../components/orderConfirmation/orderSummary";
import ProductRecommendations from "../components/orderConfirmation/recommendations";
import OrderConfirmationBreadcrumb from "../components/orderConfirmation/breadCrumb";
import ErrorBreadcrumb from "../components/ui/errorBreadCrumb";

export default function dynamicPage () {
    const params = useParams();
    const id = params.id;
    const [orders, setOrders] = useState<OrderTracking | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOrderTracking = async () => {
          setLoading(true);
          try {
            const response = await getOrdersDynamically(String(id) || '');
            setOrders(response);
          } catch (err) {
            setError("Failed to load order tracking data.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchOrderTracking();
    }, []);

    

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
    
          { loading ? (
            <div className="flex justify-center items-center mt-20">
              <Image
                src="/images/loading.jpg"
                alt="Loading..."
                width={50}
                height={50}
                className="animate-spin"
              />
            </div>
          ) : error ? 
            <div>
              <ErrorBreadcrumb error={error}/>
            </div>
          :
            <>
              <OrderConfirmationBreadcrumb customer={orders?.order?.customer}/>
              <OrderSummary orderDetails={orders?.order}/>
              <ProductRecommendations recommendations={orders?.campaign?.productRecommendations}/>
            </>
          }
        </div>
      );
}