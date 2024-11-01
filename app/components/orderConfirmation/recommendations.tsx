"use client";
import { products } from "@/store/interface";
import VerticalProduct from "../ui/product/vertical";

export default function ProductRecommendations({
    recommendations,
}: {
    recommendations: products[];
}) {
    return (
        <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold">Recommended Products</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {recommendations?.slice(0, 4)?.map((product : products) => (
                    <VerticalProduct key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
