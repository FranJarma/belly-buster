import React, {FC, useRef} from "react";

import {Button} from "primereact/button";
import {Stepper as PrimeReactStepper} from "primereact/stepper";
import {StepperPanel} from "primereact/stepperpanel";

import {StepperProvider, useStepper} from "./context/stepper.context";

import "./stepper.scss";

export type Step = {
    content: React.ReactNode;
    header: string;
};

export type StepperProps = {
    steps: Step[];
};

const Stepper: FC<StepperProps> = ({steps}) => {
    const {currentStep, nextStep, prevStep} = useStepper();
    const stepperRef = useRef(null);

    return (
        <div className="stepper">
            <div className="stepper__container">
                <PrimeReactStepper activeStep={currentStep} ref={stepperRef}>
                    {steps.map((step, index) => (
                        <StepperPanel key={index} header={step.header}>
                            {step.content}
                            <div className="stepper__actions">
                                {index > 0 && (
                                    <Button
                                        label="Atrás"
                                        severity="secondary"
                                        icon="pi pi-arrow-left"
                                        className="stepper__button stepper__button--back"
                                        onClick={prevStep}
                                    />
                                )}
                                {index < steps.length - 1 && (
                                    <Button
                                        label="Siguiente"
                                        icon="pi pi-arrow-right"
                                        iconPos="right"
                                        className="stepper__button stepper__button--next"
                                        onClick={nextStep}
                                    />
                                )}
                            </div>
                        </StepperPanel>
                    ))}
                </PrimeReactStepper>
            </div>
        </div>
    );
};

const StepperWithProvider: FC<StepperProps> = ({steps}) => (
    <StepperProvider>
        <Stepper steps={steps} />
    </StepperProvider>
);

export default StepperWithProvider;
