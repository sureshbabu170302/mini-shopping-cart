class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, imageUrl, desc, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://media.istockphoto.com/id/1018424252/photo/white-pillow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=isDoOy8kYXAshwL9MRjWrWA7OJ8U0L9ub_dFAkjxYLg=",
      "A Soft pillow for your comfort sleep",
      20.0
    ),
    new Product(
      "A Carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3Ry-gB3-5ozw-M3fNh00rOFeV4iwrEF8nw&s",
      "A luxury carpet of fur",
      60.0
    ),
    new Product(
      "A flower vase",
      "https://media.istockphoto.com/id/498508957/photo/ceramic-vase.jpg?s=612x612&w=0&k=20&c=Tg71sSInH864g3AVv3_cds1Cn-U-mkye7nDGrn-jKVI=",
      "A antique flower vase",
      100.0
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
                <img src = "${prod.imageUrl}" alt = "${prod.title}">
                <div class = "product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>$${prod.price}</h3> 
                    <p>${prod.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
console.log(productList);