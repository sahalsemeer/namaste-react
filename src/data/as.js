// Complete Restaurant Menu Data with verified working images
const restaurantsMenuData = [
    {
      id: "1072642",
      name: "Babai Hotel - Since 1942",
      city: "Bangalore",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Andhra", "South Indian"],
      avgRating: 4.4,
      totalRatings: 494,
      deliveryTime: "25-30 MINS",
      promoted: true,
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/31/b3bc3948-a30f-4fd6-9dd1-740d36bd0a9c_1072642.jpg",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "169595167",
              name: "Ghee Ullikaram Dosa",
              description: "Crisp dosa topped with onion and red chilli paste",
              price: 140,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_262087.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 32
            },
            {
              id: "169595156",
              name: "Plain Idli",
              description: "Soft steamed idlis with chutney",
              price: 65,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/257e9a0c-c9f8-42e0-87a2-06ec70b88e52_569517.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 102
            },
            {
              id: "169595180",
              name: "Gongura Chicken",
              description: "Spicy chicken cooked with sorrel leaves",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/f4d9c632-7cfa-4d72-b4b0-3cee42fb9543_253698.jpg",
              isVeg: false,
              rating: 4.6,
              ratingCount: 89
            }
          ]
        },
        {
          category: "Dosa",
          items: [
            {
              id: "169595167",
              name: "Ghee Ullikaram Dosa",
              description: "Crisp dosa topped with onion and red chilli paste",
              price: 140,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_262087.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 32
            },
            {
              id: "169595173",
              name: "Plain Dosa",
              description: "Classic crispy dosa served with chutney",
              price: 90,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/e0a1dd80-7737-4f9a-9358-6d0366b17b5e_465662.jpg",
              isVeg: true,
              rating: 4.1,
              ratingCount: 18
            },
            {
              id: "169595174",
              name: "Masala Dosa",
              description: "Crispy dosa filled with spiced potato masala",
              price: 110,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/8f6a1a0c-e3d5-4f55-9cc0-9f2e95fd3f0f_750423.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 67
            },
            {
              id: "169595175",
              name: "Mysore Masala Dosa",
              description: "Spicy red chutney spread with potato filling",
              price: 130,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/8/99c5d863-c6ca-49af-9989-17be633c5c35_53371.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 45
            }
          ]
        },
        {
          category: "Idli & Vada",
          items: [
            {
              id: "169595156",
              name: "Plain Idli",
              description: "Soft steamed idlis with chutney",
              price: 65,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/257e9a0c-c9f8-42e0-87a2-06ec70b88e52_569517.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 102
            },
            {
              id: "169595157",
              name: "Ghee Podi Idli",
              description: "Idlis tossed in ghee and spiced powder",
              price: 85,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/b5e6f92e-a09e-4720-894e-2d735ed7b8fc_568791.JPG",
              isVeg: true,
              rating: 4.4,
              ratingCount: 56
            },
            {
              id: "169595158",
              name: "Medu Vada",
              description: "Crispy lentil donuts served with sambar",
              price: 75,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/f1ecde81-e55f-49fb-9b0a-f0e12d4e8a9b_387457.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 41
            }
          ]
        },
        {
          category: "Andhra Specials",
          items: [
            {
              id: "169595180",
              name: "Gongura Chicken",
              description: "Spicy chicken cooked with sorrel leaves",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/f4d9c632-7cfa-4d72-b4b0-3cee42fb9543_253698.jpg",
              isVeg: false,
              rating: 4.6,
              ratingCount: 89
            },
            {
              id: "169595181",
              name: "Gongura Mutton",
              description: "Tender mutton in tangy gongura gravy",
              price: 340,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/0e188e64-7b86-4693-9fcb-3b13f8d60f9b_695653.JPG",
              isVeg: false,
              rating: 4.7,
              ratingCount: 67
            }
          ]
        }
      ]
    },
    {
      id: "234567",
      name: "Meghana Foods",
      city: "Bangalore",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "North Indian"],
      avgRating: 4.5,
      totalRatings: 12500,
      deliveryTime: "30-35 MINS",
      promoted: false,
      cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "234001",
              name: "Chicken Biryani",
              description: "Aromatic chicken biryani with raita",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30c-7c86-4d46-b598-c888739a5e5c_622202.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.6,
              ratingCount: 5420
            },
            {
              id: "234010",
              name: "Chicken 65",
              description: "Spicy fried chicken starter",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/f0415a30-5e6c-4d37-9344-3e6b0d93854b_568791.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2100
            },
            {
              id: "234002",
              name: "Mutton Biryani",
              description: "Tender mutton pieces cooked in fragrant rice",
              price: 350,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/9ce84806-d1f0-4570-a3ba-95ea7a6b57ed_387457.jpg",
              isVeg: false,
              rating: 4.7,
              ratingCount: 3200
            }
          ]
        },
        {
          category: "Biryani",
          items: [
            {
              id: "234001",
              name: "Chicken Biryani",
              description: "Aromatic chicken biryani with raita",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30c-7c86-4d46-b598-c888739a5e5c_622202.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.6,
              ratingCount: 5420
            },
            {
              id: "234002",
              name: "Mutton Biryani",
              description: "Tender mutton pieces cooked in fragrant rice",
              price: 350,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/9ce84806-d1f0-4570-a3ba-95ea7a6b57ed_387457.jpg",
              isVeg: false,
              rating: 4.7,
              ratingCount: 3200
            },
            {
              id: "234003",
              name: "Veg Biryani",
              description: "Mixed vegetables cooked with basmati rice",
              price: 220,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/b4f3e05a-e1df-4191-bf7d-c9a41b868f15_750423.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 890
            },
            {
              id: "234004",
              name: "Egg Biryani",
              description: "Boiled eggs layered with spiced rice",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/30/be2ca2c9-01a4-47cb-94ad-85c6f9df5833_465662.jpg",
              isVeg: false,
              rating: 4.3,
              ratingCount: 1240
            }
          ]
        },
        {
          category: "Starters",
          items: [
            {
              id: "234010",
              name: "Chicken 65",
              description: "Spicy fried chicken starter",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/f0415a30-5e6c-4d37-9344-3e6b0d93854b_568791.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2100
            },
            {
              id: "234011",
              name: "Chicken Lollipop",
              description: "Fried chicken drumsticks in spicy sauce",
              price: 200,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/25/bb7ec7a6-8e95-4f95-9e10-a8b6a0c08a64_53371.jpg",
              isVeg: false,
              rating: 4.4,
              ratingCount: 1560
            },
            {
              id: "234012",
              name: "Gobi 65",
              description: "Crispy fried cauliflower starter",
              price: 150,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/e3b5e2d8-3c88-4a6f-906f-9e8a5e8e8e8e_262087.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 890
            }
          ]
        },
        {
          category: "Gravies",
          items: [
            {
              id: "234030",
              name: "Butter Chicken",
              description: "Creamy tomato-based chicken curry",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/c92c0c22-5a39-4e4f-9f96-8e8a5e8e8e8e_695653.JPG",
              isVeg: false,
              rating: 4.5,
              ratingCount: 2340
            },
            {
              id: "234031",
              name: "Kadai Paneer",
              description: "Paneer cooked with bell peppers in spicy gravy",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/dd3cb9cc-f0e0-4f45-9e7a-3e6b0d93854b_569517.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 1450
            }
          ]
        },
        {
          category: "Breads",
          items: [
            {
              id: "234040",
              name: "Butter Naan",
              description: "Soft naan brushed with butter",
              price: 45,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/089de4c5-52e9-4b40-8010-e52bfa2f31c0_622202.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 1890
            },
            {
              id: "234041",
              name: "Garlic Naan",
              description: "Naan topped with garlic and coriander",
              price: 55,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/cce1ab6e-dd90-48c8-9c6e-e8a5e8e8e8e8_253698.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 1560
            }
          ]
        }
      ]
    },
    {
      id: "345678",
      name: "Pizza Hut",
      city: "Bangalore",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizza", "Fast Food", "Italian"],
      avgRating: 4.2,
      totalRatings: 8900,
      deliveryTime: "35-40 MINS",
      promoted: false,
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "345002",
              name: "Pepperoni Pizza",
              description: "Loaded with pepperoni and cheese",
              price: 499,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e0f8b1e8-7f5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 5600
            },
            {
              id: "345001",
              name: "Margherita Pizza",
              description: "Classic cheese and tomato pizza",
              price: 299,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/bbf5e4e8-7f5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3400
            }
          ]
        },
        {
          category: "Pizzas",
          items: [
            {
              id: "345001",
              name: "Margherita Pizza",
              description: "Classic cheese and tomato pizza",
              price: 299,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/bbf5e4e8-7f5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3400
            },
            {
              id: "345002",
              name: "Pepperoni Pizza",
              description: "Loaded with pepperoni and cheese",
              price: 499,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e0f8b1e8-7f5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 5600
            },
            {
              id: "345003",
              name: "Farmhouse Pizza",
              description: "Loaded with fresh vegetables",
              price: 399,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/10/d5e6f7e8-9a5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 2200
            },
            {
              id: "345004",
              name: "BBQ Chicken Pizza",
              description: "Grilled chicken with BBQ sauce",
              price: 549,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/30/f6e7f8e9-0b5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: false,
              rating: 4.4,
              ratingCount: 3890
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              id: "345010",
              name: "Garlic Breadsticks",
              description: "Crispy breadsticks with garlic butter",
              price: 149,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/15/a7b8c9d0-1c5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.1,
              ratingCount: 890
            },
            {
              id: "345011",
              name: "Cheese Garlic Bread",
              description: "Garlic bread loaded with cheese",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/b8c9d0e1-2d5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 1230
            },
            {
              id: "345012",
              name: "Chicken Wings",
              description: "Spicy buffalo chicken wings",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/c9d0e1f2-3e5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              rating: 4.4,
              ratingCount: 1560
            }
          ]
        }
      ]
    },
    {
      id: "456789",
      name: "KFC - Kentucky Fried Chicken",
      city: "Bangalore",
      locality: "MG Road",
      areaName: "MG Road",
      costForTwo: "₹450 for two",
      cuisines: ["Fast Food", "Chicken", "American"],
      avgRating: 4.3,
      totalRatings: 15600,
      deliveryTime: "25-30 MINS",
      promoted: true,
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "456001",
              name: "Hot & Crispy Chicken",
              description: "8 pieces of signature fried chicken",
              price: 599,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/d0e1f2g3-4f5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 8900
            },
            {
              id: "456010",
              name: "Zinger Burger",
              description: "Spicy chicken burger with mayo",
              price: 189,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/e1f2g3h4-5g5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 6700
            }
          ]
        },
        {
          category: "Chicken Buckets",
          items: [
            {
              id: "456001",
              name: "Hot & Crispy Chicken",
              description: "8 pieces of signature fried chicken",
              price: 599,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/d0e1f2g3-4f5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 8900
            },
            {
              id: "456002",
              name: "Popcorn Chicken",
              description: "Bite-sized crispy chicken pieces",
              price: 199,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/f2g3h4i5-6h5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              rating: 4.3,
              ratingCount: 4500
            },
            {
              id: "456003",
              name: "Chicken Wings",
              description: "6 pieces of hot & crispy wings",
              price: 279,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/g3h4i5j6-7i5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: false,
              rating: 4.4,
              ratingCount: 3200
            }
          ]
        },
        {
          category: "Burgers",
          items: [
            {
              id: "456010",
              name: "Zinger Burger",
              description: "Spicy chicken burger with mayo",
              price: 189,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/e1f2g3h4-5g5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 6700
            },
            {
              id: "456011",
              name: "Veg Zinger",
              description: "Crispy veg patty burger",
              price: 169,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/h4i5j6k7-8j5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.0,
              ratingCount: 2300
            },
            {
              id: "456012",
              name: "Classic Chicken Burger",
              description: "Original recipe chicken burger",
              price: 159,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/12/i5j6k7l8-9k5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: false,
              rating: 4.2,
              ratingCount: 3400
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              id: "456030",
              name: "French Fries",
              description: "Crispy salted fries",
              price: 99,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/22/j6k7l8m9-0l5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.1,
              ratingCount: 5600
            },
            {
              id: "456031",
              name: "Peri Peri Fries",
              description: "Fries tossed in peri peri spice",
              price: 119,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/10/k7l8m9n0-1m5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3400
            }
          ]
        }
      ]
    },
    {
      id: "567890",
      name: "Truffles",
      city: "Bangalore",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹450 for two",
      cuisines: ["American", "Continental", "Desserts"],
      avgRating: 4.5,
      totalRatings: 22000,
      deliveryTime: "30-35 MINS",
      promoted: false,
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "567001",
              name: "Mushroom Burger",
              description: "Grilled mushroom with cheese",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/28/l8m9n0o1-2n5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.6,
              ratingCount: 8900
            },
            {
              id: "567010",
              name: "Oreo Shake",
              description: "Thick shake loaded with Oreo cookies",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/3/m9n0o1p2-3o5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.7,
              ratingCount: 5400
            }
          ]
        },
        {
          category: "Burgers",
          items: [
            {
              id: "567001",
              name: "Mushroom Burger",
              description: "Grilled mushroom with cheese",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/28/l8m9n0o1-2n5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.6,
              ratingCount: 8900
            },
            {
              id: "567002",
              name: "Chicken Burger",
              description: "Juicy chicken patty with special sauce",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/15/n0o1p2q3-4p5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: false,
              rating: 4.5,
              ratingCount: 7600
            },
            {
              id: "567003",
              name: "BBQ Bacon Burger",
              description: "Beef patty with bacon and BBQ sauce",
              price: 320,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/5/o1p2q3r4-5q5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              rating: 4.6,
              ratingCount: 5600
            }
          ]
        },
        {
          category: "Shakes",
          items: [
            {
              id: "567010",
              name: "Oreo Shake",
              description: "Thick shake loaded with Oreo cookies",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/3/m9n0o1p2-3o5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.7,
              ratingCount: 5400
            },
            {
              id: "567011",
              name: "Chocolate Shake",
              description: "Rich chocolate thick shake",
              price: 160,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/10/p2q3r4s5-6r5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.5,
              ratingCount: 4200
            },
            {
              id: "567012",
              name: "KitKat Shake",
              description: "Shake with crushed KitKat",
              price: 190,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/q3r4s5t6-7s5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.6,
              ratingCount: 3890
            }
          ]
        },
        {
          category: "Appetizers",
          items: [
            {
              id: "567020",
              name: "Loaded Nachos",
              description: "Nachos with cheese, jalapeños and salsa",
              price: 220,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/r4s5t6u7-8t5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 2340
            },
            {
              id: "567021",
              name: "Chicken Wings",
              description: "Spicy buffalo wings with ranch",
              price: 280,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/s5t6u7v8-9u5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: false,
              rating: 4.5,
              ratingCount: 3200
            }
          ]
        }
      ]
    },
    {
      id: "678901",
      name: "Domino's Pizza",
      city: "Bangalore",
      locality: "BTM Layout",
      areaName: "BTM",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Fast Food", "Italian"],
      avgRating: 4.3,
      totalRatings: 9800,
      deliveryTime: "25-30 MINS",
      promoted: false,
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "678001",
              name: "Farmhouse Pizza",
              description: "Loaded with fresh vegetables",
              price: 349,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/7/t6u7v8w9-0v5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 4200
            },
            {
              id: "678002",
              name: "Peppy Paneer Pizza",
              description: "Paneer and capsicum pizza",
              price: 399,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/2/u7v8w9x0-1w5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3800
            }
          ]
        },
        {
          category: "Pizzas",
          items: [
            {
              id: "678001",
              name: "Farmhouse Pizza",
              description: "Loaded with fresh vegetables",
              price: 349,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/7/t6u7v8w9-0v5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 4200
            },
            {
              id: "678002",
              name: "Peppy Paneer Pizza",
              description: "Paneer and capsicum pizza",
              price: 399,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/2/u7v8w9x0-1w5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3800
            },
            {
              id: "678003",
              name: "Chicken Dominator",
              description: "Loaded chicken pizza",
              price: 549,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/15/v8w9x0y1-2x5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: false,
              rating: 4.5,
              ratingCount: 5100
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              id: "678010",
              name: "Stuffed Garlic Bread",
              description: "Garlic bread with cheese filling",
              price: 139,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/w9x0y1z2-3y5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 2100
            },
            {
              id: "678011",
              name: "Choco Lava Cake",
              description: "Hot chocolate lava cake",
              price: 99,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/12/x0y1z2a3-4z5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.6,
              ratingCount: 3200
            }
          ]
        }
      ]
    },
    {
      id: "789012",
      name: "Chinese Wok",
      city: "Bangalore",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Tibetan"],
      avgRating: 4.2,
      totalRatings: 7200,
      deliveryTime: "30-35 MINS",
      promoted: false,
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "789001",
              name: "Hakka Noodles",
              description: "Stir-fried noodles with vegetables",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/y1z2a3b4-5a5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              isBestseller: true,
              rating: 4.3,
              ratingCount: 3200
            },
            {
              id: "789002",
              name: "Chilli Chicken",
              description: "Spicy Indo-Chinese chicken",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/16/z2a3b4c5-6b5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: false,
              rating: 4.4,
              ratingCount: 2800
            }
          ]
        },
        {
          category: "Noodles",
          items: [
            {
              id: "789001",
              name: "Hakka Noodles",
              description: "Stir-fried noodles with vegetables",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/y1z2a3b4-5a5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              isBestseller: true,
              rating: 4.3,
              ratingCount: 3200
            },
            {
              id: "789003",
              name: "Schezwan Noodles",
              description: "Spicy Schezwan flavored noodles",
              price: 200,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/a3b4c5d6-7c5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 2100
            }
          ]
        },
        {
          category: "Starters",
          items: [
            {
              id: "789002",
              name: "Chilli Chicken",
              description: "Spicy Indo-Chinese chicken",
              price: 240,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/16/z2a3b4c5-6b5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: false,
              rating: 4.4,
              ratingCount: 2800
            },
            {
              id: "789010",
              name: "Veg Manchurian",
              description: "Deep fried veggie balls in sauce",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/b4c5d6e7-8d5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.1,
              ratingCount: 1800
            }
          ]
        }
      ]
    },
    {
      id: "890123",
      name: "The Bowl Company",
      city: "Bangalore",
      locality: "HSR Layout",
      areaName: "HSR",
      costForTwo: "₹300 for two",
      cuisines: ["Rice Bowls", "North Indian", "Continental"],
      avgRating: 4.4,
      totalRatings: 5600,
      deliveryTime: "25-30 MINS",
      promoted: true,
      cloudinaryImageId: "94d7ee9ab8895dd84dcdba08ffd173a6",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "890001",
              name: "Butter Chicken Bowl",
              description: "Butter chicken with rice",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/c5d6e7f8-9e5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2800
            },
            {
              id: "890002",
              name: "Paneer Tikka Bowl",
              description: "Paneer tikka with rice",
              price: 229,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/d6e7f8g9-0f5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.4,
              ratingCount: 2100
            }
          ]
        },
        {
          category: "Rice Bowls",
          items: [
            {
              id: "890001",
              name: "Butter Chicken Bowl",
              description: "Butter chicken with rice",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/c5d6e7f8-9e5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2800
            },
            {
              id: "890002",
              name: "Paneer Tikka Bowl",
              description: "Paneer tikka with rice",
              price: 229,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/d6e7f8g9-0f5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.4,
              ratingCount: 2100
            },
            {
              id: "890003",
              name: "Chicken Tikka Bowl",
              description: "Chicken tikka with rice",
              price: 259,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/e7f8g9h0-1g5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: false,
              rating: 4.5,
              ratingCount: 1900
            }
          ]
        }
      ]
    },
    {
      id: "901234",
      name: "Burger King",
      city: "Bangalore",
      locality: "Bannerghatta Road",
      areaName: "Bannerghatta",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      totalRatings: 11200,
      deliveryTime: "30-35 MINS",
      promoted: false,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "901001",
              name: "Whopper",
              description: "Flame grilled beef burger",
              price: 189,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/f8g9h0i1-2h5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 5600
            },
            {
              id: "901002",
              name: "Veg Whopper",
              description: "Flame grilled veg patty burger",
              price: 169,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/g9h0i1j2-3i5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 3200
            }
          ]
        },
        {
          category: "Burgers",
          items: [
            {
              id: "901001",
              name: "Whopper",
              description: "Flame grilled beef burger",
              price: 189,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/f8g9h0i1-2h5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 5600
            },
            {
              id: "901002",
              name: "Veg Whopper",
              description: "Flame grilled veg patty burger",
              price: 169,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/g9h0i1j2-3i5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 3200
            },
            {
              id: "901003",
              name: "Chicken Whopper",
              description: "Flame grilled chicken burger",
              price: 199,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/h0i1j2k3-4j5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: false,
              rating: 4.3,
              ratingCount: 4100
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              id: "901010",
              name: "French Fries",
              description: "Crispy golden fries",
              price: 99,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/i1j2k3l4-5k5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.1,
              ratingCount: 2800
            },
            {
              id: "901011",
              name: "Onion Rings",
              description: "Crispy fried onion rings",
              price: 119,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/1/j2k3l4m5-6l5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 1900
            }
          ]
        }
      ]
    },
    {
      id: "112345",
      name: "Behrouz Biryani",
      city: "Bangalore",
      locality: "Electronic City",
      areaName: "Electronic City",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 4.3,
      totalRatings: 8900,
      deliveryTime: "35-40 MINS",
      promoted: false,
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "112001",
              name: "Dum Gosht Biryani",
              description: "Slow cooked mutton biryani",
              price: 399,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/k3l4m5n6-7m5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 4200
            },
            {
              id: "112002",
              name: "Murgh Lababdar Biryani",
              description: "Chicken in rich creamy gravy with rice",
              price: 349,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/10/l4m5n6o7-8n5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              rating: 4.4,
              ratingCount: 3600
            }
          ]
        },
        {
          category: "Biryani",
          items: [
            {
              id: "112001",
              name: "Dum Gosht Biryani",
              description: "Slow cooked mutton biryani",
              price: 399,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/k3l4m5n6-7m5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 4200
            },
            {
              id: "112002",
              name: "Murgh Lababdar Biryani",
              description: "Chicken in rich creamy gravy with rice",
              price: 349,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/10/l4m5n6o7-8n5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              rating: 4.4,
              ratingCount: 3600
            },
            {
              id: "112003",
              name: "Subz-E-Biryani",
              description: "Royal vegetable biryani",
              price: 299,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/10/m5n6o7p8-9o5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 2100
            }
          ]
        },
        {
          category: "Kebabs",
          items: [
            {
              id: "112010",
              name: "Murgh Seekh Kebab",
              description: "Minced chicken kebabs",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/n6o7p8q9-0p5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: false,
              rating: 4.3,
              ratingCount: 1800
            },
            {
              id: "112011",
              name: "Paneer Tikka",
              description: "Grilled cottage cheese cubes",
              price: 229,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/o7p8q9r0-1q5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.2,
              ratingCount: 1400
            }
          ]
        }
      ]
    },
    {
      id: "223456",
      name: "Subway",
      city: "Bangalore",
      locality: "Marathahalli",
      areaName: "Marathahalli",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.1,
      totalRatings: 6700,
      deliveryTime: "25-30 MINS",
      promoted: false,
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "223001",
              name: "Chicken Teriyaki Sub",
              description: "Grilled chicken with teriyaki sauce",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/p8q9r0s1-2r5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.3,
              ratingCount: 2800
            },
            {
              id: "223002",
              name: "Veggie Delite Sub",
              description: "Fresh vegetables with your choice of toppings",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/q9r0s1t2-3s5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.0,
              ratingCount: 2100
            }
          ]
        },
        {
          category: "Subs",
          items: [
            {
              id: "223001",
              name: "Chicken Teriyaki Sub",
              description: "Grilled chicken with teriyaki sauce",
              price: 249,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/p8q9r0s1-2r5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.3,
              ratingCount: 2800
            },
            {
              id: "223002",
              name: "Veggie Delite Sub",
              description: "Fresh vegetables with your choice of toppings",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/q9r0s1t2-3s5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.0,
              ratingCount: 2100
            },
            {
              id: "223003",
              name: "Paneer Tikka Sub",
              description: "Indian spiced paneer sub",
              price: 229,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/7/r0s1t2u3-4t5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 1900
            }
          ]
        },
        {
          category: "Salads",
          items: [
            {
              id: "223010",
              name: "Chicken Caesar Salad",
              description: "Grilled chicken with Caesar dressing",
              price: 269,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/s1t2u3v4-5u5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: false,
              rating: 4.2,
              ratingCount: 1200
            }
          ]
        }
      ]
    },
    {
      id: "334567",
      name: "Starbucks Coffee",
      city: "Bangalore",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Coffee", "Beverages", "Desserts"],
      avgRating: 4.4,
      totalRatings: 13400,
      deliveryTime: "20-25 MINS",
      promoted: false,
      cloudinaryImageId: "182191ab163770437b62861a6f987709",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "334001",
              name: "Caffe Latte",
              description: "Classic espresso with steamed milk",
              price: 295,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/6/t2u3v4w5-6v5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 6700
            },
            {
              id: "334010",
              name: "Java Chip Frappuccino",
              description: "Blended coffee with chocolate chips",
              price: 375,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/u3v4w5x6-7w5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.6,
              ratingCount: 4200
            }
          ]
        },
        {
          category: "Coffee",
          items: [
            {
              id: "334001",
              name: "Caffe Latte",
              description: "Classic espresso with steamed milk",
              price: 295,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/6/t2u3v4w5-6v5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 6700
            },
            {
              id: "334002",
              name: "Cappuccino",
              description: "Espresso with foamed milk",
              price: 285,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/12/v4w5x6y7-8x5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: true,
              rating: 4.4,
              ratingCount: 5400
            },
            {
              id: "334003",
              name: "Caffe Americano",
              description: "Espresso shots with hot water",
              price: 265,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/w5x6y7z8-9y5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 3200
            }
          ]
        },
        {
          category: "Frappuccino",
          items: [
            {
              id: "334010",
              name: "Java Chip Frappuccino",
              description: "Blended coffee with chocolate chips",
              price: 375,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/u3v4w5x6-7w5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.6,
              ratingCount: 4200
            },
            {
              id: "334011",
              name: "Caramel Frappuccino",
              description: "Blended coffee with caramel",
              price: 365,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/25/x6y7z8a9-0z5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.5,
              ratingCount: 3890
            }
          ]
        },
        {
          category: "Food",
          items: [
            {
              id: "334030",
              name: "Chocolate Croissant",
              description: "Buttery croissant with chocolate",
              price: 180,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/20/y7z8a9b0-1a5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 1890
            },
            {
              id: "334031",
              name: "Blueberry Muffin",
              description: "Freshly baked blueberry muffin",
              price: 160,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/18/z8a9b0c1-2b5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 1560
            }
          ]
        }
      ]
    },
    {
      id: "445678",
      name: "Faasos - Wraps & Rolls",
      city: "Bangalore",
      locality: "Jayanagar",
      areaName: "Jayanagar",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "Rolls", "Wraps"],
      avgRating: 4.2,
      totalRatings: 7800,
      deliveryTime: "25-30 MINS",
      promoted: false,
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "445001",
              name: "Chicken Tikka Roll",
              description: "Spicy chicken tikka wrapped in paratha",
              price: 159,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/a9b0c1d2-3c5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 3200
            },
            {
              id: "445002",
              name: "Paneer Tikka Roll",
              description: "Grilled paneer wrapped in paratha",
              price: 139,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/b0c1d2e3-4d5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 2800
            }
          ]
        },
        {
          category: "Rolls",
          items: [
            {
              id: "445001",
              name: "Chicken Tikka Roll",
              description: "Spicy chicken tikka wrapped in paratha",
              price: 159,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/a9b0c1d2-3c5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: false,
              isBestseller: true,
              rating: 4.4,
              ratingCount: 3200
            },
            {
              id: "445002",
              name: "Paneer Tikka Roll",
              description: "Grilled paneer wrapped in paratha",
              price: 139,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/b0c1d2e3-4d5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.3,
              ratingCount: 2800
            },
            {
              id: "445003",
              name: "Egg Roll",
              description: "Egg bhurji wrapped in paratha",
              price: 99,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c1d2e3f4-5e5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: false,
              rating: 4.2,
              ratingCount: 2100
            }
          ]
        },
        {
          category: "Wraps",
          items: [
            {
              id: "445010",
              name: "Chicken Wrap",
              description: "Grilled chicken with fresh veggies",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/11/d2e3f4g5-6f5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: false,
              rating: 4.3,
              ratingCount: 1900
            },
            {
              id: "445011",
              name: "Veg Wrap",
              description: "Mixed vegetables with sauces",
              price: 149,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/e3f4g5h6-7g5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: true,
              rating: 4.1,
              ratingCount: 1400
            }
          ]
        }
      ]
    },
    {
      id: "556789",
      name: "Lean Kitchen",
      city: "Bangalore",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Continental"],
      avgRating: 4.3,
      totalRatings: 4900,
      deliveryTime: "30-35 MINS",
      promoted: false,
      cloudinaryImageId: "29d8e93744cb0d03a8b3903d46381752",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "556001",
              name: "Grilled Chicken Salad Bowl",
              description: "Protein-rich chicken salad bowl",
              price: 299,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/28/f4g5h6i7-8h5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2100
            },
            {
              id: "556002",
              name: "Quinoa Power Bowl",
              description: "Nutritious quinoa with vegetables",
              price: 279,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/g5h6i7j8-9i5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 1800
            }
          ]
        },
        {
          category: "Bowls",
          items: [
            {
              id: "556001",
              name: "Grilled Chicken Salad Bowl",
              description: "Protein-rich chicken salad bowl",
              price: 299,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/28/f4g5h6i7-8h5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: false,
              isBestseller: true,
              rating: 4.5,
              ratingCount: 2100
            },
            {
              id: "556002",
              name: "Quinoa Power Bowl",
              description: "Nutritious quinoa with vegetables",
              price: 279,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/g5h6i7j8-9i5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.4,
              ratingCount: 1800
            },
            {
              id: "556003",
              name: "Buddha Bowl",
              description: "Mix of grains, proteins and vegetables",
              price: 289,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/25/h6i7j8k9-0j5d-4f4f-9f5d-4f4f9f5d4f4f_53371.jpg",
              isVeg: true,
              rating: 4.3,
              ratingCount: 1400
            }
          ]
        },
        {
          category: "Smoothies",
          items: [
            {
              id: "556010",
              name: "Berry Blast Smoothie",
              description: "Mixed berries protein smoothie",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/6/i7j8k9l0-1k5d-4f4f-9f5d-4f4f9f5d4f4f_262087.JPG",
              isVeg: true,
              rating: 4.4,
              ratingCount: 1100
            },
            {
              id: "556011",
              name: "Green Detox Smoothie",
              description: "Spinach, apple and cucumber blend",
              price: 169,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/j8k9l0m1-2l5d-4f4f-9f5d-4f4f9f5d4f4f_569517.JPG",
              isVeg: true,
              rating: 4.2,
              ratingCount: 890
            }
          ]
        }
      ]
    },
    {
      id: "667890",
      name: "Natural Ice Cream",
      city: "Bangalore",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      totalRatings: 18900,
      deliveryTime: "20-25 MINS",
      promoted: true,
      cloudinaryImageId: "18d8b8fb6bac8063a6fa886e20148110",
      menu: [
        {
          category: "Recommended",
          items: [
            {
              id: "667001",
              name: "Tender Coconut Ice Cream",
              description: "Fresh tender coconut ice cream",
              price: 140,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/30/k9l0m1n2-3m5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.8,
              ratingCount: 8900
            },
            {
              id: "667002",
              name: "Sitaphal Ice Cream",
              description: "Custard apple flavored ice cream",
              price: 160,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/l0m1n2o3-4n5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.7,
              ratingCount: 6700
            }
          ]
        },
        {
          category: "Ice Cream",
          items: [
            {
              id: "667001",
              name: "Tender Coconut Ice Cream",
              description: "Fresh tender coconut ice cream",
              price: 140,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/30/k9l0m1n2-3m5d-4f4f-9f5d-4f4f9f5d4f4f_695653.JPG",
              isVeg: true,
              isBestseller: true,
              rating: 4.8,
              ratingCount: 8900
            },
            {
              id: "667002",
              name: "Sitaphal Ice Cream",
              description: "Custard apple flavored ice cream",
              price: 160,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/l0m1n2o3-4n5d-4f4f-9f5d-4f4f9f5d4f4f_622202.JPG",
              isVeg: true,
              rating: 4.7,
              ratingCount: 6700
            },
            {
              id: "667003",
              name: "Mango Ice Cream",
              description: "Fresh alphonso mango ice cream",
              price: 150,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/m1n2o3p4-5o5d-4f4f-9f5d-4f4f9f5d4f4f_568791.JPG",
              isVeg: true,
              rating: 4.6,
              ratingCount: 5400
            },
            {
              id: "667004",
              name: "Strawberry Ice Cream",
              description: "Made with real strawberries",
              price: 145,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/n2o3p4q5-6p5d-4f4f-9f5d-4f4f9f5d4f4f_750423.jpg",
              isVeg: true,
              rating: 4.5,
              ratingCount: 4100
            }
          ]
        },
        {
          category: "Sundae",
          items: [
            {
              id: "667010",
              name: "Brownie Sundae",
              description: "Ice cream with chocolate brownie",
              price: 199,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/o3p4q5r6-7q5d-4f4f-9f5d-4f4f9f5d4f4f_387457.jpg",
              isVeg: true,
              rating: 4.5,
              ratingCount: 3200
            },
            {
              id: "667011",
              name: "Hot Chocolate Fudge Sundae",
              description: "Vanilla ice cream with hot chocolate sauce",
              price: 179,
              imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/14/p4q5r6s7-8r5d-4f4f-9f5d-4f4f9f5d4f4f_465662.jpg",
              isVeg: true,
              rating: 4.6,
              ratingCount: 2890
            }
          ]
        }
      ]
    }
  ];
  
  // Export the data
  export default restaurantsMenuData;
  
  // Helper function to get restaurant by ID
  export const getRestaurantMenuById = (id) => {
    return restaurantsMenuData.find(restaurant => restaurant.id === id);
  };
  
  // Helper function to get image URL with fallback
  export const getImageUrl = (cloudinaryImageId, width = 660) => {
    if (!cloudinaryImageId) {
      return `https://via.placeholder.com/${width}x400?text=No+Image`;
    }
    return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_${width},c_fill/${cloudinaryImageId}`;
  };
  
  // Usage example:
  // import restaurantsMenuData, { getRestaurantMenuById, getImageUrl } from './menuData.js';
  // const restaurant = getRestaurantMenuById("1072642");
  // const imageUrl = getImageUrl(restaurant.menu[0].items[0].imageId);