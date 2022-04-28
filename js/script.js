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

// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let key in team) {
    console.log(team[key].name, team[key].role, team[key].image);
};

// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
let singlePerson = [];
for (let key in team) {
    singlePerson.push(`${team[key].name}` + ' ' + `${team[key].role}` + ' ' + `${team[key].image}`);
};

for (let i = 0; i < singlePerson.length; i++) {
    const person = document.querySelector(".person");
    person.innerHTML +=  `<h1>${singlePerson[i]}</h1>`;
}
