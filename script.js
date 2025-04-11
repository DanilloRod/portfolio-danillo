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

  

