const controller = {
  index: (req, res) => {
    const products = [
      {
        title: "Camisetas",
        image: "/images/products/t-shirt1.jpg",
        category: "camisetas"
      },
      {
        title: "Mugs",
        image: "/images/products/mug1.jpg",
        category: "mugs"
      },
      {
        title: "Botellas",
        image: "/images/products/bottle1.jpg",
        category: "botellas"
      },
      {
        title: "Hoddies",
        image: "/images/products/hoddie.jpg",
        category: "hoddies"
      },
      {
        title: "Stickers",
        image: "/images/products/sticker1.jpg",
        category: "stickers"
      },
      {
        title: "Gorras",
        image: "/images/products/hat1.jpg",
        category: "gorras"
      },
      {
        title: "Cojines",
        image: "/images/products/pillow1.jpg",
        category: "cojines"
      }

    ];

    res.render("products/index", { products });
  },
  products: (req, res) => {
    const product = req.params.product;
    let products
    let category
    switch (product) {
      case 'camisetas':
        category = 'camisetas';
        products = [
          {
            title: "Camiseta",
            image: "/images/products/t-shirt1.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            title: "Camiseta",
            image: "/images/products/t-shirt2.jpg",
            category: "camisetas",
            price: 30000
          },
          {
            title: "Camiseta",
            image: "/images/products/t-shirt3.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            title: "Camiseta",
            image: "/images/products/t-shirt4.jpg",
            category: "camisetas",
            price: 30000
          },
          {
            title: "Camiseta",
            image: "/images/products/t-shirt5.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            title: "Camiseta",
            image: "/images/products/t-shirt1.jpg",
            category: "camisetas",
            price: 30000
          }
    
        ];
      break;
      case 'hoddies':
        category = 'hoddies';
        products = [
          {
            title: "Hoddie",
            image: "/images/products/hoddie.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            title: "Hoddie",
            image: "/images/products/hoddie2.jpg",
            category: "hoddies",
            price: 30000
          },
          {
            title: "Hoddie",
            image: "/images/products/hoddie3.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            title: "Hoddie",
            image: "/images/products/hoddie4.jpg",
            category: "hoddies",
            price: 30000
          },
          {
            title: "Hoddies",
            image: "/images/products/hoddie.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            title: "Hoddie",
            image: "/images/products/hoddie2.jpg",
            category: "hoddies",
            price: 30000
          }
    
        ];
      break;
      case 'mugs':
        category = 'mugs';
        products = [
          {
            title: "Mug",
            image: "/images/products/mug1.jpg",
            category: "mugs",
            price: 25000
          },
          {
            title: "Mug",
            image: "/images/products/mug2.jpg",
            category: "mugs",
            price: 30000
          },
          {
            title: "Mug",
            image: "/images/products/mug3.jpg",
            category: "mugs",
            price: 25000
          },
          {
            title: "Mug",
            image: "/images/products/mug4.jpg",
            category: "mugs",
            price: 30000
          },
          {
            title: "Mug",
            image: "/images/products/mug1.jpg",
            category: "mugs",
            price: 25000
          },
          {
            title: "Mug",
            image: "/images/products/mug2.jpg",
            category: "mugs",
            price: 30000
          }
    
        ];
      break
      case 'cojines':
        category = 'cojines';
        products = [
          {
            title: "Cojín",
            image: "/images/products/pillow1.jpg",
            category: "cojines",
            price: 25000
          },
          {
            title: "Cojín",
            image: "/images/products/pillow2.jpg",
            category: "cojines",
            price: 30000
          },
          {
            title: "Cojín",
            image: "/images/products/pillow3.jpg",
            category: "cojines",
            price: 25000
          },
          {
            title: "Cojín",
            image: "/images/products/pillow4.jpg",
            category: "cojines",
            price: 30000
          },
          {
            title: "Cojín",
            image: "/images/products/pillow1.jpg",
            category: "cojines",
            price: 25000
          },
          {
            title: "Cojín",
            image: "/images/products/pillow2.jpg",
            category: "cojines",
            price: 30000
          }
    
        ];
      break
      case 'stickers':
        category = 'stickers';
        products = [
          {
            title: "Stickers",
            image: "/images/products/sticker1.jpg",
            category: "stickers",
            price: 25000
          },
          {
            title: "Stickers",
            image: "/images/products/sticker2.jpg",
            category: "stickers",
            price: 30000
          },
          {
            title: "Stickers",
            image: "/images/products/sticker3.jpg",
            category: "stickers",
            price: 25000
          },
          {
            title: "Stickers",
            image: "/images/products/sticker1.jpg",
            category: "stickers",
            price: 30000
          },
          {
            title: "Stickers",
            image: "/images/products/sticker2.jpg",
            category: "stickers",
            price: 25000
          },
          {
            title: "Stickers",
            image: "/images/products/sticker3.jpg",
            category: "stickers",
            price: 30000
          }
    
        ];
      break
      case 'gorras':
        category = 'gorras';
        products = [
          {
            title: "Gorra",
            image: "/images/products/hat1.jpg",
            category: "gorras",
            price: 25000
          },
          {
            title: "Gorra",
            image: "/images/products/hat2.jpg",
            category: "gorras",
            price: 30000
          },
          {
            title: "Gorra",
            image: "/images/products/hat3.jpg",
            category: "gorras",
            price: 25000
          },
          {
            title: "Gorra",
            image: "/images/products/hat1.jpg",
            category: "gorras",
            price: 25000
          },
          {
            title: "Gorra",
            image: "/images/products/hat2.jpg",
            category: "gorras",
            price: 30000
          },
          {
            title: "Gorra",
            image: "/images/products/hat3.jpg",
            category: "gorras",
            price: 25000
          }
    
        ];
      break
      case 'botellas':
        category = 'botellas';
        products = [
          {
            title: "Botella",
            image: "/images/products/bottle1.jpg",
            category: "botellas",
            price: 25000
          },
          {
            title: "Botella",
            image: "/images/products/bottle2.jpg",
            category: "botellas",
            price: 30000
          },
          {
            title: "Botella",
            image: "/images/products/bottle3.jpg",
            category: "botellas",
            price: 25000
          },
          {
            title: "Botella",
            image: "/images/products/bottle4.jpg",
            category: "botellas",
            price: 25000
          },
          {
            title: "Botella",
            image: "/images/products/bottle5.jpg",
            category: "botellas",
            price: 30000
          },
          {
            title: "Botella",
            image: "/images/products/bottle1.jpg",
            category: "botellas",
            price: 25000
          }
    
        ];
    }

    res.render("products/products", { products, category })
  },
  detail: (req, res) => { res.render("products/products") },
  login: (req, res) => { res.render("products/login") },
  register: (req, res) => { res.render("products/register") },
  cart: (req, res) => { res.render("products/productCart") },
  addEditProduct: (req, res) => { res.render("users/add-edit-Product") },
}

module.exports = controller;

