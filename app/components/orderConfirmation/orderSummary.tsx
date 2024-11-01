"use client";
import HorizontalProduct from "../ui/product/horizontal";
import { OrderDetails, products } from "@/store/interface/index";

export default function OrderSummary({
    orderDetails,
}: {
    orderDetails: OrderDetails;
}) {
    return (
        <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold uppercase text-brand-tertiary">Order Summary</h2>
            <div className="lg:flex lg:gap-8">
                <div className="lg:w-2/3 lg:border-r lg:pr-8">
                    <div className="max-h-96 overflow-y-auto pr-4">
                        <div className="space-y-6">
                            {orderDetails?.products?.map((product : products) => (
                                <HorizontalProduct key={product._id} product={product}/>
                            ))}                            
                        </div>
                    </div>
                </div> 

                <div className="mt-6 lg:mt-0 lg:w-1/3">
                    <div className="space-y-2 border-t pt-6 lg:border-t-0 lg:pt-0">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal:</span>
                            <span>R{orderDetails?.orderSubtotal?.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>delivery Charge:</span>
                            <span>R{orderDetails?.deliveryCharge?.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Tax:</span>
                            <span>R{orderDetails?.totalTax?.amount}</span>
                        </div>
                        <div className="flex justify-between font-medium border-t pt-2 mt-4">
                            <span>Order Total:</span>
                            <span className="text-red-600">R{orderDetails?.total?.amount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
