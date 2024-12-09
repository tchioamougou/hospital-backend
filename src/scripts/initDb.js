const db = require('../config/db');

// Create Tables
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Patients (
            id_patient INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            date_naissance DATE,
            adresse TEXT,
            telephone TEXT
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Personnel (
            id_personnel INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            role TEXT NOT NULL,
            id_service INTEGER
        );
    `);

    console.log('Database initialized.');
    db.close();
});
