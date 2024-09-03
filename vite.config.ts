import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@adapters": path.resolve(__dirname, "src/adapters"),
            "@api": path.resolve(__dirname, "src/api"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@config": path.resolve(__dirname, "src/config"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@interfaces": path.resolve(__dirname, "src/interfaces"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@services": path.resolve(__dirname, "src/services"),
            "@types": path.resolve(__dirname, "src/types"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
