"use client";
import VerticalProduct from "../ui/product/vertical";

export default function ProductRecommendations() {
    return (
        <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold">Recommended Products</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <VerticalProduct key={item} />
                ))}
            </div>
        </div>
    );
}
