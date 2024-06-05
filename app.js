const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/employee', employeeRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'views')));

// Rute untuk menampilkan halaman karyawan
app.get('/employees', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'employees.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
