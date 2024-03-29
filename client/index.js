const express = require("express");
const app = express();
const port = 8009;
const path = require("path");
app.use(express.static('public'));
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET MIDDLEWARE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.use(express.urlencoded({ extended: true }));

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET FOR JS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.get("/js/callservice.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/callservice.js"));
});


app.get("/js/productdetail.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/productdetail.js"));
});


app.get("/js/editAd.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/editAd.js"));
});


app.get("/js/ProductUserview.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/ProductUserview.js"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET FOR ROOT(HOME) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/user/Page_info/home.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SET FOR ADMIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.get("/addadmin", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/addAdmin.html"));
});

app.get("/adminManagement", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/adminManagement.html"));
});

app.get("/updateAdmin", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/updateAdmin.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR ADMIN INSERT UPDATE SELECT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.post('/service/adminManagement', (req, res) => {
  const requestData = req.body;  
  console.log('Received data:', requestData); 
  res.status(200).json({ message: 'Request received successfully', data: requestData });  
});

app.post('/service/addAdmin', (req, res) => {
  const adminData = req.body.admin_info;
  res.status(200).json({ error: false, data: adminData, message: 'New admin has been added successfully.' });
});

app.put('/service/updateAdmin', (req, res) => {
  const requestData = req.body;  
  console.log('Received data:', requestData); 
  res.status(200).json({ message: 'Request received successfully', data: requestData });  
});

app.delete('/service/deleteAdmin', (req, res) => {
    const requestData = req.body;  
    console.log('Received data:', requestData);
    res.status(200).json({ message: 'Admin deleted successfully', data: requestData});
});





// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR PRODUCT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/add_product_page.html"));
});

app.get("/edit-product", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/edit_product.html"));
});

app.get("/search-edit", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/search_edit.html"));
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR PRODUCT INSERT UPDATE SELECT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.post('/service/add-product', (req, res) => {
  const requestData = req.body;  
  console.log('Received data:', requestData);  
  res.status(200).json({ message: 'Request received successfully', data: requestData }); 
});

app.post('/service/edit-product', (req, res) => {
  const requestData = req.body; 
  console.log('Received data:', requestData);  
  res.status(200).json({ message: 'Request received successfully', data: requestData }); 
});

app.put('/service/search-edit', (req, res) => {
  const requestData = req.body; 
  console.log('Received data:', requestData);  
  res.status(200).json({ message: 'Request received successfully', data: requestData }); 
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR USER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.get("/about-us", function (req, res) {
  res.sendFile(path.join(__dirname, "/routing/views/user/Page_info/about_us_page.html"));
});

app.get("/search", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/user/Page_info/search_page.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/routing/views/user/Page_info/login_page.html"));
});

app.get("/proDetail", function (req, res) {
  res.sendFile(path.join(__dirname, "/routing/views/user/Product_detail/proDetail.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.get("/service/login-Admin", function (req, res) {
  console.log('Received GET request for login-Admin');
  res.status(200).json({ message: 'GET Request received successfully for login-Admin' });
});

app.post('/service/addAdminlogin', (req, res) => {
  const loginData = req.body; 
  console.log('Received POST request for addAdminlogin. Login data:', loginData);
  res.status(200).json({ error: false, data: loginData, message: 'Login information has been added successfully.' });
});

app.put('/service/updateloginAdmin', (req, res) => {
  const loginData = req.body; 
  console.log('Received PUT request for updateloginAdmin. Login data:', loginData);
  res.status(200).json({ message: 'PUT Request received successfully for updateloginAdmin', data: loginData });
});



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR ERROR PATH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname + "/routing/views/Invalid/error.html"));
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR Server 8009 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.listen(port, function () {
  console.log(`Server listening at Port ${port}`);
});
