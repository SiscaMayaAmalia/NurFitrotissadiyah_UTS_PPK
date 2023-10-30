<!DOCTYPE html>
<html>
<head>
    <!-- Your HTML head content goes here -->
</head>
<body>
    <form id="contactForm">
        <input type="text" id="nama" name="nama" placeholder="Nama">
        <input type="email" id="email" name="email" placeholder="Email">
        <textarea id="pesan" name="pesan" placeholder="Pesan"></textarea>
        <button type="submit">Submit</button>
    </form>

    <script>
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
    </script>
</body>
</html>
