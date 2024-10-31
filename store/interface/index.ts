export interface OrderTracking {
    customHtml(customHtml: any): unknown;
    order: any;
    campaign(campaign: any): unknown;
    shipment: Boolean
}

interface Customer {
    firstName: string;
    secondName: string;
}

export interface OrderConfirmationBreadcrumbInterface {
    customer: Customer;
}

export interface products {
    _id: string;
    name: string;
    imageUrl: string;
    quantity: number;
    price: {
        amount: string;
        currency: number;
    };
}

export type OrderDetails = {
    orderId: string;
    products: products[];
    orderSubtotal: {
        amount: string;
        currency: number;
    };
    totalTax: {
        amount: string;
        currency: number;
    };
    deliveryCharge: {
        amount: string;
        currency: number;
    };
    total: {
        amount: string;
        currency: number;
    };
};