/********************************************************************************
* WEB322 – Assignment 03
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
*
* Name: Saurab Khadka Student ID: 148501224 Date: 2024/10/11
*
* Published URL: https://assignment3final-3uu6cjmh7-saurab-khadkas-projects.vercel.app/
*
********************************************************************************/
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public/image')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

