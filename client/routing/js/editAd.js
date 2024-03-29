// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR AUTO RUN เมื่อเปิด PATH นี้ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);  // ดึงรหัสจาก query parameter
    const A_ID = urlParams.get('id');
    console.log('Product ID:', A_ID); // OUTPUT


    fetchDataAndDisplayADMINDetails(A_ID); // เรียกใช้ฟังก์ชันดึงข้อมูลและแสดง
});


async function fetchDataAndDisplayADMINDetails(A_ID) {
    console.log('p_ID:', A_ID);
    try {
         // กำหนด URL สำหรับเรียกข้อมูลแอดมินจาก API โดยใช้ A_ID
        const url = `http://localhost:8010/service/Admin/${A_ID}`;

        const response = await fetch(url);

        if (!response.ok) { // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // ดึงข้อมูล JSON จาก response
        console.log(data);
        // ตรวจสอบว่ามีข้อมูลและไม่มี error จาก API
        if (data && data.error === false && data.data && data.data.length > 0) {
            
            const admin_info = data.data[0];// ดึงข้อมูลสินค้าแรกจาก array


            // สร้าง HTML สำหรับแสดงรายละเอียดสินค้า
            const ADMINDETAIL = `
            <div class="section-items">
              <p1> Admin Information </p1>
              <i class="fa-solid fa-user"></i>
              <br>
          
              <p2> Employee ID </p2>
              <br>
              <input type="text" id="txtEmp" pattern="6587[0-9]{1}[0-9]{1}[0-9]{1}" required="required" class="ID" placeholder="6587XXX" value="${admin_info.A_ID}">
              <br>
          
              <p2> Name </p2>
              <br>
              <input type="text" id="txtTitle" required="required" class="title" placeholder="Title" value="${admin_info.A_title}">
              <input type="text" id="txtFN" required="required" class="name" placeholder="Firstname" value="${admin_info.A_Firstname}">
              <input type="text" id="txtLN" required="required" class="name" placeholder="Lastname" value="${admin_info.A_Lastname}">
              <br>
          
              <p2> Email </p2>
              <br>
              <input type="email" id="ID_Em" name="userEmail" required="required" placeholder="Email" value="${admin_info.A_email}">
              <br>
          
              <p2> Password </p2>
              <br>
              <input type="password" name="userPassword" id="txtpass" required="required" placeholder="Password" value="${admin_info.A_pass}">
              <br>
          
              <p2> Mobile Number </p2>
              <input type="tel" id="ID_tel" name="mobile" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required="required" placeholder="XXXXXXXXXX" value="${admin_info.A_pnum}">
              <br>
            </div>
          `;

            document.getElementById("showoutputdetailadmin").innerHTML = ADMINDETAIL;   // ทำให้ div id="showoutputdetailadmin" แสดงข้อมูล ADMINDETAIL
        } else {
            // กรณีไม่มีข้อมูลหรือมี error
            console.error("No data or empty data received:", data);
        }
    } catch (error) {
        console.error("Error:", error); // กรณีเกิด error ในการดึงข้อมูล
    }
}