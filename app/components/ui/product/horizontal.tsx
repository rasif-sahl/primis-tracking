"use client";
import { products } from "@/store/interface";
import Image from "next/image";
import { useState } from "react";

export default function HorizontalProductOrderSummary({
    product,
}: {
    product?: products;
}) {
    const [src, setSrc] = useState(product?.imageUrl || "/images/default.png");

    return (
        <div className="rounded-lg border p-4 shadow-sm">
            <div className="flex gap-4">
                <Image
                    src={src}
                    alt="Product Image"
                    width={80}
                    height={80}
                    className="rounded-lg border"
                    onError={() => setSrc("/images/default.png")}
                />
                <div className="flex-1">
                    <h3 className="text-sm font-medium">
                        {product?.name}
                    </h3>
                    <div className="mt-2 flex justify-between text-sm">
                        <span>
                            Qty: {product?.quantity}
                        </span>
                        <span className="text-red-600">{product?.price?.currency}{product?.price?.amount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
