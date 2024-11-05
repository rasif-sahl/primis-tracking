import { fetchFromAPI } from "../lib/api";
import { OrderTracking } from "../interface/index";

export async function getOrderTracking(): Promise<OrderTracking> {
  const orderId = process.env.NEXT_PUBLIC_ORDER_ID || "65f1888eca763954f8e1ca06";
  return fetchFromAPI<OrderTracking>(`/api/proxy?orderId=${orderId}`);
}

export async function getOrdersDynamically(orderId: string): Promise<OrderTracking> {
  return fetchFromAPI<OrderTracking>(`/api/proxy?orderId=${orderId}`);
}