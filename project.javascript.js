// เพิ่ม event ให้กับปุ่ม toggle
document.getElementById("navbar-toggle").addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    
    // เช็คสถานะของ Navbar
    if (navbar.style.display === "block") {
        navbar.style.display = "none"; // ซ่อน Navbar
    } else {
        navbar.style.display = "block"; // แสดง Navbar
    }
});