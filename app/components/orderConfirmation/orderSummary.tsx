"use client";
import HorizontalProduct from "../ui/product/horizontal";

export default function OrderSummary() {

    return (
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold uppercase text-gray-600">Order Summary</h2>
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-2/3 lg:border-r lg:pr-8">
              <div className="max-h-96 overflow-y-auto pr-4">
                <div className="space-y-6">
                  <HorizontalProduct/>

                  <HorizontalProduct/>

                  <HorizontalProduct/>
                </div>
              </div>
            </div> 

            <div className="mt-6 lg:mt-0 lg:w-1/3">
              <div className="space-y-2 border-t pt-6 lg:border-t-0 lg:pt-0">
                <div className="flex justify-between text-sm">
                  <span>Subtotal (3 items):</span>
                  <span>$18.57</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Flat-Rate Shipping:</span>
                  <span>$4.95</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Tax:</span>
                  <span>$1.18</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Order Total:</span>
                  <span className="text-red-600">$24.70</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
