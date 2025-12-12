const schedule = [
  { day: "Понеділок", time: "08:00 - 10:00" },
  { day: "Вівторок", time: "14:00 - 16:00" },
  { day: "Середа", time: "19:00 - 21:00" }
];

const container = document.getElementById("schedule");
schedule.forEach(item => {
  const p = document.createElement("p");
  p.textContent = `${item.day}: ${item.time}`;
  container.appendChild(p);
});
