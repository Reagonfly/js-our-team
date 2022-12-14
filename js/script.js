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
    for (let key in ourGroup[i]) {
      console.log(ourGroup[i][key]);
    }
  }
  // milestone 2
  const container = document.querySelector(".list");
  
  for (let i = 0; i < ourGroup.length; i++) {
    let groupLust = document.createElement("div");
    groupLust.innerText = `Name: ${ourGroup[i].name}; 
    Role: ${ourGroup[i].role}; 
    Img: ${ourGroup[i].image}`;
    groupLust.classList.add("p-1");
    container.append(groupLust);
  }