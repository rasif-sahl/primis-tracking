"use client";
import { OrderConfirmationBreadcrumbInterface } from "@/store/interface/index";

export default function OrderConfirmationBreadcrumb({
    customer,
}: OrderConfirmationBreadcrumbInterface) {
    return (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4">
                <h1 className="mb-2 text-2xl font-bold md:text-3xl text-brand-primary">Hello {customer?.firstName} {customer?.secondName},</h1>
                <p className="text-sm text-brand-secondary">Your order has been confirmed and is on its way.</p>
            </div>
        </div>
    );
}
