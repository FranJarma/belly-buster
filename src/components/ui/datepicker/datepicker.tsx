import {FC, FormEvent} from "react";
import {Calendar} from "primereact/calendar";
import {Nullable} from "primereact/ts-helpers";

import {UI_CONSTS} from "@constants/ui.constants";

type DatePickerProps = {
    id: string;
    label: string;
    value: Date | Nullable<Date[]>;
    dateFormat?: string;
    timeOnly?: boolean;
    onChange?: (e: FormEvent<Date[] | Nullable<Date[]>>) => void;
};

export const DatePicker: FC<DatePickerProps> = ({
    id,
    label,
    value,
    timeOnly = false,
    dateFormat = "dd/mm/yy",
    onChange,
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <Calendar
                id={id}
                dateFormat={timeOnly ? undefined : dateFormat}
                hourFormat="24"
                mask={
                    timeOnly
                        ? UI_CONSTS.MASKS.TIME_MASK
                        : UI_CONSTS.MASKS.DATE_TIME_MASK
                }
                placeholder={
                    timeOnly
                        ? UI_CONSTS.PLACEHOLDER.TIME
                        : UI_CONSTS.PLACEHOLDER.DATE_TIME
                }
                showTime={!timeOnly || timeOnly}
                timeOnly={timeOnly}
                value={value}
                onChange={onChange}
            />
        </>
    );
};
