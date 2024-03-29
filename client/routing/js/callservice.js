
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ VARIABLE Admin&Product ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let A_IDTxtRef, A_titleTxtRef, A_FirstnameTxtRef, A_LastnameTxtRef, A_emailTxtRef, A_passTxtRef, A_pnumTxtRef;
let p_IDTxtRef, p_nameTxtRef, p_priceTxtRef, p_quantityTxtRef, p_cateTxtRef, p_shortDesTxtRef, p_longDesTxtRef, p_imageTxtRef;

  // ━━━━━━━━━━━━━━━━━━━━━━━ ADMIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  document.addEventListener('DOMContentLoaded', () => {
  // การอ้างถึง element ที่เกี่ยวข้องกับข้อมูล Admin
  A_IDTxtRef = document.querySelector("#txtEmp");
  A_titleTxtRef = document.querySelector("#txtTitle");
  A_FirstnameTxtRef = document.querySelector("#txtFN");
  A_LastnameTxtRef = document.querySelector("#txtLN");
  A_emailTxtRef = document.querySelector("#ID_Em");
  A_passTxtRef = document.querySelector("#txtpass");
  A_pnumTxtRef = document.querySelector("#ID_tel");

  let insertBtnRef = document.querySelector("#insert");
  let selectallBtnRef = document.querySelector("#searchall");
  let updateBtnRef = document.querySelector("#update");
  let deleteBtnRef = document.querySelector("#delete");

  // ━━━━━━━━━━━━━━━━━━━━━━━ LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // การอ้างถึง element ที่เกี่ยวข้องกับหน้า Login
  let loginBtnRef = document.querySelector('#loginADD');
  let searchBtnRef = document.querySelector('#searchBT');

  // ━━━━━━━━━━━━━━━━━━━━━━━ PRODUCT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // การอ้างถึง element ที่เกี่ยวข้องกับข้อมูลสินค้า
  p_IDTxtRef = document.querySelector("#pID");
  p_nameTxtRef = document.querySelector("#pname");
  p_priceTxtRef = document.querySelector("#price");
  p_quantityTxtRef = document.querySelector("#pQuantity");
  p_cateTxtRef = document.querySelector("#cate");
  p_shortDesTxtRef = document.querySelector("#sdes");
  p_longDesTxtRef = document.querySelector("#des");
  p_imageTxtRef = document.querySelector("#url");

  let insert_product = document.querySelector("#insertProduct");
  let selectAll_product = document.querySelector("#selectAllProduct");
  let UserSelectProduct = document.querySelector("#userselectProduct");
  let update_product = document.querySelector("#updateProduct");
  let delete_product = document.querySelector("#deleteProduct");

  // ━━━━━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  // ━━━━━━━━━━━━━━ FOR PRODUCT ━━━━━━━━━━━━━━

  // ดึงข้อมูลสินค้าสำหรับ Admin
  if (selectAll_product) {
    selectAll_product.addEventListener("click", fetchDataAndDisplayProduct);
  }

  // ดึงข้อมูลสินค้าสำหรับ User
  if (UserSelectProduct) {
    UserSelectProduct.addEventListener("click", fetchDataAndDisplayProductUser);
  }

  // เพิ่มสินค้า
  if (insert_product) {
    insert_product.addEventListener("click", addProduct);
  }

  // อัปเดตสินค้า
  if (update_product) {
    update_product.addEventListener("click", updateProduct);
  }

  // ลบสินค้า
  if (delete_product) {
    delete_product.addEventListener("click", deleteProduct);
  }

  // ━━━━━━━━━━━━━━ FOR LOGIN ━━━━━━━━━━━━━━

  // ล็อกอิน
  if (loginBtnRef) {
    loginBtnRef.addEventListener("click", login);
  }

  // ━━━━━━━━━━━━━━ FOR Admin ━━━━━━━━━━━━━━

  // ดึงข้อมูล Admin
  if (selectallBtnRef) {
    selectallBtnRef.addEventListener("click", fetchDataAndDisplayAdmin);
  }

  // เพิ่ม Admin
  if (insertBtnRef) {
    insertBtnRef.addEventListener("click", addAdmin);
  }

  // อัปเดต Admin
  if (updateBtnRef) {
    updateBtnRef.addEventListener("click", updateAdmin);
  }

  // ลบ Admin
  if (deleteBtnRef) {
    deleteBtnRef.addEventListener("click", deleteAdmin);
  }});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FUNCTION END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // การอ้างถึง element ที่เกี่ยวข้องกับหน้า Login
  let loginBtnRef = document.querySelector('#loginADD');
  let searchBtnRef = document.querySelector('#searchBT');

  // ━━━━━━━━━━━━━━━━━━━━━━━ PRODUCT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // การอ้างถึง element ที่เกี่ยวข้องกับข้อมูลสินค้า
  p_IDTxtRef = document.querySelector("#pID");
  p_nameTxtRef = document.querySelector("#pname");
  p_priceTxtRef = document.querySelector("#price");
  p_quantityTxtRef = document.querySelector("#pQuantity");
  p_cateTxtRef = document.querySelector("#cate");
  p_shortDesTxtRef = document.querySelector("#sdes");
  p_longDesTxtRef = document.querySelector("#des");
  p_imageTxtRef = document.querySelector("#url");

  let insert_product = document.querySelector("#insertProduct");
  let selectAll_product = document.querySelector("#selectAllProduct");
  let UserSelectProduct = document.querySelector("#userselectProduct");
  let update_product = document.querySelector("#updateProduct");
  let delete_product = document.querySelector("#deleteProduct");

  // ━━━━━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  // ━━━━━━━━━━━━━━ FOR PRODUCT ━━━━━━━━━━━━━━

  // ดึงข้อมูลสินค้าสำหรับ Admin
  if (selectAll_product) {
    selectAll_product.addEventListener("click", fetchDataAndDisplayProduct);
  }

  // ดึงข้อมูลสินค้าสำหรับ User
  if (UserSelectProduct) {
    UserSelectProduct.addEventListener("click", fetchDataAndDisplayProductUser);
  }

  // เพิ่มสินค้า
  if (insert_product) {
    insert_product.addEventListener("click", addProduct);
  }

  // อัปเดตสินค้า
  if (update_product) {
    update_product.addEventListener("click", updateProduct);
  }

  // ลบสินค้า
  if (delete_product) {
    delete_product.addEventListener("click", deleteProduct);
  }

  // ━━━━━━━━━━━━━━ FOR LOGIN ━━━━━━━━━━━━━━

  // ล็อกอิน
  if (loginBtnRef) {
    loginBtnRef.addEventListener("click", login);
  }

  // ━━━━━━━━━━━━━━ FOR Admin ━━━━━━━━━━━━━━

  // ดึงข้อมูล Admin
  if (selectallBtnRef) {
    selectallBtnRef.addEventListener("click", fetchDataAndDisplayAdmin);
  }

  // เพิ่ม Admin
  if (insertBtnRef) {
    insertBtnRef.addEventListener("click", addAdmin);
  }

  // อัปเดต Admin
  if (updateBtnRef) {
    updateBtnRef.addEventListener("click", updateAdmin);
  }

  // ลบ Admin
  if (deleteBtnRef) {
    deleteBtnRef.addEventListener("click", deleteAdmin);
  }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FUNCTION END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

async function login() {
  // ดึงค่า email และ password จาก input
  const email = document.getElementById('email').value;
  const password = document.getElementById('passwd').value;
  // สร้าง object สำหรับข้อมูล login
  let loginData = {
    A_email: email,
    A_pass: password,
  };

  try {
    // เรียก API เพื่อทำการ login
    const response = await fetch("http://localhost:8010/service/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) { // ตรวจสอบว่าการล็อกอินเสร็จสมบูรณ์หรือไม่
      const data = await response.json();

      // ตรวจสอบว่ามีข้อมูลที่ถูกต้องหรือไม่
      if (data && Object.keys(data).length > 0) {
        // สร้าง object สำหรับข้อมูลเวลา login
        const logintime = {
          u_email: email,
          // สร้าง u_timeLogin ในโซนเวลา UTC เวลาช้า 7 ชั่วโมง
          u_timeLogin: new Date().toISOString().slice(0, 19).replace("T", " "),
        };

        // ตรวจสอบว่า email มีในตาราง login หรือไม่
        const checkEmailResponse = await fetch("http://localhost:8010/service/login-Admin", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (checkEmailResponse.ok) { // ตรวจสอบ Email ทำการอัปเดตเวลา Login ในกรณีที่มีอยู่แล้ว.
          const checkEmailData = await checkEmailResponse.json();

          // ทำการอัปเดตเวลาในกรณีที่ email มีอยู่แล้ว
          if (checkEmailData.exists) {
            const updateLoginResponse = await fetch("http://localhost:8010/service/updateloginAdmin", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ login: logintime }),
            });

            // Check if the request to update login time was successful
            if (updateLoginResponse.ok) {
              window.alert('Login Successful! You have successfully logged in.');
              window.location.href = '/adminManagement';
            } else {
              // แสดงข้อความเมื่อไม่สามารถทำการอัปเดตหรือเพิ่ม Login Record ได้
              console.error("HTTP error! Status:", updateLoginResponse.status);
              window.alert('Error! An error occurred while logging in. Please try again.');
            }
          } else {
            // ทำการเพิ่มรายการ Login ในกรณีที่ Email ไม่มีอยู่
            const addLoginResponse = await fetch("http://localhost:8010/service/addAdminlogin", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ login: logintime }),
            });

            // Check if the request to add a new login record was successful
            if (addLoginResponse.ok) {
              window.alert('Login Successful! You have successfully logged in.');
              window.location.href = '/adminManagement';
            } else {
              // แสดงข้อความเมื่อไม่สามารถทำการอัปเดตหรือเพิ่ม Login Record ได้
              console.error("HTTP error! Status:", addLoginResponse.status);
              window.alert('Error! An error occurred while logging in. Please try again.');
            }
          }
        } else {
            // แสดงข้อความเมื่อไม่สามารถตรวจสอบ Email ได้
          console.error("HTTP error! Status:", checkEmailResponse.status);
          window.alert('Error! An error occurred while checking email. Please try again.');
        }
      } else {
        // Log an error if the login data is not valid
        console.error("HTTP error! Status:", response.status);
        window.alert('Login Failed! Please check your email and password.');
      }
    } else {
      // Log an error if the request to the login endpoint was not successful
      console.error("HTTP error! Status:", response.status);
      window.alert('Login Failed! Please check your email and password.');
    }
  } catch (error) {
    // แสดงข้อความเมื่อเกิดข้อผิดพลาด
    console.error("Error logging in:", error);
    window.alert('Error! An error occurred while logging in. Please try again.');
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ LOGIN END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ADMIN END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// -------------------------------------- INSERT ADMIN --------------------------------------
async function addAdmin() {
  // ดึงข้อมูลจากฟอร์ม
  A_ID = A_IDTxtRef.value;
  A_title = A_titleTxtRef.value;
  A_Firstname = A_FirstnameTxtRef.value;
  A_Lastname = A_LastnameTxtRef.value;
  A_email = A_emailTxtRef.value;
  A_pass = A_passTxtRef.value;
  A_pnum = A_pnumTxtRef.value;

  // สร้าง object สำหรับข้อมูล admin
  let admin_data = {
    A_ID: A_ID,
    A_title: A_title,
    A_Firstname: A_Firstname,
    A_Lastname: A_Lastname,
    A_email: A_email,
    A_pass: A_pass,
    A_pnum: A_pnum,
  };

  try {
    // เรียก API เพื่อเพิ่มข้อมูล admin
    const response = await fetch("http://localhost:8010/service/addAdmin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin_info: admin_data }),
    });

    if (response.ok) {
      // รับข้อมูลที่ได้จากการเพิ่ม admin
      const data = await response.json();

      if (data && Object.keys(data).length > 0) {
        // แสดงแจ้งเตือนเมื่อเพิ่มข้อมูล admin สำเร็จ
        window.alert("Add admin data successfully");
      } else {
        console.error("No data or empty data received:", data);
      }
    } else {
      // แสดงข้อผิดพลาดเมื่อ HTTP request ไม่สำเร็จ
      console.error("HTTP error! Status:", response.status);
    }
  } catch (error) {
    // แสดงข้อผิดพลาดเมื่อมีข้อผิดพลาดในการเรียก API
    console.error("Error adding admin:", error);
  }
}

// -------------------------------------- INSERT ADMIN END -----------------------------------


// -------------------------------------- SELECT ADMIN ---------------------------------------
async function fetchDataAndDisplayAdmin() {
  try {
    // ดึงค่า keyword จาก input
    const keyword = document.getElementById('searchKeyword').value;
    // สร้าง URL โดยใช้ keyword หรือ URL ทั้งหมด ถ้าไม่มี keyword
    const url = keyword
      ? `http://localhost:8010/service/admin/${keyword}`
      : 'http://localhost:8010/service/admins';

    // เรียก API เพื่อดึงข้อมูล
    const response = await fetch(url);

    // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้จาก API
    const data = await response.json();
    
    // ตรวจสอบว่ามีข้อมูลและข้อมูลเป็น array หรือไม่
    if (data && data.data && Array.isArray(data.data)) {
      alert(data.message);

      let output = "<h1> </h1>";
      output += "<table class='table'>";
      output += "<thead>";
      output += "<tr>";
      output +=
        "<th scope='col'>Edit</th><th scope='col'>ID</th><th scope='col'>Title</th><th scope='col'>First name</th><th scope='col'>Last name</th><th scope='col'>email</th><th scope='col'>password</th><th scope='col'>mobile phone</th>";
      output += "</tr>";
      output += "</thead>";
      output += "<tbody>";

      // วนลูปเพื่อแสดงข้อมูลในตาราง
      data.data.forEach((element) => {
        // ตรวจสอบว่า A_ID, A_Firstname, หรือ A_Lastname มีส่วนท้ายที่คล้ายกับ keyword หรือไม่
        if (
          element.A_ID.toString().toLowerCase().includes(keyword.toLowerCase()) ||
          element.A_Firstname.toLowerCase().includes(keyword.toLowerCase()) ||
          element.A_Lastname.toLowerCase().includes(keyword.toLowerCase())
        ) {
          output += "<tr>";
          // สร้างลิงก์ไปยังหน้าแก้ไขด้วย ID ของแต่ละรายการ
          output += "<td>" + `<a href="/updateAdmin?id=${element.A_ID}" class="iconEditA"><i class="fa fa-edit"></i> </a>` + "</td>";
          output += "<td>" + element.A_ID + "</td>";
          output += "<td>" + element.A_title + "</td>";
          output += "<td>" + element.A_Firstname + "</td>";
          output += "<td>" + element.A_Lastname + "</td>";
          output += "<td>" + element.A_email + "</td>";
          output += "<td>" + element.A_pass + "</td>";
          output += "<td>" + element.A_pnum + "</td>";
          output += "</tr>";
        }
      });

      output += "</tbody>";
      output += "</table>"
      document.getElementById("output").innerHTML = output;
    } else {
      console.error("No data or empty data received:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// -------------------------------------- SELECT ADMIN END -------------------------------------

// -------------------------------------- UPDATE ADMIN -----------------------------------------
async function updateAdmin(event) {
  // ดึงค่า A_ID จาก input
  let A_ID = document.getElementById("txtEmp").value;

  // ตรวจสอบว่า A_ID ไม่ว่างเปล่าหรือไม่
  if (!A_ID) {
    console.error("A_ID is required for update.");
    return;
  }

  try {
    // เรียก API เพื่อดึงข้อมูล admin ปัจจุบันจาก A_ID
    const currentAdminResponse = await fetch(`http://localhost:8010/service/admins`);
    const currentAdminData = await currentAdminResponse.json();

    // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (!currentAdminResponse.ok) {
      throw new Error(`HTTP error! Status: ${currentAdminResponse.status}`);
    }

    // ดึงข้อมูลจากฟอร์ม, ถ้ามีการให้ค่า
    let A_title = document.getElementById("txtTitle").value;
    let A_Firstname = document.getElementById("txtFN").value;
    let A_Lastname = document.getElementById("txtLN").value;
    let A_email = document.getElementById("ID_Em").value;
    let A_pass = document.getElementById("txtpass").value;
    let A_pnum = document.getElementById("ID_tel").value;

    // อัพเดต admin_data เฉพาะค่าที่ไม่ใช่ว่างจากฟอร์ม
    let admin_data = {
      A_ID: A_ID,
      A_title: A_title || currentAdminData.A_title,
      A_Firstname: A_Firstname || currentAdminData.A_Firstname,
      A_Lastname: A_Lastname || currentAdminData.A_Lastname,
      A_email: A_email || currentAdminData.A_email,
      A_pass: A_pass || currentAdminData.A_pass,
      A_pnum: A_pnum || currentAdminData.A_pnum,
    };

    // ส่งข้อมูลที่อัพเดตไปที่เซิร์ฟเวอร์
    const response = await fetch("http://localhost:8010/service/updateAdmin", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin_info: admin_data }),
    });

    // ตรวจสอบว่าการส่งข้อมูลสำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้จากการส่งข้อมูล
    const data = await response.json();
    console.log(data);

    // แสดงแจ้งเตือนถ้ามีการอัพเดตข้อมูล
    if (data.data > 0) {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// -------------------------------------- UPDATE ADMIN END -------------------------------------

// -------------------------------------- DELETE ADMIN -----------------------------------------
async function deleteAdmin() {
  try {
    // ดึงค่า A_ID จาก input element หรือจากที่คุณเก็บค่าไว้
    let A_IDTxtRef = document.querySelector("#txtEmp");
    let A_ID = A_IDTxtRef.value;

    // เรียก API สำหรับลบ admin โดยใช้ A_ID
    const response = await fetch("http://localhost:8010/service/deleteAdmin", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ A_ID: A_ID }), // ส่ง A_ID ที่ต้องการลบ
    });

    // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้จากการลบ
    const data = await response.json();
    console.log(data);

    // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
    if (data.error) {
      console.error("Error:", data.message);
    } else {
      // แสดง popup แจ้งเตือนเมื่อลบข้อมูลสำเร็จ
      window.alert("Admin deleted successfully");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// -------------------------------------- DELETE ADMIN END -------------------------------------


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ADMIN END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PRODUCT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// -------------------------------------- INSERT PRODUCT ----------------------------------------

async function addProduct() {
   // ดึงค่าจาก input elements หรือจากที่เก็บค่าไว้
  p_id = p_IDTxtRef.value;
  p_Name = p_nameTxtRef.value;
  p_Quantity = p_quantityTxtRef.value;
  p_Price = p_priceTxtRef.value;
  p_Cate = p_cateTxtRef.value;
  p_ShortDes = p_shortDesTxtRef.value;
  p_LongDes = p_longDesTxtRef.value;
  p_Iamge = p_imageTxtRef.value;
 // สร้าง object สำหรับข้อมูลสินค้า
  let product_data = {
    p_ID: p_id,
    p_name: p_Name,
    p_quantity: p_Quantity,
    p_price: p_Price,
    p_cate: p_Cate,
    p_shortDes: p_ShortDes,
    p_longDes: p_LongDes,
    p_image: p_Iamge,
  };

  try {
     // เรียก API เพื่อทำการเพิ่มข้อมูลสินค้า
    const response = await fetch("http://localhost:8010/service/addProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product_data }),
    });
      // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (response.ok) {
      const data = await response.json();
           // ตรวจสอบข้อมูลที่ได้รับ
      if (data && Object.keys(data).length > 0) {
           // แสดงข้อความแจ้งเตือนเมื่อเพิ่มข้อมูลสำเร็จ
        window.alert("add data product successed");
      } else {
        console.error("No data or empty data received:", data);
      }
    } else {
      console.error("HTTP error! Status:", response.status);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
}
// -------------------------------------- INSERT PRODUCT END ------------------------------------


// -------------------------------------- SELECT PRODUCT FOR ADMIN ----------------------------------------

async function fetchDataAndDisplayProduct() {
  try {
    // ดึงค่า keyword จาก input element
    const keyword = document.getElementById('searchKeyword').value;
    
    // กำหนด URL สำหรับการดึงข้อมูลสินค้า
    const url = keyword
      ? `http://localhost:8010/service/product/${keyword}`
      : 'http://localhost:8010/service/products';

    // เรียก API เพื่อดึงข้อมูลสินค้า
    const response = await fetch(url);

    // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้รับจาก API
    const data = await response.json();

    // ตรวจสอบข้อมูลที่ได้รับ
    if (data && data.data && Array.isArray(data.data)) {
      // แสดงข้อความแจ้งเตือน
      alert(data.message);

      // สร้างตัวแปรสำหรับเก็บ HTML ที่จะแสดงผล
      let outputProduct = "";

      // วนลูปเพื่อสร้าง HTML สำหรับแต่ละสินค้า
      data.data.forEach((element) => {
        // เพิ่มเงื่อนไขตรวจสอบว่า p_name, p_cate, หรือ p_shortDes มีส่วนท้ายที่คล้ายกับ keyword หรือไม่
        if (
          element.p_name.toLowerCase().includes(keyword.toLowerCase()) ||
          element.p_cate.toLowerCase().includes(keyword.toLowerCase()) ||
          element.p_shortDes.toLowerCase().includes(keyword.toLowerCase())
        ) {
          // สร้าง HTML สำหรับแสดงข้อมูลสินค้า
          outputProduct += `<div class="item-products">
            <a href="#${element.p_name}"><img src="https://lh5.googleusercontent.com/d/${element.p_image}" alt=""></a>
            
            <div class="product-name" id="productName"> ${element.p_name} <a href="/edit-product?id=${element.p_ID}" id="EditPr"><i class="fa fa-edit"></i></a></div>

            <div class="product-detail"> ${element.p_shortDes} </div>

            <div class="product-price"> ${element.p_price} ฿ </div> 
            </div>`;
        }
      });

      // แสดง HTML ที่สร้างไว้ใน element ที่มี id="outputProduct"
      document.getElementById("outputProduct").innerHTML = outputProduct;
    } else {
      console.error("No data or empty data received:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  } 
}
// -------------------------------------- SELECT PRODUCT FOR ADMIN END ------------------------------------


// -------------------------------------- SELECT PRODUCT FOR USER ----------------------------------------

async function fetchDataAndDisplayProductUser() {
  try {
    // ดึงค่า keyword จาก input element
    const keyword = document.getElementById('searchKeyword').value;
    
    // กำหนด URL สำหรับการดึงข้อมูลสินค้า
    const url = keyword
      ? `http://localhost:8010/service/product/${keyword}`
      : 'http://localhost:8010/service/products';

    // เรียก API เพื่อดึงข้อมูลสินค้า
    const response = await fetch(url);

    // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้รับจาก API
    const data = await response.json();

    // ตรวจสอบข้อมูลที่ได้รับ
    if (data && data.data && Array.isArray(data.data)) {
      // แสดงข้อความแจ้งเตือน
      alert(data.message);

      // สร้างตัวแปรสำหรับเก็บ HTML ที่จะแสดงผล
      let outputProduct = "";

      // วนลูปเพื่อสร้าง HTML สำหรับแต่ละสินค้า
      data.data.forEach((element) => {
        // เพิ่มเงื่อนไขตรวจสอบว่า p_name, p_cate, หรือ p_shortDes มีส่วนท้ายที่คล้ายกับ keyword หรือไม่
        if (
          element.p_name.toLowerCase().includes(keyword.toLowerCase()) ||
          element.p_cate.toLowerCase().includes(keyword.toLowerCase()) ||
          element.p_shortDes.toLowerCase().includes(keyword.toLowerCase())
        ) {
          // สร้าง HTML สำหรับแสดงข้อมูลสินค้า (สำหรับผู้ใช้ทั่วไป)
          outputProduct += `<div class="item-products">
            <a href="/proDetail?id=${element.p_ID}"><img src="https://lh5.googleusercontent.com/d/${element.p_image}" alt=""></a>
            
            <div class="product-name" id="productName"> ${element.p_name} </div>

            <div class="product-detail"> ${element.p_shortDes} </div>

            <div class="product-price"> ${element.p_price} ฿ </div> 
            </div>`;
        }
      });

      // แสดง HTML ที่สร้างไว้ใน element ที่มี id="outputProductUser"
      document.getElementById("outputProductUser").innerHTML = outputProduct;

    } else {
      console.error("No data or empty data received:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// -------------------------------------- SELECT PRODUCT FOR USER END ------------------------------------

// -------------------------------------- UPDATE PRODUCT -------------------------------------------------
async function updateProduct(event) {
  try {
    // ดึงค่า p_id จาก input element
    let p_id = document.getElementById("pID").value;

    // ตรวจสอบว่า p_id มีค่าหรือไม่
    if (!p_id) {
      console.error("p_id is required for update.");
      return;
    }

    // Fetch current product data based on p_id
    const currentProductResponse = await fetch(`http://localhost:8010/service/products`);
    const currentProductData = await currentProductResponse.json();

    // ตรวจสอบว่าการดึงข้อมูลสินค้าปัจจุบันสำเร็จหรือไม่
    if (!currentProductResponse.ok) {
      throw new Error(`HTTP error! Status: ${currentProductResponse.status}`);
    }

    // Get other fields from the form, if they are provided
    let p_Name = document.getElementById("pname").value;
    let p_Price = document.getElementById("price").value;
    let p_Quantity = document.getElementById("pQuantity").value;
    let p_Cate = document.getElementById("cate").value;
    let p_ShortDes = document.getElementById("sdes").value;
    let p_LongDes = document.getElementById("des").value;
    let p_Iamge = document.getElementById("url").value;

    // Update product_data only with non-empty values from the form
    let product_data = {
      p_ID: p_id,
      p_name: p_Name || currentProductData.p_name,
      p_price: p_Price || currentProductData.p_price,
      p_quantity: p_Quantity || currentProductData.p_quantity,
      p_cate: p_Cate || currentProductData.p_cate,
      p_shortDes: p_ShortDes || currentProductData.p_shortDes,
      p_longDes: p_LongDes || currentProductData.p_longDes,
      p_image: p_Iamge || currentProductData.p_image,
    };

    // Send the updated data to the server
    const response = await fetch("http://localhost:8010/service/updateProduct", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product_data }),
    });

    // ตรวจสอบว่าการส่งข้อมูลสินค้าที่อัพเดตสำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้รับจากการอัพเดต
    const data = await response.json();
    console.log(data);

    // แสดงข้อความแจ้งเตือนถ้ามีการอัพเดตสินค้าสำเร็จ
    if (data.data > 0) {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// -------------------------------------- UPDATE PRODUCT END ---------------------------------------------


// -------------------------------------- DELETE PRODUCT -------------------------------------------------

async function deleteProduct() {
  try {
    // ดึงค่า p_id จาก input element หรือจากที่คุณเก็บค่าไว้
    let p_IDTxtRef = document.querySelector("#pID");
    let p_id = p_IDTxtRef.value;

    // ส่งคำขอลบสินค้าไปที่เซิร์ฟเวอร์
    const response = await fetch("http://localhost:8010/service/deleteProduct", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_ID: p_id }), // ส่ง p_id ที่ต้องการลบ
    });

    // ตรวจสอบว่าคำขอลบสินค้าสำเร็จหรือไม่
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ดึงข้อมูลที่ได้รับจากการลบ
    const data = await response.json();
    console.log(data);

    // ตรวจสอบว่ามีข้อผิดพลาดหรือไม่
    if (data.error) {
      console.error("Error:", data.message);
    } else {
      // แสดง popup แจ้งเตือนถ้าลบสินค้าสำเร็จ
      window.alert("Product deleted successfully");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// -------------------------------------- DELETE PRODUCT END ---------------------------------------------

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PRODUCT END ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


