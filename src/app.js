const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const serviceRoutes = require('./routes/serviceRoutes');



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Hospital Backend</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 2em;
                    line-height: 1.6;
                    background-color: #f4f4f9;
                    color: #333;
                }
                h1 {
                    color: #007bff;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to the Hospital Management API</h1>
            <p>This backend provides a RESTful API for managing hospital operations.</p>
            <ul>
                <li><a href="/api/patients">Patients API</a></li>
                <li>More endpoints will be added as the project grows!</li>
            </ul>
            <footer>
                <p>Powered by Node.js & SQLite</p>
            </footer>
        </body>
        </html>
    `);
});
app.use('/api/patients', patientRoutes); // Route pour les patients
app.use('/api/departments', departmentRoutes);
app.use('/api/services', serviceRoutes);
module.exports = app;
