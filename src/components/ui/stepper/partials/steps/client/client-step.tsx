import {FC, useState} from "react";
import {Message} from "primereact/message";

import {
    AutoComplete,
    Checkbox,
    DatePicker,
    Dropdown,
    Grid,
    GridItem,
    Input,
} from "@components/ui";
import {useStepper} from "@components/ui/stepper/context/stepper.context";

import {clients} from "@pages/clients/data/clients";
import {riders} from "@pages/users/data/users";

import {Client, Rider} from "@types/index";

type Delivery = {
    isDelivery: boolean;
    deliveryTime?: Date | null;
    rider: Rider | null;
};

type ClientStep = {
    client: Client | null;
    delivery: Delivery | null;
};

export const ClientStep: FC = () => {
    const {formData, initializeFormData, updateFormData} =
        useStepper<ClientStep>();

    const {client, delivery} = formData;

    const initialFormData: ClientStep = {
        client: client,
        delivery: {
            isDelivery: delivery?.isDelivery ?? false,
            deliveryTime: delivery?.deliveryTime ?? null,
            rider: delivery?.rider ?? null,
        },
    };

    const [selectedClient, setSelectedClient] = useState<boolean>(!!client);

    initializeFormData(initialFormData);

    return (
        <Grid gap="20px">
            <GridItem xs={12}>
                <h3>Datos del Cliente</h3>
            </GridItem>
            <GridItem xs={12}>
                <AutoComplete<Client>
                    emptyMessage="No se encontraron clientes"
                    field="fullName"
                    id="client"
                    label="Cliente"
                    placeholder="Buscar cliente"
                    suggestions={clients}
                    value={client}
                    onChange={(e: Client | null) => {
                        setSelectedClient(false);
                        updateFormData({...formData, client: e});
                    }}
                    onSelect={(e: Client) => {
                        setSelectedClient(true);
                        updateFormData({...formData, client: e});
                    }}
                />
            </GridItem>
            <GridItem xs={12}>
                <Message
                    severity="info"
                    text="Si no encuentra el cliente, al registrar el pedido se registrará automáticamente."
                />
            </GridItem>
            <GridItem xs={12}>
                <Input
                    disabled={selectedClient}
                    id="phone"
                    label="Teléfono"
                    value={client?.phone ?? ""}
                    phone
                    onChange={(value: string) => {
                        updateFormData({
                            ...formData,
                            client: {
                                ...formData.client,
                                phone: value,
                            },
                        });
                    }}
                />
            </GridItem>
            <GridItem xs={12}>
                <h3>Datos de delivery / retiro</h3>
            </GridItem>
            <GridItem xs={12}>
                <Checkbox
                    checked={delivery?.isDelivery}
                    id="delivery"
                    label="¿Es para delivery?"
                    onChange={(e) => {
                        const checked = e.checked as boolean;
                        updateFormData({
                            ...formData,
                            delivery: {
                                ...formData.delivery,
                                isDelivery: checked,
                            },
                        });
                    }}
                />
            </GridItem>
            {delivery?.isDelivery && (
                <>
                    <GridItem xs={6}>
                        <Input
                            disabled={selectedClient}
                            id="direction"
                            label="Dirección"
                            value={client?.address ?? ""}
                            onChange={(value: string) => {
                                updateFormData({
                                    ...formData,
                                    client: {
                                        ...formData.client,
                                        address: value,
                                    },
                                });
                            }}
                        />
                    </GridItem>
                    <GridItem xs={6}>
                        <DatePicker
                            id="delivery-time"
                            label="Horario"
                            value={delivery?.deliveryTime}
                            timeOnly
                            onChange={(e) => {
                                const date = e.value as Date;
                                updateFormData({
                                    ...formData,
                                    delivery: {
                                        ...formData.delivery,
                                        deliveryTime: date,
                                    },
                                });
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12}>
                        <Dropdown
                            emptyMessage="No se encontraron cadetes disponibles"
                            id="rider"
                            label="Cadete"
                            name="Cadetes"
                            options={riders}
                            optionLabel="fullName"
                            value={delivery?.rider ?? ({} as Rider)}
                            onChange={(e) => {
                                updateFormData({
                                    ...formData,
                                    delivery: {
                                        ...formData.delivery,
                                        rider: e.value,
                                    },
                                });
                            }}
                        />
                    </GridItem>
                </>
            )}
        </Grid>
    );
};
