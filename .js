const cities = [
  "Мостиська",
  "Довгомостиська",
  "Бортятин",
  "Крукеничі",
  "Гостинцеве",
  "Завидовичі",
  "Дидятичі",
  "Черневе",
  "Старява",
  "Дмитровичі",
  "Хоросниця",
  "Балиці",
  "Волиця",
  "Заверещиця",
  "Арламівська Воля",
  "Берегове",
  "Буховичі",
  "Вишенька",
  "Воля-Садківська",
  "Вуйковичі",
  "Годині",
  "Гостинцеве",
  "Добощівка",
  "Дубинки",
  "Завада",
  "Завадів",
  "Заверхи",
  "Зав’язанці",
  "Загорби",
  "Заріччя",
  "Качмари",
  "Княгиничі",
  "Колодка",
  "Королин",
  "Корчунок",
  "Костильники",
  "Крив’яки",
  "Крисовичі",
  "Кропильники",
  "Крукеничі",
  "Липники",
  "Мазури",
  "Максимці",
  "Мальнів",
  "Мальнівська Воля",
  "Мартині",
  "Мелешки",
  "Мистичі",
  "Нагірне",
  "Ніговичі",
  "Острожець",
  "Петики",
  "Пихи",
  "Підгат",
  "Підліски",
  "Пісок",
  "Пнікут",
  "Раденичі",
  "Рожаки",
  "Санники",
  "Слабаш",
  "Соколія",
  "Сольтиси",
  "Старява",
  "Стоянці",
  "Стрілецьке",
  "Судковичі",
  "Твіржа",
  "Топільниця",
  "Хатки",
  "Хлиплі",
  "Хоросниця",
  "Черневе",
  "Чижевичі",
  "Чишки",
  "Ятвяги"
];

const streets = [
  "Шевченка",
  "Франка",
  "Лісна",
  "Центральна",
  "Антоновича",
  "Богдана Хмельницького",
  "Глібова",
  "Михайла Грушевського",
  "Зелена",
  "Коновальця",
  "Коперніка",
  "Лисенка",
  "Людкевича",
  "Мазепи",
  "Перемишльська",
  "Промислова",
  "Петра Сагайдачного",
  "Шашкевича",
  "Степана Бандери",
  "Стрілецька",
  "Стуса",
  "Ярослава Мудрого"
];

function setupSuggestions(inputId, suggestionsId, dataList, notFoundMessage) {
  const input = document.getElementById(inputId);
  const suggestionsBox = document.getElementById(suggestionsId);


  input.addEventListener("focus", function() {
    showAllSuggestions();
  });

  input.addEventListener("input", function() {
    const value = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (value.length > 0) {
      const matches = dataList.filter(item => item.toLowerCase().includes(value));
      if (matches.length > 0) {
        matches.forEach(match => {
          const p = document.createElement("p");
          p.textContent = match;
          p.onclick = () => {
            input.value = match;
            suggestionsBox.innerHTML = "";
          };
          suggestionsBox.appendChild(p);
        });
      } else {
        const p = document.createElement("p");
        p.textContent = notFoundMessage;
        p.style.color = "red";
        suggestionsBox.appendChild(p);
      }
    } else {
      showAllSuggestions();
    }
  });

 
  document.addEventListener("click", function(e) {
    if (!input.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.innerHTML = "";
    }
  });

  function showAllSuggestions() {
    suggestionsBox.innerHTML = "";
    dataList.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item;
      p.onclick = () => {
        input.value = item;
        suggestionsBox.innerHTML = "";
      };
      suggestionsBox.appendChild(p);
    });
  }
}


setupSuggestions("cityInput", "citySuggestions", cities, "Місто не знайдено");
setupSuggestions("streetInput", "streetSuggestions", streets, "Вулицю не знайдено");
function refreshScheduleFromOblenergo()
 {
  const scheduleBox = document.querySelector("#schedule-text");
  if (scheduleBox) {
    fetch("https://poweron.loe.lviv.ua/#:~:text=%D0%93%D1%80%D0%B0%D1%84%D1%96%D0%BA%20%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8%D0%BD%D0%BD%D0%B8%D1%85%20%D0%B2%D1%96%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D1%8C%20%D0%BD%D0%B0%2012.01.2026,00%2C%20%D0%B7%2019%3A00%20%D0%B4%D0%BE%2022%3A30.") // приклад URL
      .then(response => response.text())
      .then(data => {
        scheduleBox.innerHTML = data; 
      })
      .catch(err => console.error("Не вдалося отримати графік:", err));
  }
}

function replaceGraphBlock() {
  const todayBlock = document.getElementById("today-block");
  const newBlock = document.getElementById("new-block");
  const tomorrowBlock = document.getElementById("tomorrow-block");

  
  todayBlock.innerHTML = newBlock.innerHTML;

  
  newBlock.remove();

  
  const tomorrowImageUrl = "https://api.loe.lviv.ua/media/6967c59b6249c_GPV.png"; 
  const tomorrowText = [
  'Графік погодинних відключень на 15.01.2026',
  'Інформація станом на 18:34 14.01.2026',

  'Група 1.1. Електроенергії немає з 03:00 до 06:30, з 10:00 до 13:30, з 17:00 до 22:30.',
  'Група 1.2. Електроенергії немає з 06:30 до 13:30, з 17:00 до 21:30.',

  'Група 2.1. Електроенергії немає з 00:00 до 03:00, з 10:00 до 17:00, з 20:30 до 24:00.',
  'Група 2.2. Електроенергії немає з 03:00 до 06:30, з 10:00 до 17:00, з 20:30 до 24:00.',

  'Група 3.1. Електроенергії немає з 00:00 до 03:00, з 06:30 до 10:00, з 13:30 до 18:00, з 22:00 до 24:00.',
  'Група 3.2. Електроенергії немає з 00:00 до 03:00, з 06:30 до 10:00, з 13:30 до 20:30.',

  'Група 4.1. Електроенергії немає з 03:00 до 06:30, з 10:00 до 17:00, з 21:30 до 24:00.',
  'Група 4.2. Електроенергії немає з 05:00 до 10:00, з 13:30 до 20:00.',

  'Група 5.1. Електроенергії немає з 00:00 до 03:00, з 06:30 до 13:30, з 18:30 до 22:00.',
  'Група 5.2. Електроенергії немає з 00:00 до 03:00, з 06:30 до 10:00, з 13:30 до 20:00.',

  'Група 6.1. Електроенергії немає з 03:00 до 06:30, з 09:00 до 13:30, з 17:00 до 20:30.',
  'Група 6.2. Електроенергії немає з 03:00 до 06:30, з 12:00 до 18:30, з 22:30 до 24:00.'
];
  if (tomorrowImageUrl && tomorrowText) {
    tomorrowBlock.innerHTML = `
      <section>
        <h2>Графік відключень</h2>
        <div class="schedule-image">
          <img src="${tomorrowImageUrl}" alt="Графік на завтра">
        </div>
        <div class="group">
          <h3>Графік погодинних відключень на завтра</h3>
          <p>${tomorrowText}</p>
        </div>
      </section>
    `;
  } else {
    tomorrowBlock.innerHTML = `<p>Графіка ще нема</p>`;
  }
}


replaceGraphBlock();

const scheduleData = [
  { city: "Мостиська", street: "Шевченка", group: "1.1" },
  { city: "Мостиська", street: "Франка", group: "1.2" },
  { city: "Мостиська", street: "Лісна", group: "1.1" },
  { city: "Мостиська", street: "Центральна", group: "1.2" },

  { city: "Довгомостиська", street: "Шевченка", group: "2.1" },
  { city: "Довгомостиська", street: "Центральна", group: "2.2" },

  { city: "Бортятин", street: "Лісна", group: "2.1" },
  { city: "Бортятин", street: "Центральна", group: "2.2" },

  { city: "Крукеничі", street: "Шевченка", group: "3.1" },
  { city: "Крукеничі", street: "Франка", group: "3.2" },

  { city: "Гостинцеве", street: "Шевченка", group: "3.1" },
  { city: "Гостинцеве", street: "Центральна", group: "3.2" },

  { city: "Завидовичі", street: "Шевченка", group: "4.1" },
  { city: "Завидовичі", street: "Франка", group: "4.2" },

  { city: "Дидятичі", street: "Шевченка", group: "4.1" },
  { city: "Дидятичі", street: "Центральна", group: "4.2" },

  { city: "Черневе", street: "Шевченка", group: "5.1" },
  { city: "Черневе", street: "Франка", group: "5.2" },

  { city: "Старява", street: "Шевченка", group: "5.1" },
  { city: "Старява", street: "Центральна", group: "5.2" },

  { city: "Дмитровичі", street: "Шевченка", group: "6.1" },
  { city: "Дмитровичі", street: "Франка", group: "6.2" },

  { city: "Хоросниця", street: "Шевченка", group: "6.1" },
  { city: "Хоросниця", street: "Центральна", group: "6.2" },

  { city: "Балиці", street: "Шевченка", group: "1.1" },
  { city: "Волиця", street: "Франка", group: "1.2" },
  { city: "Заверещиця", street: "Центральна", group: "2.1" },
  { city: "Арламівська Воля", street: "Шевченка", group: "2.2" },
  { city: "Берегове", street: "Франка", group: "3.1" },
  { city: "Буховичі", street: "Центральна", group: "3.2" },
  { city: "Вишенька", street: "Шевченка", group: "4.1" },
  { city: "Воля-Садківська", street: "Франка", group: "4.2" },
  { city: "Вуйковичі", street: "Центральна", group: "5.1" },
  { city: "Годині", street: "Шевченка", group: "5.2" },
  { city: "Добощівка", street: "Франка", group: "6.1" },
  { city: "Дубинки", street: "Центральна", group: "6.2" },
  { city: "Завада", street: "Шевченка", group: "1.1" },
  { city: "Завадів", street: "Франка", group: "1.2" },
  { city: "Заверхи", street: "Центральна", group: "2.1" },
  { city: "Зав’язанці", street: "Шевченка", group: "2.2" },
  { city: "Загорби", street: "Франка", group: "3.1" },
  { city: "Заріччя", street: "Центральна", group: "3.2" },
  { city: "Качмари", street: "Шевченка", group: "4.1" },
  { city: "Княгиничі", street: "Франка", group: "4.2" },
  { city: "Колодка", street: "Центральна", group: "5.1" },
  { city: "Королин", street: "Шевченка", group: "5.2" },
  { city: "Корчунок", street: "Франка", group: "6.1" },
  { city: "Костильники", street: "Центральна", group: "6.2" },
  { city: "Крив’яки", street: "Шевченка", group: "1.1" },
  { city: "Крисовичі", street: "Франка", group: "1.2" },
  { city: "Кропильники", street: "Центральна", group: "2.1" },
  { city: "Липники", street: "Шевченка", group: "2.2" },
  { city: "Мазури", street: "Франка", group: "3.1" },
  { city: "Максимці", street: "Центральна", group: "3.2" },
  { city: "Мальнів", street: "Шевченка", group: "4.1" },
  { city: "Мальнівська Воля", street: "Франка", group: "4.2" },
  { city: "Мартині", street: "Центральна", group: "5.1" },
  { city: "Мелешки", street: "Шевченка", group: "5.2" },
  { city: "Мистичі", street: "Франка", group: "6.1" },
  { city: "Нагірне", street: "Центральна", group: "6.2" },
  { city: "Ніговичі", street: "Шевченка", group: "1.1" },
  { city: "Острожець", street: "Франка", group: "1.2" },
  { city: "Петики", street: "Центральна", group: "2.1" },
  { city: "Пихи", street: "Шевченка", group: "2.2" },
  { city: "Підгат", street: "Франка", group: "3.1" },
  { city: "Підліски", street: "Центральна", group: "3.2" },
  { city: "Пісок", street: "Шевченка", group: "4.1" },
  { city: "Пнікут", street: "Франка", group: "4.2" },
  { city: "Раденичі", street: "Центральна", group: "5.1" },
  { city: "Рожаки", street: "Шевченка", group: "5.2" },
  { city: "Санники", street: "Франка", group: "6.1" },
  { city: "Слабаш", street: "Центральна", group: "6.2" },
  { city: "Соколія", street: "Шевченка", group: "1.1" },
  { city: "Сольтиси", street: "Франка", group: "1.2" },
  { city: "Стоянці", street: "Центральна", group: "2.1"},
]
function searchSchedule() {
  const city = document.getElementById("cityInput").value.trim();
  const street = document.getElementById("streetInput").value.trim();

  const resultsTable = document.getElementById("resultsTable").querySelector("tbody");
  resultsTable.innerHTML = ""; 

  const matches = scheduleData.filter(item => {
    return (
      (city === "" || item.city.toLowerCase() === city.toLowerCase()) &&
      (street === "" || item.street.toLowerCase() === street.toLowerCase())
    );
  });

  if (matches.length > 0) {
    document.getElementById("results").style.display = "block";

    matches.forEach(match => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${match.city}</td>
        <td>${match.street}</td>
        <td>Група ${match.group}</td>
      `;
      resultsTable.appendChild(row);
    });
  } else {
    document.getElementById("results").style.display = "block";
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="3">Нічого не знайдено</td>`;
    resultsTable.appendChild(row);
  }
}
function closeResults() {
  document.getElementById("results").style.display = "none";
}
