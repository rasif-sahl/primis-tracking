import {getOrderTracking} from "@/store/requests/orders";

export default function Home() {
  const User = async () => {
    try {
      const orders = await getOrderTracking();
        
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Primis Tracking

      <User />
    </div>
  );
}
