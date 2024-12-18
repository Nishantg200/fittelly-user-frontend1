// export const environment = {
//     production: false,
//     apiUrl: 'http://localhost:3000' // Replace with your local backend URL
// };
export const environment = {
    // production: true,
    // apiUrl: 'https://api.fittelly.com' // Replace with your production backend URL
    url: process.env['NG_APP_BASE_URL']
};