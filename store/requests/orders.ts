import { fetchFromAPI } from "../lib/api";
import { OrderTracking } from "../interface/index";

const ORDER_ID = process.env.NEXT_PUBLIC_ORDER_ID;

// export async function getOrderTracking(): Promise<OrderTracking> {
//   return fetchFromAPI<OrderTracking>(`/tracking/page/${ORDER_ID || "65f1888eca763954f8e1ca06"}`);
// }

// export async function getOrdersDynamically({orderId} : {orderId: any}) : Promise<OrderTracking> {
//   return fetchFromAPI<OrderTracking>(`/tracking/page/${orderId}`);
// }


export async function getOrderTracking(): Promise<OrderTracking> {
  const orderId = process.env.NEXT_PUBLIC_ORDER_ID || "65f1888eca763954f8e1ca06";
  return fetchFromAPI<OrderTracking>(`/api/proxy?orderId=${orderId}`);
}

// Fetch orders dynamically
export async function getOrdersDynamically(orderId: string): Promise<OrderTracking> {
  return fetchFromAPI<OrderTracking>(`/api/proxy?orderId=${orderId}`);
}