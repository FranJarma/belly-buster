import {addLocale, locale} from "primereact/api";

export const addLocaleToApp = () => {
    // Configura el idioma español, por ejemplo
    addLocale("es", {
        firstDayOfWeek: 1,
        dayNames: [
            "domingo",
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado",
        ],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ],
        monthNamesShort: [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic",
        ],
        today: "Hoy",
        clear: "Limpiar",
        dateFormat: "dd/mm/yy",
        weekHeader: "Sm",
    });

    locale("es");
};
