import {getOrderTracking} from "@/store/requests/orders";
import Image from "next/image";

export default function Home() {
  // const User = async () => {
  //   try {
  //     const orders = await getOrderTracking();
        
  //     return (
  //       <div>
  //         <h2>{orders?.campaign?.name}</h2>
  //         <p>{orders.order?.campaign}</p>
  //       </div>
  //     );
  //   } catch (error) {
  //     return <div>Failed to load user data.</div>;
  //   }
  // };

  return (
    <>
        {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Primis Tracking

      <User />
    </div> */}

    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          {/* <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Chewy"
            width={120}
            height={40}
            className="mx-auto mb-6"
          /> */}
          <h2> Primis Tracking </h2>
          <h1 className="mb-6 text-2xl font-bold md:text-3xl">Your order is on its way.</h1>
          <div className="mb-6 flex justify-center">
            <div className="relative h-12 w-48">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gray-300"></div>
              <div className="absolute bottom-0 left-4 h-6 w-px bg-gray-300"></div>
              <div className="absolute bottom-0 right-4 h-6 w-px bg-gray-300"></div>
              <svg
                className="absolute left-1/2 top-0 -translate-x-1/2 transform"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v13H3z"></path>
                <path d="M3 13l9-7 9 7"></path>
                <path d="M13 13h4v3h-4z"></path>
              </svg>
            </div>
          </div>
          <button className="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
            TRACK YOUR ORDER
          </button>
          <p className="text-sm text-gray-600">Please allow 24 hours to track your order.</p>
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 font-semibold uppercase text-gray-600">Items Shipped</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Nylabone Advanced Oral Care Dog Finger Brush"
                width={80}
                height={80}
                className="rounded-lg border"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">Nylabone Advanced Oral Care Dog Finger Brush, 2-pack</h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Qty: 1</span>
                  <span className="text-red-600">$3.59</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Arm & Hammer Dental Advanced Care"
                width={80}
                height={80}
                className="rounded-lg border"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">
                  Arm & Hammer Dental Advanced Care Tartar Control Toothpaste for Dogs, 2.5-oz tube
                </h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Qty: 1</span>
                  <span className="text-red-600">$4.99</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2 border-t pt-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal (2 items):</span>
                <span>$8.58</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Flat-Rate Shipping:</span>
                <span>$4.95</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated Tax:</span>
                <span>$0.54</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Order Total:</span>
                <span className="text-red-600">$14.07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
