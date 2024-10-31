"use client";
import Image from "next/image";

export default function HorizontalProduct() {

    return (
        <div className="rounded-lg border p-4 shadow-sm">
            <div className="flex gap-4">
                <Image
                    src="/images/default.png"
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
        </div>
    );
}
