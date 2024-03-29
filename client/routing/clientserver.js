// ********************************** ไว้ประกาศ path ***********************
var express = require("express"),
  router = express.Router(),
  path = require("path");

// ใช้ middleware สำหรับการ parse ข้อมูลจาก form ที่ส่งมา
router.use(
  express.urlencoded({
    extended: true,
  })
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Add js to Node.js Server ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// PATH FOR JavaScript
router.get("/js/callservice.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/callservice.js"));
});
router.get("/js/productdetail.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/productdetail.js"));
});
router.get("/js/editAd.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/editAd.js"));
});
router.get("/js/ProductUserview.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/js/ProductUserview.js"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━ PATH FOR ROOT(HOME)  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/user/Page_info/home.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━ PATH FOR ADMIN  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
router.get("/addadmin", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/addAdmin.html"));
});

router.get("/adminManagement", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/adminManagement.html"));
});

router.get("/updateAdmin", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_admin/updateAdmin.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━ PATH FOR PRODUCT  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
router.get("/add-product", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/add_product_page.html"));
});

router.get("/edit-product", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/edit_product.html"));
});

router.get("/search-edit", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/admin/Edit_product/search_edit.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━ PATH FOR USER  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
router.get("/about-us", function (req, res) {
  res.sendFile(path.join(__dirname + "/routing/views/user/Page_info/about_us_page.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "routing/views/user/Page_info/login_page.html"));
});

router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "/routing/views/user/Page_info/home.html"));
});

router.get("/search", function (req, res) {
  res.sendFile(path.join(__dirname + "routing/views/user/Page_info/search_page.html"));
});

router.get("/proDetail", function (req, res) {
  res.sendFile(path.join(__dirname, "/routing/views/user/Product_detail/proDetail.html"));
});

// ━━━━━━━━━━━━━━━━━━━━━━━ FOR ERROR PATH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname + "/routing/views/Invalid/error.html"));
});

module.exports = router;
