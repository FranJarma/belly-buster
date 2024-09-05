import {FC} from "react";

import {Dialog as PrimeReactDialog} from "primereact/dialog";

import "./dialog.scss";

type DialogProps = {
    children: React.ReactNode;
    dialogHeader: string;
    isDialogVisible: boolean;
    maxWidth: string;
    maximizable?: boolean;
    setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Dialog: FC<DialogProps> = ({
    children,
    dialogHeader,
    isDialogVisible,
    maximizable = false,
    maxWidth,
    setIsDialogVisible,
}) => {
    return (
        <PrimeReactDialog
            header={dialogHeader}
            maximizable={maximizable}
            style={{width: maxWidth}}
            visible={isDialogVisible}
            onShow={() => {
                setIsDialogVisible(true);
            }}
            onHide={() => {
                setIsDialogVisible(false);
            }}
        >
            {children}
        </PrimeReactDialog>
    );
};
