var newsList = document.querySelector('.news-list');
var showMoreButton = document.getElementById('show-more-button');
var newsItems = Array.from(newsList.children);
var visibleItemCount = 1; // Количество видимых новостей по умолчанию

// Функция для отображения видимых новостей
function showVisibleItems() {
  newsItems.slice(0, visibleItemCount).forEach(function(item) {
    item.style.display = 'block';
  });
}

// Функция для скрытия всех новостей
function hideAllItems() {
  newsItems.forEach(function(item) {
    item.style.display = 'none';
  });
}

// Функция для обработки клика по кнопке "Показать все новости"
function handleShowMoreClick() {
  var showAll = newsList.classList.toggle('show-all');
  showMoreButton.textContent = showAll ? 'Скрыть новости' : 'Показать все новости';

  // Проверяем, нужно ли прокручивать страницу к первой новости
  if (!showAll) {
    newsList.scrollIntoView({ behavior: 'smooth' });
  }
}

// Проверяем, нужно ли показывать кнопку "Показать все новости"
if (newsItems.length > visibleItemCount) {
  showMoreButton.style.display = 'block';
}

// Показываем видимые новости
showVisibleItems();

// Назначаем обработчик клика на кнопку "Показать все новости"
showMoreButton.addEventListener('click', handleShowMoreClick);
