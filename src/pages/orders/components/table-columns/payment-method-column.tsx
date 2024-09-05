import {PrimeIcons} from "primereact/api";
import {Button} from "primereact/button";

import {PaymentMethodEnum} from "@types/index";

import "./../order.scss";
import "./table-columns.scss";

type PaymentMethodColumnProps = {
    paymentMethod: PaymentMethodEnum;
};

export const PaymentMethodColumn: React.FC<PaymentMethodColumnProps> = ({
    paymentMethod,
}) => {
    const getPaymentMethodDetails = () => {
        switch (paymentMethod) {
            case PaymentMethodEnum.CASH:
                return {
                    text: "EFECTIVO",
                    severity: "success",
                    icon: PrimeIcons.MONEY_BILL,
                };
            case PaymentMethodEnum.DEBIT_CARD:
                return {
                    text: "DÉBITO",
                    severity: "info",
                    icon: PrimeIcons.CREDIT_CARD,
                };
            case PaymentMethodEnum.TRANSFER:
                return {
                    text: "TRANSFERENCIA",
                    severity: "help",
                    icon: PrimeIcons.PHONE,
                };
            default:
                return {
                    text: "DESCONOCIDO",
                    severity: "warning",
                    icon: PrimeIcons.QUESTION_CIRCLE,
                };
        }
    };

    const {text, severity, icon} = getPaymentMethodDetails();

    return (
        <>
            <Button
                className="order__payment-method"
                icon={icon}
                label={text}
                text
                severity={
                    severity as
                        | "success"
                        | "info"
                        | "help"
                        | "warning"
                        | "secondary"
                        | "danger"
                        | "contrast"
                        | undefined
                }
            />
        </>
    );
};
