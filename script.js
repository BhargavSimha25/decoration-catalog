const data = {
  marriage: [
    {
      title: "Floral Mandap",
      price: "₹15,000",
      img: "https://i.pinimg.com/originals/7b/94/e8/7b94e8b82a4bfa42e11df1274bb86e3b.jpg",
      link: "https://google.com"
    },
    {
      title: "Grand Stage",
      price: "₹25,000",
      img: "https://i.pinimg.com/originals/5d/93/dc/5d93dc9a3eb0019c44cc7f7dc6228690.jpg",
      link: "https://google.com"
    }
  ],
  reception: [
    {
      title: "Elegant Lighting",
      price: "₹20,000",
      img: "https://i.pinimg.com/originals/b4/85/ea/b485ea01106153a0b2d1bdbf58e58e0b.jpg",
      link: "https://google.com"
    }
  ],
  house: [
    {
      title: "Haldi Setup",
      price: "₹5,000",
      img: "https://i.pinimg.com/originals/8d/4b/4d/8d4b4ddf3b891dba06f07f4d9e4c9ea6.jpg",
      link: "https://google.com"
    }
  ],
  engagement: [
    {
      title: "Ring Ceremony Decor",
      price: "₹10,000",
      img: "https://i.pinimg.com/originals/d9/31/79/d93179a8a40783f12c7e55e45a1b4e2b.jpg",
      link: "https://google.com"
    }
  ],
  ceremony: [
    {
      title: "Traditional Vedi",
      price: "₹18,000",
      img: "https://i.pinimg.com/originals/ed/c4/4c/edc44cd52f4b574217b7c08bd3ec9bcb.jpg",
      link: "https://google.com"
    }
  ],
  others: [
    {
      title: "Custom Theme",
      price: "₹12,000",
      img: "https://i.pinimg.com/originals/2b/e1/88/2be188a65e91c3c5a4c2436c67b39be4.jpg",
      link: "https://google.com"
    }
  ]
};

const catalog = document.getElementById("catalog");

Object.entries(data).forEach(([category, items]) => {
  const section = document.createElement("section");
  section.id = category;

  const title = category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  section.innerHTML = `<h2>${title} Decoration</h2>
    <div class="card-container">
      ${items
        .map(
          (item) => `
        <div class="card">
          <a href="${item.link}" target="_blank">
            <img src="${item.img}" alt="${item.title}" />
          </a>
          <h3>${item.title}</h3>
          <p class="price">${item.price}</p>
        </div>`
        )
        .join("")}
    </div>`;
  catalog.appendChild(section);
});
