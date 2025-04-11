fetch('https://api.github.com/users/danillorod/repos')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('repos-container');
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement('div');
      card.className = 'repo-card';
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição"}</p>
        <p><strong>Linguagem:</strong> ${repo.language || "N/A"}</p>
        <a href="${repo.html_url}" target="_blank">🔗 Ver no GitHub</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar repositórios:', error));

  // ⚠️ Substitua pela sua própria chave da OpenWeatherMap
const apiKey = "SUA_API_KEY";
const cidade = "Rio de Janeiro";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("clima-descricao").textContent =
      data.weather[0].description;
    document.getElementById("clima-temp").textContent =
      `🌡️ ${Math.round(data.main.temp)}°C`;
  })
  .catch(error => {
    console.error("Erro ao carregar clima:", error);
    document.getElementById("clima-descricao").textContent =
      "Não foi possível carregar o clima.";
  });


