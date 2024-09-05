import {PrimeIcons} from "primereact/api";
import {Avatar} from "primereact/avatar";
import {Button} from "primereact/button";
import {Divider} from "primereact/divider";
import {Sidebar} from "primereact/sidebar";
import {useState} from "react";

import {asideItems} from "./aside-items";
import {AsideList} from "./aside-list";
import {useRenderAsideItems} from "./hooks/useRenderAsideItems";

import "./aside.scss";

export const Aside = () => {
    const [visible, setVisible] = useState(false);

    const renderedItems = useRenderAsideItems(asideItems);

    return (
        <aside>
            <div>
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <Divider />
                    <AsideList>{renderedItems}</AsideList>
                    <Divider />
                    <div className="aside__log-off">
                        <Button
                            link
                            outlined
                            raised
                            icon="pi pi-sign-out"
                            label="Cerrar Sesión"
                            severity="warning"
                            onClick={() => window.open("/", "_self")}
                        />
                    </div>
                    <section className="aside__user">
                        <section className="aside__user-info">
                            <Avatar
                                image="/logo.jpg"
                                shape="circle"
                                size="large"
                            />
                            <b>Francisco Jarma</b>
                        </section>
                    </section>
                </Sidebar>
                <Button
                    text
                    icon={PrimeIcons.BARS}
                    severity="contrast"
                    onClick={() => setVisible(true)}
                />
            </div>
        </aside>
    );
};
