document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function (event) {
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;

        if (!nama || !email || !pesan) {
            alert('Silakan isi semua bidang yang diperlukan.');
            event.preventDefault();
        }
    });
});
