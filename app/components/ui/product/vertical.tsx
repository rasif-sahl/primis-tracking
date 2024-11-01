"use client";
import { products } from "@/store/interface";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "../button"

export default function VerticalProduct({
    product,
}: {
    product?: products;
}) {
    const [src, setSrc] = useState(product?.imageUrl || "/images/default.png");

    return (
        <div className="relative rounded-lg bg-white p-4 shadow-sm">
            <div className="absolute right-3 top-2 flex gap-2">
                <button className="rounded-full bg-white p-1.5 shadow-sm hover:bg-gray-50">
                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
                <button className="rounded-full bg-white p-1.5 shadow-sm hover:bg-gray-50">
                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            <div className="mb-3 inline-block px-2 py-1 text-xs text-white"></div>
            <div className="relative mb-3 pt-[100%]">
                <Image
                    src={src}
                    alt={product?.name || ''}
                    fill
                    className="absolute left-0 top-0 h-full w-full object-contain"
                    onError={() => setSrc("/images/default.png")}
                />
            </div>
            <h3 className="mb-3 font-medium">{product?.name}</h3>
            <div className="mb-3 flex items-baseline gap-2">
                <span className="text-lg font-bold">{product?.price?.currency}{product?.price?.amount}</span>
            </div>
            <div className="flex gap-2">
                <CustomButton text="View Product" />
            </div>
        </div>
    );
}
