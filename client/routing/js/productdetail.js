// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR AUTO RUN เมื่อเปิด PATH นี้ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search); // ดึงรหัสจาก query parameter
    const p_ID = urlParams.get('id');
    console.log('Product ID:', p_ID);   // OUTPUT


    fetchDataAndDisplayProductDetails(p_ID);    // เรียกใช้ฟังก์ชันดึงข้อมูลและแสดง
});


async function fetchDataAndDisplayProductDetails(p_ID) {
    console.log('p_ID:', p_ID); // OUTPUT ค่าที่รับมา
    try {
        // กำหนด URL สำหรับเรียกข้อมูลสินค้าจาก API โดยใช้ p_ID
        const url = `http://localhost:8010/service/productDE/${p_ID}`;

        const response = await fetch(url);

        if (!response.ok) { // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // ดึงข้อมูล JSON จาก response
        console.log(data);
        // ตรวจสอบว่ามีข้อมูลและไม่มี error จาก API
        if (data && data.error === false && data.data && data.data.length > 0) {
            
            const product = data.data[0];   // ดึงข้อมูลสินค้าแรกจาก array


            // สร้าง HTML สำหรับแสดงรายละเอียดสินค้า
          const productDetailHtml = `   
  <div class="section-items">
    <div class="input-item" id="EditProduct">
      <label for="pID">Product ID</label> <br>
      <input type="number" id="pID" value="${product.p_ID}" disabled> <br>
    </div>

    <div class="input-item">
      <label for="pname">Product Name</label> <br>
      <input type="text" id="pname" value="${product.p_name}"> <br>
    </div>

    <div class="input-item">
      <label for="cate">Category</label> <br>
      <select name="cate" id="cate">
        <option value=""></option>
        <option value="Toner" ${product.p_cate === 'Toner' ? 'selected' : ''}>โทนเนอร์</option>
        <option value="Serum" ${product.p_cate === 'Serum' ? 'selected' : ''}>เซรั่ม</option>
        <option value="Moiturizer" ${product.p_cate === 'Moiturizer' ? 'selected' : ''}>มอยเจอร์ไรเซอร์</option>
        <option value="Mask sheet" ${product.p_cate === 'Mask sheet' ? 'selected' : ''}>แผ่นมาส์ก</option>
        <option value="Sunscreen" ${product.p_cate === 'Sunscreen' ? 'selected' : ''}>ครีมกันแดด</option>
      </select> <br>
    </div>

    <div class="input-item">
      <label for="price">Price</label> <br>
      <input type="text" id="price" value="${product.p_price}"> <br>
    </div>

    <div class="input-item">
      <label for="pQuantity">Quantity</label> <br>
      <input type="text" id="pQuantity" value="${product.p_quantity}"> <br>
    </div>

    <div class="input-item">
      <label for="sdes">Short Description</label> <br>
      <input type="text" id="sdes" value="${product.p_shortDes}"> <br>
    </div>

    <div class="input-item">
      <label for="des">Description</label> <br>
      <textarea name="Des" id="des">${product.p_longDes}</textarea>
    </div>
  </div>
`;

            document.getElementById("Productdetail").innerHTML = productDetailHtml; // ทำให้ div id="Productdetail" แสดงข้อมูล productDetailHtml
        } else {
            // กรณีไม่มีข้อมูลหรือมี error
            console.error("No data or empty data received:", data);
        }
    } catch (error) {
        console.error("Error:", error);  // กรณีเกิด error ในการดึงข้อมูล
    }
}