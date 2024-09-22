const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());
const db1 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "farmify_login"
})
const db2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "farmer_price"
})
db1.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});
db2.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});
app.post('/register/farmer', (req, res) => {
    const sql = "INSERT INTO farmer_credential(name, mobile, farmer_code, password) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.farmerName,
        req.body.farmerPhone,
        req.body.farmerId,
        req.body.farmerPassword
    ];
    db1.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
})
app.get('/vegetables', (req, res) => {
    const sql = `
        SELECT AVG(Brinjal) AS avg_brinjal,
               AVG(Bitter_gourd) AS avg_bitter_gourd,
               AVG(Beans) AS avg_beans,
               AVG(Cauliflower) AS avg_cauliflower,
               AVG(Cabbage) AS avg_cabbage,
               AVG(Capsicum) AS avg_capsicum,
               AVG(Drumstick) AS avg_drumstick,
               AVG(Bottle_gourd) AS avg_bottle_gourd,
               AVG(Carrot) AS avg_carrot,
               AVG(Garlic) AS avg_garlic,
               AVG(Ginger) AS avg_ginger,
               AVG(Ladies_Finger) AS avg_ladies_finger,
               AVG(Onion) AS avg_onion,
               AVG(Peas) AS avg_peas,
               AVG(Potato) AS avg_potato,
               AVG(Pumpkin) AS avg_pumpkin,
               AVG(Radish) AS avg_radish,
               AVG(Red_chillies) AS avg_red_chillies,
               AVG(Small_Onion) AS avg_small_onion,
               AVG(Coriander) AS avg_coriander,
               AVG(Sweet_potato) AS avg_sweet_potato,
               AVG(Tomato) AS avg_tomato,
               AVG(Spinach) AS avg_spinach
        FROM vegetable;
    `;

    db2.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Error fetching data" });
        }
        return res.json(data);
    });
});

app.post('/store', (req, res) => {
    const sql = "INSERT INTO vegetable(??) VALUES (?)";
    const values = [
        req.body.vegetable,
        req.body.Price
    ]
    db2.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
})
app.post('/register/user', (req, res) => {
    const sql = "INSERT INTO user_credential(name, mobile, email, password) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.userName,
        req.body.userPhone,
        req.body.userEmail,
        req.body.userPassword
    ];
    db1.query(sql, values, (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.json(data);
    });
})
app.post('/login/farmer', (req, res) => {
    const sql = "SELECT * FROM farmer_credential WHERE farmer_code = ? AND password = ?";
    db1.query(sql, [req.body.farmerId, req.body.farmerPassword], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

app.post('/login/user', (req, res) => {
    const sql = "SELECT * FROM user_credential WHERE email = ? AND password = ?";
    db1.query(sql, [req.body.userEmail, req.body.userPassword], (err, data) => {
        console.log(req.body.userEmail);
        if (err) {
            console.error(err);
            return res.json("error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});
app.listen(8001, () => {
    console.log("server started")
})