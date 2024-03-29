// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ FOR AUTO RUN เมื่อเปิด PATH นี้ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);  // ดึงรหัสจาก query parameter
    const p_ID = urlParams.get('id');
    console.log('Product ID:', p_ID);  // OUTPUT

    fetchDataAndDisplayProductDetails(p_ID);  // เรียกใช้ฟังก์ชันดึงข้อมูลและแสดง
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

            const product = data.data[0];  // ดึงข้อมูลสินค้าแรกจาก array


            // สร้าง HTML สำหรับแสดงรายละเอียดสินค้า
            const productDetailHtml = `
            <img src="https://lh5.googleusercontent.com/d/${product.p_image}">
            <article class="proname">${product.p_name}</article>
            <article class="shortdes">${product.p_shortDes}</article>
            <article class="price">ราคา: ${product.p_price} บาท</article>
            <article class="quantity">จำนวน: <input type="number" value="1"></article>
            <article class="button">
                <a id="toCart" href="#">หยิบใส่ตะกร้า</a>
                <a id="heart" href="#"><i class="fa-regular fa-heart"></i></a>
            </article>
            <article class="head-info">รายละเอียดสินค้า</article>
            <article class="description-info">${product.p_longDes} <br><br>
                ปริมาณสุทธิ 50 มิลลิลิตร<br><br>
                ที่มาข้อมูล: www.somebymithailand.com<br>
                ที่มารูปภาพ: www.somebymi.co.kr</article>
`;
            document.getElementById("ProDetail").innerHTML = productDetailHtml;     // ทำให้ div id="ProDetail" แสดงข้อมูล productDetailHtml
        } else {
            // กรณีไม่มีข้อมูลหรือมี error
            console.error("No data or empty data received:", data);
        }
    } catch (error) {
        console.error("Error:", error);  // กรณีเกิด error ในการดึงข้อมูล
    }
}