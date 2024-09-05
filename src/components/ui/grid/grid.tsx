import React from "react";
import "./grid.scss";

type GridProps = {
    children: React.ReactNode;
    gap?: string;
};

type GridItemProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children: React.ReactNode;
};

export const Grid: React.FC<GridProps> = ({children, gap = "16px"}) => {
    return (
        <section className="grid__container" style={{gap}}>
            {children}
        </section>
    );
};

export const GridItem: React.FC<GridItemProps> = ({
    xs = 12,
    sm = 12,
    md = 6,
    lg = 4,
    xl = 3,
    children,
}) => {
    return (
        <div
            className={`grid__item`}
            style={{
                gridColumn: `span ${xs}`,
                ["--sm-columns" as any]: `span ${sm}`,
                ["--md-columns" as any]: `span ${md}`,
                ["--lg-columns" as any]: `span ${lg}`,
                ["--xl-columns" as any]: `span ${xl}`,
            }}
        >
            {children}
        </div>
    );
};
