document.querySelector('.d-button').addEventListener('click', function() {
  var fileUrl = "https://drive.google.com/drive/folders/1YzDLDIVDYxQwQ0Mg6k40HixGiXZYwQ5z?usp=sharing";

  function closeModal() {
    modal.style.display = 'none';
  }

  // Создайте элемент <a> для открытия файла в новом окне
  var link = document.createElement('a');
  link.href = fileUrl;
  link.target = "_blank"; // Открывать файл в новом окне

  // Автоматически нажмите на ссылку для открытия файла
  link.click();

  closeModal();

});












