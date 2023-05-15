// Получаем ссылки на элементы
var modal = document.getElementById('modal');
var modalContent = document.querySelector('.modal-content');
var btn = document.getElementsByClassName('download-button')[0];
var closeBtn = document.getElementsByClassName('close')[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = 'block';
  modalContent.classList.add('show');
}

// Закрываем модальное окно при клике на кнопку закрытия
closeBtn.onclick = function() {
  modalContent.classList.remove('show');
  setTimeout(function() {
    modal.style.display = 'none';
  }, 300);
}

// Закрываем модальное окно при клике вне окна
window.onclick = function(event) {
  if (event.target == modal) {
    modalContent.classList.remove('show');
    setTimeout(function() {
      modal.style.display = 'none';
    }, 300);
  }
}
