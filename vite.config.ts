import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
            {
                find: "@assets",
                replacement: path.resolve(__dirname, "src/assets"),
            },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "src/components"),
            },
            {
                find: "@hooks",
                replacement: path.resolve(__dirname, "src/hooks"),
            },
            {
                find: "@pages",
                replacement: path.resolve(__dirname, "src/pages"),
            },
        ],
    },
});
