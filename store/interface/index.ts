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