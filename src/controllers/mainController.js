const controller = {
  index: (req, res) => {
    const products = [
      {
        id: 1,
        title: "Camisetas",
        image: "/images/products/t-shirt1.jpg",
        category: "camisetas"
      },
      {
        id: 2,
        title: "Mugs",
        image: "/images/products/mug1.jpg",
        category: "mugs"
      },
      {
        id: 3,
        title: "Botellas",
        image: "/images/products/bottle1.jpg",
        category: "botellas"
      },
      {
        id: 4,
        title: "Hoddies",
        image: "/images/products/hoddie.jpg",
        category: "hoddies"
      },
      {
        id: 5,
        title: "Stickers",
        image: "/images/products/sticker1.jpg",
        category: "stickers"
      },
      {
        id: 6,
        title: "Gorras",
        image: "/images/products/hat1.jpg",
        category: "gorras"
      },
      {
        id: 7,
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
            id: 8,
            title: "Camiseta",
            image: "/images/products/t-shirt1.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            id: 9,
            title: "Camiseta",
            image: "/images/products/t-shirt2.jpg",
            category: "camisetas",
            price: 30000
          },
          {
            id: 10,
            title: "Camiseta",
            image: "/images/products/t-shirt3.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            id: 11,
            title: "Camiseta",
            image: "/images/products/t-shirt4.jpg",
            category: "camisetas",
            price: 30000
          },
          {
            id: 11,
            title: "Camiseta",
            image: "/images/products/t-shirt5.jpg",
            category: "camisetas",
            price: 25000
          },
          {
            id: 12,
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
            id: 13,
            title: "Hoddie",
            image: "/images/products/hoddie.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            id: 14,
            title: "Hoddie",
            image: "/images/products/hoddie2.jpg",
            category: "hoddies",
            price: 30000
          },
          {
            id: 15,
            title: "Hoddie",
            image: "/images/products/hoddie3.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            id: 16,
            title: "Hoddie",
            image: "/images/products/hoddie4.jpg",
            category: "hoddies",
            price: 30000
          },
          {
            id: 17,
            title: "Hoddies",
            image: "/images/products/hoddie.jpg",
            category: "hoddies",
            price: 25000
          },
          {
            id: 18,
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
            id: 19,
            title: "Mug",
            image: "/images/products/mug1.jpg",
            category: "mugs",
            price: 25000
          },
          {
            id: 20,
            title: "Mug",
            image: "/images/products/mug2.jpg",
            category: "mugs",
            price: 30000
          },
          {
            id: 21,
            title: "Mug",
            image: "/images/products/mug3.jpg",
            category: "mugs",
            price: 25000
          },
          {
            id: 22,
            title: "Mug",
            image: "/images/products/mug4.jpg",
            category: "mugs",
            price: 30000
          },
          {
            id: 23,
            title: "Mug",
            image: "/images/products/mug1.jpg",
            category: "mugs",
            price: 25000
          },
          {
            id: 24,
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
            id: 25,
            title: "Cojín",
            image: "/images/products/pillow1.jpg",
            category: "cojines",
            price: 25000
          },
          {
            id: 26,
            title: "Cojín",
            image: "/images/products/pillow2.jpg",
            category: "cojines",
            price: 30000
          },
          {
            id: 27,
            title: "Cojín",
            image: "/images/products/pillow3.jpg",
            category: "cojines",
            price: 25000
          },
          {
            id: 28,
            title: "Cojín",
            image: "/images/products/pillow4.jpg",
            category: "cojines",
            price: 30000
          },
          {
            id: 29,
            title: "Cojín",
            image: "/images/products/pillow1.jpg",
            category: "cojines",
            price: 25000
          },
          {
            id: 30,
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
            id: 31,
            title: "Stickers",
            image: "/images/products/sticker1.jpg",
            category: "stickers",
            price: 25000
          },
          {
            id: 32,
            title: "Stickers",
            image: "/images/products/sticker2.jpg",
            category: "stickers",
            price: 30000
          },
          {
            id: 33,
            title: "Stickers",
            image: "/images/products/sticker3.jpg",
            category: "stickers",
            price: 25000
          },
          {
            id: 34,
            title: "Stickers",
            image: "/images/products/sticker1.jpg",
            category: "stickers",
            price: 30000
          },
          {
            id: 35,
            title: "Stickers",
            image: "/images/products/sticker2.jpg",
            category: "stickers",
            price: 25000
          },
          {
            id: 36,
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
            id: 37,
            title: "Gorra",
            image: "/images/products/hat1.jpg",
            category: "gorras",
            price: 25000
          },
          {
            id: 38,
            title: "Gorra",
            image: "/images/products/hat2.jpg",
            category: "gorras",
            price: 30000
          },
          {
            id: 39,
            title: "Gorra",
            image: "/images/products/hat3.jpg",
            category: "gorras",
            price: 25000
          },
          {
            id: 40,
            title: "Gorra",
            image: "/images/products/hat1.jpg",
            category: "gorras",
            price: 25000
          },
          {
            id: 41,
            title: "Gorra",
            image: "/images/products/hat2.jpg",
            category: "gorras",
            price: 30000
          },
          {
            id: 43,
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
            id: 44,
            title: "Botella",
            image: "/images/products/bottle1.jpg",
            category: "botellas",
            price: 25000
          },
          {
            id: 45,
            title: "Botella",
            image: "/images/products/bottle2.jpg",
            category: "botellas",
            price: 30000
          },
          {
            id: 46,
            title: "Botella",
            image: "/images/products/bottle3.jpg",
            category: "botellas",
            price: 25000
          },
          {
            id: 47,
            title: "Botella",
            image: "/images/products/bottle4.jpg",
            category: "botellas",
            price: 25000
          },
          {
            id: 48,
            title: "Botella",
            image: "/images/products/bottle5.jpg",
            category: "botellas",
            price: 30000
          },
          {
            id: 49,
            title: "Botella",
            image: "/images/products/bottle1.jpg",
            category: "botellas",
            price: 25000
          }

        ];
    }

    res.render("products/products", { products, category })
  },
  detail: (req, res) => {
    const id = req.params.id;
    const products = [
      {
        id: 8,
        title: "Camiseta",
        image: "/images/products/t-shirt1.jpg",
        category: "camisetas",
        price: 25000
      },
      {
        id: 9,
        title: "Camiseta",
        image: "/images/products/t-shirt2.jpg",
        category: "camisetas",
        price: 30000
      },
      {
        id: 10,
        title: "Camiseta",
        image: "/images/products/t-shirt3.jpg",
        category: "camisetas",
        price: 25000
      },
      {
        id: 11,
        title: "Camiseta",
        image: "/images/products/t-shirt4.jpg",
        category: "camisetas",
        price: 30000
      },
      {
        id: 11,
        title: "Camiseta",
        image: "/images/products/t-shirt5.jpg",
        category: "camisetas",
        price: 25000
      },
      {
        id: 12,
        title: "Camiseta",
        image: "/images/products/t-shirt1.jpg",
        category: "camisetas",
        price: 30000
      },
      {
        id: 13,
        title: "Hoddie",
        image: "/images/products/hoddie.jpg",
        category: "hoddies",
        price: 25000
      },
      {
        id: 14,
        title: "Hoddie",
        image: "/images/products/hoddie2.jpg",
        category: "hoddies",
        price: 30000
      },
      {
        id: 15,
        title: "Hoddie",
        image: "/images/products/hoddie3.jpg",
        category: "hoddies",
        price: 25000
      },
      {
        id: 16,
        title: "Hoddie",
        image: "/images/products/hoddie4.jpg",
        category: "hoddies",
        price: 30000
      },
      {
        id: 17,
        title: "Hoddies",
        image: "/images/products/hoddie.jpg",
        category: "hoddies",
        price: 25000
      },
      {
        id: 18,
        title: "Hoddie",
        image: "/images/products/hoddie2.jpg",
        category: "hoddies",
        price: 30000
      },
      {
        id: 19,
        title: "Mug",
        image: "/images/products/mug1.jpg",
        category: "mugs",
        price: 25000
      },
      {
        id: 20,
        title: "Mug",
        image: "/images/products/mug2.jpg",
        category: "mugs",
        price: 30000
      },
      {
        id: 21,
        title: "Mug",
        image: "/images/products/mug3.jpg",
        category: "mugs",
        price: 25000
      },
      {
        id: 22,
        title: "Mug",
        image: "/images/products/mug4.jpg",
        category: "mugs",
        price: 30000
      },
      {
        id: 23,
        title: "Mug",
        image: "/images/products/mug1.jpg",
        category: "mugs",
        price: 25000
      },
      {
        id: 24,
        title: "Mug",
        image: "/images/products/mug2.jpg",
        category: "mugs",
        price: 30000
      },
      {
        id: 25,
        title: "Cojín",
        image: "/images/products/pillow1.jpg",
        category: "cojines",
        price: 25000
      },
      {
        id: 26,
        title: "Cojín",
        image: "/images/products/pillow2.jpg",
        category: "cojines",
        price: 30000
      },
      {
        id: 27,
        title: "Cojín",
        image: "/images/products/pillow3.jpg",
        category: "cojines",
        price: 25000
      },
      {
        id: 28,
        title: "Cojín",
        image: "/images/products/pillow4.jpg",
        category: "cojines",
        price: 30000
      },
      {
        id: 29,
        title: "Cojín",
        image: "/images/products/pillow1.jpg",
        category: "cojines",
        price: 25000
      },
      {
        id: 30,
        title: "Cojín",
        image: "/images/products/pillow2.jpg",
        category: "cojines",
        price: 30000
      },
      {
        id: 31,
        title: "Stickers",
        image: "/images/products/sticker1.jpg",
        category: "stickers",
        price: 25000
      },
      {
        id: 32,
        title: "Stickers",
        image: "/images/products/sticker2.jpg",
        category: "stickers",
        price: 30000
      },
      {
        id: 33,
        title: "Stickers",
        image: "/images/products/sticker3.jpg",
        category: "stickers",
        price: 25000
      },
      {
        id: 34,
        title: "Stickers",
        image: "/images/products/sticker1.jpg",
        category: "stickers",
        price: 30000
      },
      {
        id: 35,
        title: "Stickers",
        image: "/images/products/sticker2.jpg",
        category: "stickers",
        price: 25000
      },
      {
        id: 36,
        title: "Stickers",
        image: "/images/products/sticker3.jpg",
        category: "stickers",
        price: 30000
      },
      {
        id: 37,
        title: "Gorra",
        image: "/images/products/hat1.jpg",
        category: "gorras",
        price: 25000
      },
      {
        id: 38,
        title: "Gorra",
        image: "/images/products/hat2.jpg",
        category: "gorras",
        price: 30000
      },
      {
        id: 39,
        title: "Gorra",
        image: "/images/products/hat3.jpg",
        category: "gorras",
        price: 25000
      },
      {
        id: 40,
        title: "Gorra",
        image: "/images/products/hat1.jpg",
        category: "gorras",
        price: 25000
      },
      {
        id: 41,
        title: "Gorra",
        image: "/images/products/hat2.jpg",
        category: "gorras",
        price: 30000
      },
      {
        id: 43,
        title: "Gorra",
        image: "/images/products/hat3.jpg",
        category: "gorras",
        price: 25000
      },
      {
        id: 44,
        title: "Botella",
        image: "/images/products/bottle1.jpg",
        category: "botellas",
        price: 25000
      },
      {
        id: 45,
        title: "Botella",
        image: "/images/products/bottle2.jpg",
        category: "botellas",
        price: 30000
      },
      {
        id: 46,
        title: "Botella",
        image: "/images/products/bottle3.jpg",
        category: "botellas",
        price: 25000
      },
      {
        id: 47,
        title: "Botella",
        image: "/images/products/bottle4.jpg",
        category: "botellas",
        price: 25000
      },
      {
        id: 48,
        title: "Botella",
        image: "/images/products/bottle5.jpg",
        category: "botellas",
        price: 30000
      },
      {
        id: 49,
        title: "Botella",
        image: "/images/products/bottle1.jpg",
        category: "botellas",
        price: 25000
      }
    ]

    const product = products.find(product => product.id == id);
    res.render("products/productDetail", { product })
  },
  login: (req, res) => { res.render("products/login") },
  register: (req, res) => { res.render("products/register") },
  cart: (req, res) => { res.render("products/productCart") },
  addEditProduct: (req, res) => { res.render("users/add-edit-Product") },
  addProduct: (req, res) => { res.render("users/addProduct") },
  editProduct: (req, res) => { res.render("users/editProduct") },
}

module.exports = controller;

