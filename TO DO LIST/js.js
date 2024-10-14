// Mengambil elemen dari DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambah tugas baru
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Membuat elemen list item (li) untuk tugas
    const li = document.createElement('li');
    li.textContent = taskText;

    // Tombol hapus untuk menghapus tugas
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Menandai tugas sebagai selesai
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Menambahkan tombol hapus ke dalam elemen li
    li.appendChild(deleteBtn);
    
    // Menambahkan elemen li ke dalam taskList (ul)
    taskList.appendChild(li);

    // Mengosongkan input setelah tugas ditambahkan
    taskInput.value = '';
}

// Menambahkan event listener pada tombol Add Task
addTaskBtn.addEventListener('click', addTask);

// Menambahkan event listener untuk menambah tugas dengan Enter
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
