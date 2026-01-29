import { defineConfig } from "vite";

export default defineConfig({

    server:{
        port: 8081,
        open: true,
        proxy:{
            '/api/test':{
                target: "http://localhost:5050/",
                changeOrigin: true,
            },
            '/upload/single':{
                target: "http://localhost:5050/",
                changeOrigin: true
            },
            '/download/single':{
                target: "http://localhost:5050/",
                changeOrigin: true
            },
            '/scan':{
                target: "http://localhost:5050/",
                changeOrigin: true
            },
            '/scan_folder':{
                target: "http://localhost:5050",
                changeOrigin: true
            },
            '/link_download':{
                target: "http://localhost:5050/",
                changeOrigin: true
            },
            '/check_folder':{
                target: "http://localhost:5050/",
                changeOrigin: true
            },
            '/create_folder':{
                target: "http://localhost:5050/",
                changeOrigin: true
            }
        }
    }
})