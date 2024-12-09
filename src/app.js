const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/patients', patientRoutes); // Route pour les patients

module.exports = app;
