import { fetchFromAPI } from "../lib/api";
import { OrderTracking } from "../interface/index";

export async function getOrderTracking(): Promise<OrderTracking> {
  return fetchFromAPI<OrderTracking>("/tracking/page/65f1888eca763954f8e1ca06");
}
