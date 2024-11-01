"use client";

export default function CustomButton({
    text,
}: {
    text?: string;
}) {

    return (
        <button className="flex-1 rounded bg-brand-tertiary px-4 py-2 text-sm font-medium text-white hover:bg-brand-tertiary/90">
            View Product {text}
        </button>
    );
}
