import "@material-design-icons/font/outlined.css";
import "./tailwind.css";
import "./theme/theme.css";

import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app"),
});

export default app;
