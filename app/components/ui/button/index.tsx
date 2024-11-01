"use client";

export default function CustomButton({
    text,
}: {
    text?: string;
}) {

    return (
        <button className="flex-1 rounded bg-brand-secondary px-4 py-2 text-sm font-bold text-white hover:bg-brand-tertiary">
            {text}
        </button>
    );
}
