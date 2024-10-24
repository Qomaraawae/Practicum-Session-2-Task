// Pastikan seluruh konten halaman dimuat sebelum menjalankan script
window.onload = function () {
    // Ambil tombol "Add Task" dan tambahkan event listener
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTask);
}

function addTask() {
    // Ambil nilai dari input
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // Cek jika input kosong
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Buat elemen <li> baru untuk tugas
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    // Buat elemen span untuk teks tugas dan tambahkan ke li
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Event untuk menandai tugas sebagai selesai jika diklik pada span
    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    // Membuat tombol edit untuk mengedit tugas
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", function () {
        editTask(taskSpan);
    });

    // Membuat tombol delete untuk menghapus tugas
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Tambahkan tombol edit dan delete ke elemen li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    // Tambahkan elemen li ke daftar tugas
    taskList.appendChild(li);
    // Kosongkan input setelah menambah tugas
    taskInput.value = "";
}

function editTask(taskSpan) {
    // Ambil teks tugas saat ini
    const currentText = taskSpan.textContent;
    // Minta pengguna memasukkan teks baru
    const newText = prompt("Edit your task:", currentText);

    // Jika teks baru tidak kosong, perbarui teks tugas
    if (newText && newText.trim() !== "") {
        taskSpan.textContent = newText.trim();
    }
}