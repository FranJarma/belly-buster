import {Client, PaymentMethodEnum} from "@types/index";

export enum OrderStatusEnum {
    DELIVERED = "Delivered",
    IN_KITCHEN = "In Kitchen",
    WAITING_PAYMENT = "Waiting Payment",
}

export type Order = {
    client: Client | null;
    createdAt: string;
    deposit: number;
    orderState: OrderStatusEnum;
    paymentMethod: PaymentMethodEnum | null;
    products: string;
    subtotal: number;
    total: number;
};
