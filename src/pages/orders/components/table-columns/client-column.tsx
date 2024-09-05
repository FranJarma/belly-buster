import React from "react";

import {Client} from "@types/index";
import {PrimeIcons} from "primereact/api";

type ClientColumnProps = {
    client: Client;
};

export const ClientColumn: React.FC<ClientColumnProps> = ({client}) => {
    return (
        <section>
            <b>{client.fullName}</b>
            <div className="order__client-info">
                <i className={PrimeIcons.PHONE}></i>
                <span>{client.phone}</span>
            </div>
        </section>
    );
};
