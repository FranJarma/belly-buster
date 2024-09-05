import React, {useContext, useEffect, useState} from "react";

type StepperContextType<T> = {
    currentStep: number;
    formData: T;
    initializeFormData: (data: T, dependencies?: T[]) => void;
    nextStep: (event: React.FormEvent<HTMLButtonElement>) => void;
    prevStep: (event: React.FormEvent<HTMLButtonElement>) => void;
    updateFormData: (data: Partial<T>) => void;
};

const StepperContext = React.createContext<StepperContextType<any> | null>(
    null
);

export const StepperProvider: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<any>({});

    const nextStep = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const initializeFormData = (initialData: any, dependencies: any[] = []) => {
        useEffect(() => {
            updateFormData(initialData);
        }, dependencies);
    };

    const updateFormData = (newData: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            ...newData,
        }));
    };

    return (
        <StepperContext.Provider
            value={{
                currentStep,
                formData,
                initializeFormData,
                nextStep,
                prevStep,
                updateFormData,
            }}
        >
            {children}
        </StepperContext.Provider>
    );
};

export const useStepper = <T,>(): StepperContextType<T> => {
    const context = useContext(StepperContext);

    if (!context) {
        throw new Error("useStepper must be used inside StepperProvider");
    }

    return context as StepperContextType<T>;
};
