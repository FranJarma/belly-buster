export enum PaymentMethodEnum {
    DEBIT_CARD = "Debit Card",
    CASH = "Cash",
    TRANSFER = "Bank Transfer",
}

export type PaymentMethod = {
    id: number;
    name: PaymentMethodEnum;
};

export const paymentMethods = [
    {
        id: 0,
        name: PaymentMethodEnum.DEBIT_CARD,
    },
    {
        id: 1,
        name: PaymentMethodEnum.CASH,
    },
    {
        id: 2,
        name: PaymentMethodEnum.TRANSFER,
    },
];
