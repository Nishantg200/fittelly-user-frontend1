import { url } from "inspector";

export const environment = {
    // production: false,
    // apiUrl: 'http://localhost:3000' // Replace with your local backend URL
    url: process.env['NG_APP_BASE_URL']
};