// milestone 0

let ourGroup = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      image: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg",
    },
  ];
 
// milestone 1
for (let i = 0; i < ourGroup.length; i++) {
  console.log(ourGroup[i]);
}
// milestone 2
const container = document.querySelector(".member-photo");
let colonna = document.createElement("div");

// bonus
for (let i = 0; i < ourGroup.length; i++) {
  let groupList = document.createElement("div");
  let role = document.createElement("div");
  let photo = document.createElement("div");

  photo.innerHTML = `<img src="./img/${ourGroup[i].image}">`;
  role.innerHTML = `<h4>${ourGroup[i].name}</h4> 
  <p>${ourGroup[i].role}</p>`;

  container.append(groupList);
  groupList.append(role, photo);
} 
