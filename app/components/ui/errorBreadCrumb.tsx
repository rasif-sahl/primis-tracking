"use client";
// import { OrderConfirmationBreadcrumbInterface } from "@/store/interface/index";

export default function ErrorBreadcrumb({
    error,
}: {
    error?: string;
}) {
    return (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md text-center">
            <p className="text-lg text-brand-secondary">{error}</p>
        </div>
    );
}
