// "use client";
import Image from "next/image";

export default function VerticalProduct() {
    return (
        <div className="relative rounded-lg bg-white p-4 shadow-sm">
            <div className="absolute right-2 top-2 flex gap-2">
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
            <div className="mb-2 inline-block rounded bg-blue-500 px-2 py-1 text-xs text-white">
                $4 Off
            </div>
            <div className="relative mb-3 pt-[100%]">
                <Image
                    src="/images/default.png"
                    alt="CHUNKY KNIT CASHMERE CARDIGAN"
                    fill
                    className="absolute left-0 top-0 h-full w-full object-contain"
                />
            </div>
            <div className="mb-2 flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-green-600">In stock</span>
            </div>
            <div className="mb-1 text-sm text-gray-600">Aquapure | Part No. 396301</div>
            <h3 className="mb-3 font-medium">CHUNKY KNIT CASHMERE CARDIGAN</h3>
            <div className="mb-3 flex items-baseline gap-2">
                <span className="text-lg font-bold">$45.50</span>
                <span className="text-sm text-gray-500 line-through">$72.90</span>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Add
                </button>
            </div>
        </div>
    );
}
