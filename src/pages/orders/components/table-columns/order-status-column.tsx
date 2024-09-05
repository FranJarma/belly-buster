import {PrimeIcons} from "primereact/api";
import {Chip} from "primereact/chip";

import {OrderStatusEnum} from "@pages/orders/types/Order";

import "./../order.scss";

type OrderStatusColumnProps = {
    orderState: OrderStatusEnum;
};

export const OrderStatusColumn: React.FC<OrderStatusColumnProps> = ({
    orderState,
}) => {
    const getBadgeDetails = () => {
        switch (orderState) {
            case OrderStatusEnum.DELIVERED:
                return {
                    text: "ENTREGADO",
                    variant: "delivered",
                    icon: PrimeIcons.CHECK,
                };
            case OrderStatusEnum.IN_KITCHEN:
                return {
                    text: "EN COCINA",
                    variant: "kitchen",
                    icon: PrimeIcons.CLOCK,
                };
            case OrderStatusEnum.WAITING_PAYMENT:
                return {
                    text: "ESPERANDO PAGO",
                    variant: "pending",
                    icon: PrimeIcons.CREDIT_CARD,
                };
            default:
                return {
                    text: "DESCONOCIDO",
                    variant: "unknown",
                    icon: PrimeIcons.QUESTION_CIRCLE,
                };
        }
    };

    const {text, variant, icon} = getBadgeDetails();

    return (
        <>
            <Chip
                className={`order__status-badge order__status-badge--${variant}`}
                icon={icon}
                label={text}
            />
        </>
    );
};
