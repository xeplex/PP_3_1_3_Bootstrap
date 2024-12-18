var editUserModal = document.getElementById('editUserModal');
editUserModal.addEventListener('show.bs.modal', function (event) {

    var button = event.relatedTarget;

    var userId = button.getAttribute('data-user-id');
    var username = button.getAttribute('data-user-username');
    var email = button.getAttribute('data-user-email');
    var roles = button.getAttribute('data-user-roles');

    var modalBodyInputId = editUserModal.querySelector('#editUserId');
    var modalBodyInputEmail = editUserModal.querySelector('#editEmail');
    var modalBodyInputUsername = editUserModal.querySelector('#editUsername');
    var modalBodyInputRoles = editUserModal.querySelector('#editRoles');
    var modalBodyId = editUserModal.querySelector('#editId');
    modalBodyInputId.value = userId;
    modalBodyId.value = userId;
    modalBodyInputEmail.value = email;
    modalBodyInputUsername.value = username;
    modalBodyInputRoles.value = roles;
});

var deleteUserModal = document.getElementById('deleteUserModal');
deleteUserModal.addEventListener('show.bs.modal', function (event) {

    var button = event.relatedTarget;

    var userId = button.getAttribute('data-user-id');
    var username = button.getAttribute('data-user-username');
    var email = button.getAttribute('data-user-email');
    var roles = button.getAttribute('data-user-roles');

    var modalBodyInputId = deleteUserModal.querySelector('#deleteUserId');
    var modalBodyInputEmail = deleteUserModal.querySelector('#deleteEmail');
    var modalBodyInputUsername = deleteUserModal.querySelector('#deleteUsername');
    var modalBodyInputRoles = deleteUserModal.querySelector('#deleteRoles');
    var modalBodyId = deleteUserModal.querySelector('#deleteId');
    modalBodyInputId.value = userId;
    modalBodyId.value = userId;
    modalBodyInputEmail.value = email;
    modalBodyInputUsername.value = username;
    modalBodyInputRoles.value = roles;
});

document.querySelectorAll('.roleLink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Скрываем все панели
        document.getElementById('adminPanel').style.display = 'none';
        document.getElementById('userPanel').style.display = 'none';

        // Удаляем классы активной подсветки у всех ссылок
        document.querySelectorAll('.roleLink').forEach(l => {
            l.classList.remove('bg-primary', 'text-white');
            l.classList.add('text-dark'); // Устанавливаем стандартный цвет текста для неактивных ссылок
        });

        // Проверка на выбранную роль
        if (this.dataset.role === 'Admin') {
            document.getElementById('adminPanel').style.display = 'block';
            document.getElementById('panelTitle').textContent = 'Admin panel'; // Заголовок для админа
            this.classList.add('bg-primary', 'text-white'); // Подсветка активной вкладки
        } else if (this.dataset.role === 'User ') {
            document.getElementById('userPanel').style.display = 'block';
            document.getElementById('panelTitle').textContent = 'User  information-page'; // Заголовок для пользователя
            this.classList.add('bg-primary', 'text-white'); // Подсветка активной вкладки
        }
    });
});