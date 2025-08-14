const leaguesData = {
  premier_league: [
    { name: "Manchester United", id: "manchester_united", price: 17500 },
    { name: "Chelsea", id: "chelsea", price: 16000 },
    { name: "Liverpool", id: "liverpool", price: 16500 },
    { name: "Arsenal", id: "arsenal", price: 17000 },
    { name: "Manchester City", id: "manchester_city", price: 18000 },
    { name: "Tottenham", id: "tottenham", price: 15500 }
  ],
  serie_a: [
    { name: "Juventus", id: "juventus", price: 17500 },
    { name: "AC Milan", id: "ac_milan", price: 16500 },
    { name: "Inter Milan", id: "inter_milan", price: 16500 },
    { name: "Napoli", id: "napoli", price: 16000 },
    { name: "Roma", id: "roma", price: 15800 },
    { name: "Lazio", id: "lazio", price: 15800 }
  ],
  ligue_1: [
    { name: "PSG", id: "psg", price: 17000 },
    { name: "Lyon", id: "lyon", price: 15000 },
    { name: "Marseille", id: "marseille", price: 15000 },
    { name: "Monaco", id: "monaco", price: 15500 },
    { name: "Lille", id: "lille", price: 15000 },
    { name: "Nice", id: "nice", price: 15000 }
  ]
};

const kitsTypes = ['home', 'away', 'third'];

const leagueSection = document.getElementById('league-section');
const teamSection = document.getElementById('team-section');
const kitSection = document.getElementById('kit-section');

let selectedLeague = 'premier_league';
let selectedTeam = null;

function createImageWithFallback(basePath) {
  // Try multiple image extensions for fallback
  const exts = ['webp', 'avif', 'jpg', 'png'];

  return new Promise((resolve) => {
    let index = 0;

    function tryNext() {
      if (index >= exts.length) {
        // No image found, use placeholder
        resolve('images/placeholder.png');
        return;
      }

      const img = new Image();
      const src = `${basePath}.${exts[index]}`;
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = () => {
        index++;
        tryNext();
      };
    }
    tryNext();
  });
}

function renderLeagueButtons() {
  leagueSection.querySelectorAll('.league-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-league') === selectedLeague);
  });
}

function renderTeams() {
  teamSection.innerHTML = '';
  const teams = leaguesData[selectedLeague];
  teams.forEach(team => {
    const btn = document.createElement('button');
    btn.classList.add('team-btn');
    if (selectedTeam === team.id) btn.classList.add('active');
    btn.textContent = team.name;
    btn.onclick = () => {
      selectedTeam = team.id;
      renderTeams();
      renderKits();
    };
    teamSection.appendChild(btn);
  });
}

async function renderKits() {
  kitSection.innerHTML = '';
  if (!selectedTeam) return;

  for (const kitType of kitsTypes) {
    const basePath = `images/kits/${selectedTeam}_${kitType}`;
    const imgSrc = await createImageWithFallback(basePath);

    const team = leaguesData[selectedLeague].find(t => t.id === selectedTeam);
    const price = team ? team.price : 'N/A';

    const card = document.createElement('a');
    card.classList.add('card');
    card.href = 'https://wa.me/2348130489824?text=i would like to buy?'; // link or add more functionality if you want
    card.innerHTML = `
      <img src="${imgSrc}" alt="${team.name} ${kitType} kit" />
      <h2>${team.name} ${kitType} Kit</h2>
      <p>₦${price.toLocaleString()}</p>
    `;
    kitSection.appendChild(card);
  }
}

// Initialize page
function init() {
  renderLeagueButtons();
  renderTeams();
  selectedTeam = leaguesData[selectedLeague][0].id; // auto-select first team on load
  renderKits();
}

leagueSection.addEventListener('click', e => {
  if (!e.target.classList.contains('league-btn')) return;
  selectedLeague = e.target.getAttribute('data-league');
  selectedTeam = null;
  renderLeagueButtons();
  renderTeams();
  selectedTeam = leaguesData[selectedLeague][0].id; // auto-select first team of new league
  renderKits();
});
