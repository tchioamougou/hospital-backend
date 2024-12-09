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
    // Create Departments Table
    db.run(`
        CREATE TABLE IF NOT EXISTS Departments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            Description TEXT,
            department_head INTEGER,
            FOREIGN KEY (department_head) REFERENCES Personnel(id)
        );
    `, (err) => {
        if (err) {
            console.error('Error creating Departments table:', err.message);
        } else {
            console.log('Departments table created successfully.');
        }
    });

    // Create Services Table
    db.run(`
        CREATE TABLE IF NOT EXISTS Services (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            department_id INTEGER NOT NULL,
            service_head INTEGER,
            FOREIGN KEY (department_id) REFERENCES Departments(id),
            FOREIGN KEY (service_head) REFERENCES Personnel(id)
        );
    `, (err) => {
        if (err) {
            console.error('Error creating Services table:', err.message);
        } else {
            console.log('Services table created successfully.');
        }
    });
    console.log('Database initialized.');
    db.close();
});
