// "use client";
import {getOrderTracking} from "@/store/requests/orders";
import Image from "next/image";
import HorizontalProduct from "./components/product/horizontal";

// add global styling
// desing the products


export default function Home() {
  const User = async () => {
    try {
      const orders = await getOrderTracking();
      console.log(orders);
        
      return (
        <div>
          <h2>{orders?.campaign?.name}</h2>
          <p>{orders.order?.campaign}</p>
        </div>
      );
    } catch (error) {
      return <div>Failed to load user data.</div>;
    }
  };

  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Primis Tracking

        <User />
      </div> */}

      <div className="min-h-screen bg-gray-50 p-4 md:p-8 text-brand-primary">
        <div className="mx-auto">
        {/* <div className="mx-auto max-w-4xl"> */}
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
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4">
              <h1 className="mb-2 text-2xl font-bold md:text-3xl">Hello Tristan,</h1>
              <p className="text-sm text-gray-600">Your order has been confirmed and is on its way.</p>
            </div>
            
            {/* <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-semibold uppercase text-gray-600">Summary:</h2>
                <div className="grid gap-2 text-sm">
                  <div className="grid grid-cols-2">
                    <span>Order #:</span>
                    <span>12345678</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Order Date:</span>
                    <span>March 30, 2017</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Order Total:</span>
                    <span>$14.07</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 font-semibold uppercase text-gray-600">Shipping Address:</h2>
                <div className="text-sm">
                  <p>Miss Bean Official</p>
                  <p>123 Sreet Ave</p>
                  <p>Boston, MA 02110</p>
                </div>
              </div>
            </div> */}

          </div>

          {/* Product List */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 font-semibold uppercase text-gray-600">Items Shipped</h2>
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

        </div>
      </div>
    </>
  );
}
