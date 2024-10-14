const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    // Fungsi untuk toggle antara dark mode dan light mode
    toggleBtn.addEventListener('click', function() {
      body.classList.toggle('dark-mode');

      // Mengubah teks tombol berdasarkan mode yang aktif
      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
      } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
      }
    });