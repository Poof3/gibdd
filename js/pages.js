// Пример данных услуг
var servicesData = [
  { title: "Регистрация транспортных средств", description: "Регистрация автомобилей, мотоциклов и других транспортных средств в соответствии с законодательством, выдача регистрационных номеров" },
  { title: "Выдача водительских удостоверений", description: "Оформление водительских удостоверений, проведение экзаменов на права, выдача и продление водительских прав"},
  { title: "ОСАГО", description: "Оформление страховок обязательного автогражданского страхования (ОСАГО) для автомобилей, обеспечивающих компенсацию ущерба при ДТП" },
  { title: "Техническое освидетельствование", description: "Описание услуги 4" },
  { title: "Предоставление справок", description: "Описание услуги 5" },
  { title: "Организация экзаменов по ПДД", description: "Описание услуги 6" },
  // Добавьте остальные услуги здесь...
  { title: "Разрешение на специальные перевозки", description: "Описание услуги 6" },
  { title: "Проверка и регистрация автономеров", description: "Описание услуги 6" },
  { title: "Оформление разрешений на временное ограничение движения", description: "Описание услуги 6" },
  { title: "Прием и рассмотрение жалоб и обращений", description: "Описание услуги 6" },

];

// Функция для генерации страниц с услугами
function generateServicePages() {
  var servicesList = document.getElementById("services-list");
  var pagination = document.getElementById("pagination");
  var itemsPerPage = 5; // Количество услуг на одной странице
  var totalPages = Math.ceil(servicesData.length / itemsPerPage);

  // Очистить список услуг и пагинацию перед генерацией страниц
  servicesList.innerHTML = "";
  pagination.innerHTML = "";

  // Генерация списка услуг и пагинации для каждой страницы
  for (var i = 1; i <= totalPages; i++) {
    // Создание элементов списка услуг для текущей страницы
    var pageServices = servicesData.slice(
      (i - 1) * itemsPerPage,
      i * itemsPerPage
    );
    pageServices.forEach(function (service) {
      var listItem = document.createElement("li");
      listItem.textContent = service.title;
      servicesList.appendChild(listItem);
    });

    // Создание элементов пагинации (кнопок страниц)
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", function () {
      // Обработчик события для переключения на выбранную страницу
      var pageNum = parseInt(this.textContent);
      showPage(pageNum);
    });
    pagination.appendChild(pageButton);
  }

  // Показать первую страницу по умолчанию
  showPage(1);
}

// Функция для отображения выбранной страницы
function showPage(pageNum) {
  var servicesList = document.getElementById("services-list");
  var paginationButtons = document.querySelectorAll(".pagination button");

  // Скрыть все страницы услуг
  Array.from(servicesList.children).forEach(function (item) {
    item.style.display = "none";
  });

  // Показать выбранную страницу
  var pageItems = Array.from(servicesList.children).slice(
    (pageNum - 1) * 5,
    pageNum * 5
  );
  pageItems.forEach(function (item) {
    item.style.display = "block";
  });

  // Подсветить выбранную кнопку страницы в пагинации
  paginationButtons.forEach(function (button) {
    button.classList.remove("active");
    if (parseInt(button.textContent) === pageNum) {
      button.classList.add("active");
    }
  });
}
// Вызов функции для генерации страниц с услугами
generateServicePages();
