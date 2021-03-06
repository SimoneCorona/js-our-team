// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(team)
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
const container = document.querySelector(".team-container");
 for (let i = 0; i <= team.length; i++) {
    let num;
     container.innerHTML +=  
     `<div class="team-card">
        <div class="card-image">
          <img
            src="img/${team.image[indexArray()]}"
            alt="${team.name[indexArray()]}"
          />
        </div>
        <div class="card-text">
          <h3>${team.name[indexArray()]}</h3>
          <p>${team.role[indexArray()]}</p>
        </div>
      </div>`
} 

function indexArray() {
  let num = [];
  for (let i = 0; i < team.length; i++) {
    num.push(i)
  }
  console.log(num)
}

// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.