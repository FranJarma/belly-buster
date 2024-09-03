import {AppRoutes} from "@routes/AppRoutes";
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import {addLocaleToApp} from "@utils/primereact.utilities";

function App() {
    addLocaleToApp();
    return (
        <PrimeReactProvider>
            <AppRoutes />
        </PrimeReactProvider>
    );
}

export default App;
