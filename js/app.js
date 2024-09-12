const products = [
  {
    productName: "Sandia",
    price: 15,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869750/e-commerce/ksmw5s3xg7eeakpva5xd.png",
  },
  {
    productName: "Cervecita",
    price: 20,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699869747/e-commerce/xhlekqrockwxzjskzppw.png",
  },
  {
    productName: "Bananita",
    price: 30,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png",
  },
  {
    productName: "Compu",
    price: 40,
    img: "https://res.cloudinary.com/pabcode/image/upload/v1700045911/e-commerce/compu_unvcoi.png",
  },
];
const shopContent = document.getElementById("shopContent");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const displayProducts = (productList) => {
  shopContent.innerHTML = "";

  if (productList.length === 0) {
    noResults.style.display = "block";
  } else {
    productList.forEach((product) => {
      const content = document.createElement("div");
      content.className = "card-products";
      content.innerHTML = `
          <img src="${product.img}">
          <h3>${product.productName}</h3>
          <p class="price">${product.price}</p>
          <button>comprar</button>
          `;
      shopContent.append(content);
    });
    noResults.style.display = "none";
  }
};

const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) => product.productName.toLowerCase().startsWith(searchTerm));

  displayProducts(filteredProducts);
};

displayProducts(products);

searchInput.addEventListener("input", handleSearch);