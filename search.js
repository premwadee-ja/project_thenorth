document.getElementById("search-btn").addEventListener("click", function () {
    let searchValue = document.getElementById("search-input").value.trim().toLowerCase(); // รับค่าจากช่องค้นหาและแปลงเป็นตัวพิมพ์เล็ก

    // รายชื่อจังหวัด และไฟล์ที่เชื่อมโยง
    const provinces = {
        "พิษณุโลก": "phitsanulok.html",
        "สุโขทัย": "sukhothai.html",
        "กำแพงเพชร": "kamphaengphet.html",
        "พิจิตร": "phichit.html",
        "ตาก": "tak.html",
        "นครสวรรค์": "nakhonsawan.html",
        "อุทัยธานี": "uthaithani.html",
        "เพชรบูรณ์": "phetchabun.html"
    };

    // ค้นหาชื่อจังหวัดที่ตรงกัน
    if (provinces[searchValue]) {
        window.location.href = provinces[searchValue]; // ไปยังหน้าจังหวัด
    } else {
        alert("ไม่พบข้อมูลจังหวัดที่ค้นหา กรุณาลองใหม่"); // แจ้งเตือนถ้าไม่มีจังหวัดนี้
    }
});
