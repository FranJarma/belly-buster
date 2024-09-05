import React from "react";
import {Grid, GridItem, Step} from "@components/ui";
import {quantityColumn} from "@components/ui/datatable/columns";
import {ClientStep, ProductsSteps} from "@components/ui/stepper/partials/steps";
import {StepperProvider} from "@components/ui/stepper/context/stepper.context";
import Stepper from "@components/ui/stepper/stepper";

import "./../../../../../App.scss";
import "./../../order.scss";

export const CreateOrder = () => {
    const stepperContent: Step[] = [
        {
            content: <ClientStep />,
            header: "Cliente",
        },
        {
            content: <ProductsSteps aditionalColumns={[quantityColumn]} />,
            header: "Productos",
        },
        {
            content: <ClientStep />,
            header: "Pago y confirmación",
        },
    ];

    return (
        <StepperProvider>
            <form className="form__create-order">
                <Grid gap="20px">
                    <GridItem xs={12}>
                        <Stepper steps={stepperContent} />
                    </GridItem>
                </Grid>
            </form>
        </StepperProvider>
    );
};
