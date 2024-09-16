// getting input from input areas -->


document.addEventListener('DOMContentLoaded', function() {
    const libraryForm = document.getElementById('mylibraryform');
    const tableBody = document.getElementById('table-body');
    const alertUser = document.getElementById('alertuser');
    let bookCount = 0;

    libraryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('User-Name').value;
        const bookName = document.getElementById('Book-Name').value;
        const bookType = document.querySelector('input[name="bookType"]:checked').value;
        
        if (userName && bookName && bookType) {
            bookCount++;
            const dateOfIssue = new Date().toLocaleDateString();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bookCount}</td>
                <td>${dateOfIssue}</td>
                <td>${userName}</td>
                <td>${bookName}</td>
                <td>${bookType}</td>
                <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
            `;
            tableBody.appendChild(row);
            showAlert('Book added successfully!', 'success');
            libraryForm.reset();
        } else {
            showAlert('Please fill out all fields.', 'danger');
        }
    });

    tableBody.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.parentElement.remove();
            showAlert('Book removed successfully!', 'warning');
        }
    });

    function showAlert(message, className) {
        alertUser.innerHTML = `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        setTimeout(() => alertUser.innerHTML = '', 3000);
    }
});
