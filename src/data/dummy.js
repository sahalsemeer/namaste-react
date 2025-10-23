// Restaurant Menu Data - 15 Restaurants with Real Cloudinary Images
const restaurantsData = [
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
    promoted: false,
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/31/b3bc3948-a30f-4fd6-9dd1-740d36bd0a9c_1072642.jpg",
    menu: [
      {
        category: "Dosa",
        items: [
          {
            id: "169595167",
            name: "Ghee Ullikaram Dosa",
            description: "Crisp dosa topped with onion and red chilli paste",
            price: 140,
            imageId: "86a4b00d-3eac-437c-93f0-fbd8d209d2b4",
            isVeg: true,
            rating: 4.3,
            ratingCount: 32
          },
          {
            id: "169595173",
            name: "Plain Dosa",
            description: "Classic crispy dosa served with chutney",
            price: 90,
            imageId: "a198c0ed-6efd-4868-a955-5cd77bf7e11e",
            isVeg: true,
            rating: 4.1,
            ratingCount: 18
          }
        ]
      },
      {
        category: "Idli",
        items: [
          {
            id: "169595156",
            name: "Plain Idli",
            description: "Soft steamed idlis with chutney",
            price: 65,
            imageId: "5de0b00f-b2c4-4d8b-a15f-22cca591ed5e",
            isVeg: true,
            isBestseller: true,
            rating: 4.5,
            ratingCount: 102
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
    promoted: true,
    cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
    menu: [
      {
        category: "Biryani",
        items: [
          {
            id: "234001",
            name: "Chicken Biryani",
            description: "Aromatic chicken biryani with raita",
            price: 280,
            imageId: "adgkxc3yvg0vgzqnwfdk",
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
            imageId: "avdvtkqxhcqqzqrkdkyi",
            isVeg: false,
            rating: 4.7,
            ratingCount: 3200
          },
          {
            id: "234003",
            name: "Veg Biryani",
            description: "Mixed vegetables cooked with basmati rice",
            price: 220,
            imageId: "tyobczni1o0vaf9dqx0c",
            isVeg: true,
            rating: 4.2,
            ratingCount: 890
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
            imageId: "kkboqe3zjvdxhzevjmib",
            isVeg: false,
            isBestseller: true,
            rating: 4.5,
            ratingCount: 2100
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
        category: "Pizzas",
        items: [
          {
            id: "345001",
            name: "Margherita Pizza",
            description: "Classic cheese and tomato pizza",
            price: 299,
            imageId: "bz9zkh2aqjtpjjy7os6n",
            isVeg: true,
            rating: 4.3,
            ratingCount: 3400
          },
          {
            id: "345002",
            name: "Pepperoni Pizza",
            description: "Loaded with pepperoni and cheese",
            price: 499,
            imageId: "sboh9btdjjxf8jnhvegn",
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
            imageId: "tpqpsl5xvdxbjiilpttj",
            isVeg: true,
            rating: 4.2,
            ratingCount: 2200
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
            imageId: "zpsdqtxwnqqpmjsohocy",
            isVeg: true,
            rating: 4.1,
            ratingCount: 890
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
        category: "Chicken Buckets",
        items: [
          {
            id: "456001",
            name: "Hot & Crispy Chicken",
            description: "8 pieces of signature fried chicken",
            price: 599,
            imageId: "bdcd233971b7c81bf77e1fa4471280eb",
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
            imageId: "c54b1fb6e08fe25d6cf3d5bc84f8dac9",
            isVeg: false,
            rating: 4.3,
            ratingCount: 4500
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
            imageId: "qiuejyp6tcbphzkwqakm",
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
            imageId: "usnosjwhb1cmksuazal0",
            isVeg: true,
            rating: 4.0,
            ratingCount: 2300
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
    promoted: true,
    cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
    menu: [
      {
        category: "Burgers",
        items: [
          {
            id: "567001",
            name: "Mushroom Burger",
            description: "Grilled mushroom with cheese",
            price: 240,
            imageId: "swiggy_burger_1.jpg",
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
            imageId: "swiggy_chicken_burger.jpg",
            isVeg: false,
            rating: 4.5,
            ratingCount: 7600
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
            imageId: "kdwpflhqczkkm0yqqlxz",
            isVeg: true,
            rating: 4.7,
            ratingCount: 5400
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
    totalRatings: 18900,
    deliveryTime: "25-30 MINS",
    promoted: false,
    cloudinaryImageId: "jpvvpv4zsqhsp3sh4dqm",
    menu: [
      {
        category: "Pizzas",
        items: [
          {
            id: "678001",
            name: "Cheese & Corn Pizza",
            description: "Classic corn and cheese pizza",
            price: 249,
            imageId: "pbfjh4vkmhynqbsw3nvm",
            isVeg: true,
            isBestseller: true,
            rating: 4.4,
            ratingCount: 7800
          },
          {
            id: "678002",
            name: "Chicken Dominator",
            description: "Loaded with chicken toppings",
            price: 449,
            imageId: "blwqdgddsshqsfqgywaz",
            isVeg: false,
            rating: 4.5,
            ratingCount: 6200
          }
        ]
      },
      {
        category: "Sides",
        items: [
          {
            id: "678010",
            name: "Stuffed Garlic Bread",
            description: "Garlic bread stuffed with cheese",
            price: 129,
            imageId: "zpsdqtxwnqqpmjsohocy",
            isVeg: true,
            rating: 4.2,
            ratingCount: 3400
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
    totalRatings: 6700,
    deliveryTime: "30-35 MINS",
    promoted: false,
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    menu: [
      {
        category: "Noodles",
        items: [
          {
            id: "789001",
            name: "Veg Hakka Noodles",
            description: "Stir-fried noodles with vegetables",
            price: 180,
            imageId: "dlkkxv4zo8dkpmnpzvaq",
            isVeg: true,
            rating: 4.3,
            ratingCount: 2300
          },
          {
            id: "789002",
            name: "Chicken Schezwan Noodles",
            description: "Spicy noodles with chicken",
            price: 220,
            imageId: "vnzqjljzjrjoxzcdxvxm",
            isVeg: false,
            isBestseller: true,
            rating: 4.4,
            ratingCount: 3400
          }
        ]
      },
      {
        category: "Rice",
        items: [
          {
            id: "789010",
            name: "Veg Fried Rice",
            description: "Classic Chinese fried rice",
            price: 160,
            imageId: "lhfsimyzgvlrzbchwgmh",
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
    totalRatings: 8900,
    deliveryTime: "25-30 MINS",
    promoted: false,
    cloudinaryImageId: "f4s1tydbqp0hdp78gjgv",
    menu: [
      {
        category: "Rice Bowls",
        items: [
          {
            id: "890001",
            name: "Paneer Tikka Rice Bowl",
            description: "Paneer tikka with flavored rice",
            price: 199,
            imageId: "cxdjpvmhzfvjwlsvhgvs",
            isVeg: true,
            isBestseller: true,
            rating: 4.5,
            ratingCount: 4500
          },
          {
            id: "890002",
            name: "Chicken Tikka Rice Bowl",
            description: "Grilled chicken with rice",
            price: 229,
            imageId: "ldkwxvgp1ampcwymgssy",
            isVeg: false,
            rating: 4.4,
            ratingCount: 3800
          }
        ]
      },
      {
        category: "Biryani Bowls",
        items: [
          {
            id: "890010",
            name: "Chicken Biryani Bowl",
            description: "Single serve biryani with raita",
            price: 249,
            imageId: "adgkxc3yvg0vgzqnwfdk",
            isVeg: false,
            rating: 4.3,
            ratingCount: 2900
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
        category: "Burgers",
        items: [
          {
            id: "901001",
            name: "Whopper",
            description: "Flame-grilled beef burger",
            price: 189,
            imageId: "kkboqe3zjvdxhzevjmib",
            isVeg: false,
            isBestseller: true,
            rating: 4.4,
            ratingCount: 6700
          },
          {
            id: "901002",
            name: "Veg Whopper",
            description: "Veggie patty with fresh veggies",
            price: 159,
            imageId: "usnosjwhb1cmksuazal0",
            isVeg: true,
            rating: 4.1,
            ratingCount: 3400
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
            imageId: "oq0o5zd4lyypqnrzgrmw",
            isVeg: true,
            rating: 4.3,
            ratingCount: 4500
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
    totalRatings: 9800,
    deliveryTime: "35-40 MINS",
    promoted: false,
    cloudinaryImageId: "89fccaa76f2f23f2f59a3ad450f3e4f1",
    menu: [
      {
        category: "Biryani",
        items: [
          {
            id: "112001",
            name: "Subz-e-Biryani",
            description: "Royal veg biryani with raita",
            price: 299,
            imageId: "tyobczni1o0vaf9dqx0c",
            isVeg: true,
            rating: 4.4,
            ratingCount: 3200
          },
          {
            id: "112002",
            name: "Dum Gosht Biryani",
            description: "Slow-cooked mutton biryani",
            price: 449,
            imageId: "avdvtkqxhcqqzqrkdkyi",
            isVeg: false,
            isBestseller: true,
            rating: 4.5,
            ratingCount: 5600
          }
        ]
      },
      {
        category: "Kebabs",
        items: [
          {
            id: "112010",
            name: "Paneer Tikka",
            description: "Grilled cottage cheese chunks",
            price: 249,
            imageId: "cxdjpvmhzfvjwlsvhgvs",
            isVeg: true,
            rating: 4.3,
            ratingCount: 2100
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
    totalRatings: 7800,
    deliveryTime: "25-30 MINS",
    promoted: false,
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    menu: [
      {
        category: "Subs",
        items: [
          {
            id: "223001",
            name: "Veggie Delite Sub",
            description: "Fresh vegetables in a sub",
            price: 149,
            imageId: "p0b1zckbyofwvlxebpiv",
            isVeg: true,
            rating: 4.2,
            ratingCount: 2300
          },
          {
            id: "223002",
            name: "Chicken Teriyaki Sub",
            description: "Grilled chicken with teriyaki sauce",
            price: 229,
            imageId: "xwkpcficzbpmaxwvntjg",
            isVeg: false,
            isBestseller: true,
            rating: 4.3,
            ratingCount: 3400
          }
        ]
      },
      {
        category: "Salads",
        items: [
          {
            id: "223010",
            name: "Chicken Tikka Salad",
            description: "Fresh salad with chicken tikka",
            price: 199,
            imageId: "ldkwxvgp1ampcwymgssy",
            isVeg: false,
            rating: 4.0,
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
    promoted: true,
    cloudinaryImageId: "182191ab163770437b62861a6f987709",
    menu: [
      {
        category: "Coffee",
        items: [
          {
            id: "334001",
            name: "Caffe Latte",
            description: "Classic espresso with steamed milk",
            price: 295,
            imageId: "ztcujqtewvmhfrnhncl2",
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
            imageId: "sgvswzn6syhkcwpf8w3p",
            isVeg: true,
            rating: 4.4,
            ratingCount: 5400
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
            imageId: "kdwpflhqczkkm0yqqlxz",
            isVeg: true,
            rating: 4.6,
            ratingCount: 4200
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
    totalRatings: 8900,
    deliveryTime: "25-30 MINS",
    promoted: false,
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    menu: [
      {
        category: "Wraps",
        items: [
          {
            id: "445001",
            name: "Paneer Tikka Wrap",
            description: "Paneer tikka wrapped in roomali roti",
            price: 149,
            imageId: "cxdjpvmhzfvjwlsvhgvs",
            isVeg: true,
            isBestseller: true,
            rating: 4.3,
            ratingCount: 3400
          },
          {
            id: "445002",
            name: "Chicken Tikka Wrap",
            description: "Grilled chicken wrap with sauce",
            price: 169,
            imageId: "ldkwxvgp1ampcwymgssy",
            isVeg: false,
            rating: 4.4,
            ratingCount: 4200
          }
        ]
      },
      {
        category: "Biryani",
        items: [
          {
            id: "445010",
            name: "Chicken Biryani",
            description: "Fragrant chicken biryani",
            price: 229,
            imageId: "adgkxc3yvg0vgzqnwfdk",
            isVeg: false,
            rating: 4.2,
            ratingCount: 2800
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
    totalRatings: 4500,
    deliveryTime: "30-35 MINS",
    promoted: false,
    cloudinaryImageId: "rhnubjphkjdqobfzr3cg",
    menu: [
      {
        category: "Salads",
        items: [
          {
            id: "556001",
            name: "Quinoa Power Bowl",
            description: "Healthy quinoa with fresh vegetables",
            price: 299,
            imageId: "ldkwxvgp1ampcwymgssy",
            isVeg: true,
            isBestseller: true,
            rating: 4.5,
            ratingCount: 1800
          },
          {
            id: "556002",
            name: "Grilled Chicken Salad",
            description: "Fresh greens with grilled chicken",
            price: 329,
            imageId: "xwkpcficzbpmaxwvntjg",
            isVeg: false,
            rating: 4.4,
            ratingCount: 1500
          }
        ]
      },
      {
        category: "Smoothies",
        items: [
          {
            id: "556010",
            name: "Green Detox Smoothie",
            description: "Spinach, apple and ginger smoothie",
            price: 179,
            imageId: "ztcujqtewvmhfrnhncl2",
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
    promoted: false,
    cloudinaryImageId: "huwbxxxcpolscq7j1yyz",
    menu: [
      {
        category: "Ice Cream",
        items: [
          {
            id: "667001",
            name: "Tender Coconut Ice Cream",
            description: "Fresh tender coconut ice cream",
            price: 140,
            imageId: "kdwpflhqczkkm0yqqlxz",
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
            imageId: "sgvswzn6syhkcwpf8w3p",
            isVeg: true,
            rating: 4.7,
            ratingCount: 6700
          },
          {
            id: "667003",
            name: "Mango Ice Cream",
            description: "Fresh alphonso mango ice cream",
            price: 150,
            imageId: "ztcujqtewvmhfrnhncl2",
            isVeg: true,
            rating: 4.6,
            ratingCount: 5400
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
              imageId: "pbfjh4vkmhynqbsw3nvm",
              isVeg: true,
              rating: 4.5,
              ratingCount: 3200
            }
          ]
        }
      ]
    }
  ];
  
  // Export the data
  export default restaurantsData;
  
  // Helper function to get all restaurants
//   export const getAllRestaurants = () => {
//     return restaurantsData;
//   };
  
//   // Helper function to filter restaurants by cuisine
//   export const getRestaurantsByCuisine = (cuisine) => {
//     return restaurantsData.filter(restaurant => 
//       restaurant.cuisines.some(c => c.toLowerCase().includes(cuisine.toLowerCase()))
//     );
//   };
  
//   // Helper function to filter restaurants by rating
//   export const getTopRatedRestaurants = (minRating = 4.3) => {
//     return restaurantsData.filter(restaurant => restaurant.avgRating >= minRating);
//   };
  
//   // Helper function to get all menu items from a restaurant
//   export const getRestaurantMenu = (restaurantId) => {
//     const restaurant = getRestaurantById(restaurantId);
//     return restaurant ? restaurant.menu : [];
//   };
  
//   // Helper function to search restaurants by name
//   export const searchRestaurants = (searchTerm) => {
//     return restaurantsData.filter(restaurant => 
//       restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };
  
//   // Helper function to get vegetarian restaurants
//   export const getVegRestaurants = () => {
//     return restaurantsData.filter(restaurant => 
//       restaurant.menu.every(category => 
//         category.items.every(item => item.isVeg)
//       )
//     );
//   };
  
//   // Helper function to get bestseller items from all restaurants
//   export const getAllBestsellers = () => {
//     const bestsellers = [];
//     restaurantsData.forEach(restaurant => {
//       restaurant.menu.forEach(category => {
//         category.items.forEach(item => {
//           if (item.isBestseller) {
//             bestsellers.push({
//               restaurantName: restaurant.name,
//               restaurantId: restaurant.id,
//               ...item
//             });
//           }
//         });
//       });
//     });
//     return bestsellers;
//   };
  
//   // Helper function to sort restaurants by delivery time
//   export const getRestaurantsByDeliveryTime = () => {
//     return [...restaurantsData].sort((a, b) => {
//       const timeA = parseInt(a.deliveryTime.split('-')[0]);
//       const timeB = parseInt(b.deliveryTime.split('-')[0]);
//       return timeA - timeB;
//     });
//   };
  
//   // Example Usage:
//   console.log("Total Restaurants:", restaurantsData.length);
//   console.log("\nTop Rated Restaurants:");
//   getTopRatedRestaurants(4.5).forEach(r => {
//     console.log(`${r.name} - ${r.avgRating} ⭐`);
//   });
  
//   console.log("\nBiryani Restaurants:");
//   getRestaurantsByCuisine("Biryani").forEach(r => {
//     console.log(`${r.name} - ${r.locality}`);
//   });
  
//   console.log("\nAll Bestsellers Count:", getAllBestsellers().length); get restaurant by ID
//   export const getRestaurantById = (id) => {
//     return restaurantsData.find(restaurant => restaurant.id === id);
//   };
  
//   // Helper function to