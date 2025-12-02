import { defineConfig } from "vite";

export default defineConfig({

    server:{
        port: 8081,
        open: true,
        proxy:{
            '/api/test':{
                target: "http://localhost:5050/",
                changeOrigin: true,
            }
        }
    }
})