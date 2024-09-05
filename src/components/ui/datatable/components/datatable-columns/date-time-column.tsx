import React from "react";

type DateTimeColumnProps = {
    dateTime: string;
};

export const DateTimeColumn: React.FC<DateTimeColumnProps> = ({dateTime}) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    return (
        <section>
            <b>{formattedDate}</b>
            <p>{formattedTime}</p>
        </section>
    );
};
