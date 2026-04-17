let currentPage = 1;
const totalPages = 3;

const openBtn = document.getElementById('openBtn');
const navButtons = document.getElementById('navButtons');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const kirimPesanBtn = document.getElementById('kirimPesanBtn');

const modal = document.getElementById('messageModal');
const submitPesan = document.getElementById('submitPesan');
const pesanInput = document.getElementById('pesanInput');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

openBtn.addEventListener('click', () => {
    document.getElementById('page1').classList.add('flipped');
    openBtn.style.display = 'none';
    navButtons.style.display = 'block';
    currentPage = 2;
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.getElementById('page' + currentPage).classList.add('flipped');
        currentPage++;
    }
    
    if(currentPage === totalPages) {
        navButtons.style.display = 'none';
        kirimPesanBtn.style.display = 'block';
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 2) {
        currentPage--;
        document.getElementById('page' + currentPage).classList.remove('flipped');
    } else if (currentPage === 2) {
        currentPage = 1;
        document.getElementById('page1').classList.remove('flipped');
        navButtons.style.display = 'none';
        openBtn.style.display = 'block';
    }
});

kirimPesanBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

submitPesan.addEventListener('click', () => {
    if (pesanInput.value.trim() === '') {
        alert('Jangan dikosongin ya :)');
    } else {
        modalTitle.innerText = "Mengirim pesan...";
        modalBody.innerHTML = "<h3>⏳</h3>";
        
        setTimeout(() => {
            modalTitle.innerText = "Pesan berhasil dikirim!";
            modalBody.innerHTML = "<button class='btn' onclick='location.reload()'>OK</button>";
        }, 2000);
    }
});
