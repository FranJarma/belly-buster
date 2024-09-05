import {FC} from "react";
import {KeyFilterType} from "primereact/keyfilter";
import {InputMask, InputMaskChangeEvent} from "primereact/inputmask";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";

import {UI_CONSTS} from "@constants/index";

type InputProps = {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    keyFilter?: KeyFilterType | undefined;
    mask?: string;
    maxLength?: number;
    textArea?: boolean;
    phone?: boolean;
    onChange: (value: string) => void;
};

export const Input: FC<InputProps> = ({
    id,
    label,
    value,
    textArea = false,
    disabled = false,
    keyFilter = undefined,
    mask = "",
    maxLength = 255,
    phone = false,
    onChange,
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {mask || phone ? (
                <InputMask
                    disabled={disabled}
                    id={id}
                    mask={mask ? mask : phone ? UI_CONSTS.MASKS.PHONE_MASK : ""}
                    value={value}
                    onChange={(e: InputMaskChangeEvent) => onChange(e.value)}
                />
            ) : textArea ? (
                <InputTextarea
                    disabled={disabled}
                    id={id}
                    maxLength={maxLength}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        onChange(e.target.value)
                    }
                />
            ) : (
                <InputText
                    disabled={disabled}
                    keyfilter={keyFilter}
                    id={id}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e.target.value)
                    }
                />
            )}
        </>
    );
};
