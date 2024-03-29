
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET FOR SERVICE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const express = require('express');
const router = express.Router(); // Create a router
cors = require("cors");

router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ IMPORT USE ENV ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const dotenv = require("dotenv");
dotenv.config();



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET Cross-Origin ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

router.use(cors());

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR Connection to MySQL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.DB_user,
    password: process.env.DB_pass,
    database: process.env.DB_name,
});


// Connect to DataBase
connection.connect(function(err) {
    if(err) throw err;
    console.log(`Connected DataBase: ${process.env.DB_name}`);
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR PRODUCT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// insert
router.post('/addProduct', function(req, res) {

    console.log("Add Product...")
    let product = req.body.product;
    console.log(product);

    if(!product) {
        return res.status(400).send({error: true, message: 'Please provide product information'});
    }

    connection.query("insert into product set ? ", product, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New product has been added successfully.'});
    });
});

// update
router.put('/updateProduct', function(req, res) {
    console.log("update product...")

    let product_id = req.body.product.p_ID;
    let product = req.body.product;
    console.log(product)

    if (!product_id || !product) {
        return res.status(400).send({ error: product, message: "Please provide product information"});
    }

    connection.query("update product SET ? where p_ID = ?", [product, product_id], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: "product has been update successfully."})
    })
})

// delete
router.delete('/deleteProduct', function(req, res) {

    console.log("delete product...")

    let p_ID = req.body.p_ID;

    console.log(p_ID)

    if (!p_ID) {
        return res.status(400).send({ error: true, message: "Please provide Product ID"});
    }

    connection.query("delete from product where p_ID = ?", [p_ID], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: "Product ID has been deleteed successfully."})
    })
})

// select with keyword (p_name,plastname,p_shortDes)
router.get('/product/:keyword', function(req, res) {

    console.log("select Admin ID ...")

    let keyword = req.params.keyword;

    console.log(keyword)


    if (!keyword) {
        return res.status(400).send({ error: true, message: "Please provide Product ID"});
    }

    connection.query("select * from product where p_name like ? or p_cate like ? or p_shortDes like ?", ['%' + keyword + '%', '%' + keyword + '%', '%' + keyword + '%'], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results, message: "product retrieved"})
    })
})

// select 
router.get('/productDE/:keyword', function(req, res) {
    console.log("select Admin ID ...")
    let keyword = req.params.keyword;
    console.log(keyword)
    if (!keyword) {
        return res.status(400).send({ error: true, message: "Please provide Admin ID"});
    }
    connection.query("SELECT * FROM product WHERE p_ID LIKE ?", [`%${keyword}%`], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: "Admin retrieved" });
    });
})

// select all
router.get('/products', function(req, res) {

    console.log("select all product...")

    connection.query("select * from product ", function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results, message: "product list"})
    })
})


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR ADMIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// insert
router.post('/addAdmin', function(req, res) {

    console.log("Add Admin...")
    let admin_info = req.body.admin_info;
    console.log(admin_info);

    if(!admin_info) {
        return res.status(400).send({error: true, message: 'Please provide admin information'});
    }

    connection.query("insert into admin_info set ? ", admin_info, function (error, results) {
        if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New admin has been added successfully.'});
    });
});

//update
router.put('/updateAdmin', function(req, res) {
    console.log("update Admin...")

    // ตรวจสอบว่า req.body.admin_info ไม่ใช่ null และไม่ใช่ undefined
    if (!req.body.admin_info) {
        return res.status(400).send({ error: true, message: "Please provide Admin information" });
    }

    // ถ้า admin_info มีค่า ก็ดึงค่า A_ID และ admin_info ออกมา
    let admin_id = req.body.admin_info.A_ID;
    let admin_info = req.body.admin_info;
    console.log("Received data:", { admin_id, admin_info });

    if (!admin_id) {
        return res.status(400).send({ error: true, message: "Invalid or missing admin_info.A_ID" });
    }

    connection.query("update admin_info SET ? where A_ID = ?", [admin_info, admin_id], function (error, results) {
        if (error) {
            console.error("Error updating admin:", error);
            return res.status(500).send({ error: true, data: null, message: "Internal Server Error" });
        }

        return res.send({ error: false, data: results.affectedRows, message: "Admin has been updated successfully." });
    });
});



// delete
router.delete('/deleteAdmin', function(req, res) {

    console.log("delete Admin...")

    let admin_id = req.body.A_ID;

    console.log(admin_id)

    if (!admin_id) {
        return res.status(400).send({ error: true, message: "Please provide Admin ID"});
    }

    connection.query("delete from admin_info where A_ID = ?", [admin_id], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: "Admin ID has been deleted successfully."})
    })
})


// select
router.get('/Admin/:keyword', function(req, res) {

    console.log("select Admin ID ...")

    let keyword = req.params.keyword;

    console.log(keyword)


    if (!keyword) {
        return res.status(400).send({ error: true, message: "Please provide Admin ID"});
    }

    connection.query("select * from admin_info where A_Firstname like ? or A_Lastname like ? or A_ID like ?", ['%' + keyword + '%', '%' + keyword + '%', '%' + keyword + '%'], function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results, message: "Admin retrieved"})
    })
})

// select all
router.get('/Admins', function(req, res) {

    console.log("select all Admin...")

    connection.query("select * from admin_info ", function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results, message: "Admin list"})
    })
})


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// API endpoint สำหรับตรวจสอบการล็อกอิน


router.post("/login", function (req, res) {
    let email = req.body.A_email;
    let password = req.body.A_pass;

    const query = 'SELECT * FROM admin_info WHERE A_email = ? AND A_pass = ?';
    connection.query(query, [email, password], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.length > 0) {
            // Authentication successful
            return res.json({ message: 'Authentication successful' });
        } else {
            // Authentication failed
            return res.status(401).json({ error: 'Authentication failed' });
        }
    });
});


// select all
router.get('/login-Admin', function(req, res) {

    console.log("select all Admin...")

    connection.query("select * from login ", function (error, results){
        if (error) throw error;
        return res.send({ error: false, data: results, message: "loginAdmin list"})
    })
})

// UPDATE
router.put('/updateloginAdmin', function(req, res) {
    console.log("update loginAdmin...");
    // ตรวจสอบว่า req.body.login ไม่ใช่ null และไม่ใช่ undefined
    if (!req.body.login) {
        return res.status(400).send({ error: true, message: "Please provide login information" });
    }
    // ถ้า login_info มีค่า ก็ดึงค่า A_email และ login_info ออกมา
    let login_email = req.body.login.u_email;
    let login_info = req.body.login;
    console.log("Received data:", { login_email, login_info });

    if (!login_email) {
        return res.status(400).send({ error: true, message: "Invalid or missing login_info.u_email" });
    }

    connection.query("update login SET ? where u_email = ?", [login_info, login_email], function (error, results) {
        if (error) {
            console.error("Error updating login:", error);
            return res.status(500).send({ error: true, data: null, message: "Internal Server Error" });
        }

        return res.send({ error: false, data: results.affectedRows, message: "Login has been updated successfully." });
    });
});

// ADD
router.post('/addAdminlogin', function(req, res) {
    console.log("Add Adminlogin...")
    let login = req.body.login;
    console.log(login);
  
    if(!login) {
      return res.status(400).send({error: true, message: 'Please provide adminlogin information'});
    }
    connection.query("INSERT INTO login SET ? ", login, function (error, results) {
      if (error) throw error;
      return res.send({error: false, data: results.affectedRows, message: 'New adminlogin has been added successfully.'});
    });
  });  


module.exports = router;

