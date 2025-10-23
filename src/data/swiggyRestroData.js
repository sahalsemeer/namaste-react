// Restaurant Preview Data for Home Page
const restaurantPreviewData = [
    {
      id: "1072642",
      name: "Babai Hotel - Since 1942",
      cuisines: ["Andhra", "South Indian"],
      avgRating: 4.4,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹400 for two",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/31/b3bc3948-a30f-4fd6-9dd1-740d36bd0a9c_1072642.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      promoted:true
    },
    {
      id: "234567",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "North Indian"],
      avgRating: 4.5,
      deliveryTime: "30-35 MINS",
      costForTwo: "₹500 for two",
      cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
      locality: "Koramangala",
      areaName: "Koramangala",
      promoted:false,
    },
    {
      id: "345678",
      name: "Pizza Hut",
      cuisines: ["Pizza", "Fast Food", "Italian"],
      avgRating: 4.2,
      deliveryTime: "35-40 MINS",
      costForTwo: "₹600 for two",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      promoted:false,
    },
    {
      id: "456789",
      name: "KFC - Kentucky Fried Chicken",
      cuisines: ["Fast Food", "Chicken", "American"],
      avgRating: 4.3,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹450 for two",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "MG Road",
      areaName: "MG Road",
      promoted:true
    },
    {
      id: "567890",
      name: "Truffles",
      cuisines: ["American", "Continental", "Desserts"],
      avgRating: 4.5,
      deliveryTime: "30-35 MINS",
      costForTwo: "₹450 for two",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      locality: "Koramangala",
      areaName: "Koramangala",
      promoted:false,
    },
    {
      id: "678901",
      name: "Domino's Pizza",
      cuisines: ["Pizza", "Fast Food", "Italian"],
      avgRating: 4.3,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹400 for two",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "BTM Layout",
      areaName: "BTM",
      promoted:false,
    },
    {
      id: "789012",
      name: "Chinese Wok",
      cuisines: ["Chinese", "Asian", "Tibetan"],
      avgRating: 4.2,
      deliveryTime: "30-35 MINS",
      costForTwo: "₹350 for two",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Whitefield",
      areaName: "Whitefield",
      promoted:false,
    },
    {
      id: "890123",
      name: "The Bowl Company",
      cuisines: ["Rice Bowls", "North Indian", "Continental"],
      avgRating: 4.4,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹300 for two",
      cloudinaryImageId: "94d7ee9ab8895dd84dcdba08ffd173a6",
      locality: "HSR Layout",
      areaName: "HSR",
      promoted:true
    },
    {
      id: "901234",
      name: "Burger King",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      deliveryTime: "30-35 MINS",
      costForTwo: "₹400 for two",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Bannerghatta Road",
      areaName: "Bannerghatta",
      promoted:false,
    },
    {
      id: "112345",
      name: "Behrouz Biryani",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 4.3,
      deliveryTime: "35-40 MINS",
      costForTwo: "₹500 for two",
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      locality: "Electronic City",
      areaName: "Electronic City",
      promoted:false,
    },
    {
      id: "223456",
      name: "Subway",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.1,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹350 for two",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Marathahalli",
      areaName: "Marathahalli",
      promoted:false,
    },
    {
      id: "334567",
      name: "Starbucks Coffee",
      cuisines: ["Coffee", "Beverages", "Desserts"],
      avgRating: 4.4,
      deliveryTime: "20-25 MINS",
      costForTwo: "₹500 for two",
      cloudinaryImageId: "182191ab163770437b62861a6f987709",
      locality: "Koramangala",
      areaName: "Koramangala",
      promoted:false,
    },
    {
      id: "445678",
      name: "Faasos - Wraps & Rolls",
      cuisines: ["Fast Food", "Rolls", "Wraps"],
      avgRating: 4.2,
      deliveryTime: "25-30 MINS",
      costForTwo: "₹300 for two",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Jayanagar",
      areaName: "Jayanagar",
      promoted:false,
    },
    {
      id: "556789",
      name: "Lean Kitchen",
      cuisines: ["Healthy Food", "Salads", "Continental"],
      avgRating: 4.3,
      deliveryTime: "30-35 MINS",
      costForTwo: "₹450 for two",
      cloudinaryImageId: "29d8e93744cb0d03a8b3903d46381752",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      promoted:false,
    },
    {
      id: "667890",
      name: "Natural Ice Cream",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      deliveryTime: "20-25 MINS",
      costForTwo: "₹250 for two",
      cloudinaryImageId: "18d8b8fb6bac8063a6fa886e20148110",
      locality: "Koramangala",
      areaName: "Koramangala",
      promoted:true,
    }
  ];
  
  // Export for use
  export default restaurantPreviewData;
  
//   // Helper function to get image URL
//   export const getImageUrl = (cloudinaryImageId, width = 660) => {
//     return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_${width}/${cloudinaryImageId}`;
//   };
  
//   // Helper function to filter by rating
//   export const filterByRating = (minRating) => {
//     return restaurantPreviewData.filter(restaurant => restaurant.avgRating >= minRating);
//   };
  
//   // Helper function to filter by cuisine
//   export const filterByCuisine = (cuisineType) => {
//     return restaurantPreviewData.filter(restaurant => 
//       restaurant.cuisines.some(cuisine => 
//         cuisine.toLowerCase().includes(cuisineType.toLowerCase())
//       )
//     );
//   };
  
//   // Helper function to filter by delivery time (fast delivery)
//   export const getFastDeliveryRestaurants = (maxTime = 30) => {
//     return restaurantPreviewData.filter(restaurant => {
//       const deliveryMinutes = parseInt(restaurant.deliveryTime.split('-')[0]);
//       return deliveryMinutes <= maxTime;
//     });
//   };
  
//   // Helper function to sort by rating
//   export const sortByRating = (ascending = false) => {
//     return [...restaurantPreviewData].sort((a, b) => 
//       ascending ? a.avgRating - b.avgRating : b.avgRating - a.avgRating
//     );
//   };
  
//   // Helper function to sort by delivery time
//   export const sortByDeliveryTime = () => {
//     return [...restaurantPreviewData].sort((a, b) => {
//       const timeA = parseInt(a.deliveryTime.split('-')[0]);
//       const timeB = parseInt(b.deliveryTime.split('-')[0]);
//       return timeA - timeB;
//     });
//   };
  
//   // Helper function to search restaurants
//   export const searchRestaurants = (searchTerm) => {
//     const term = searchTerm.toLowerCase();
//     return restaurantPreviewData.filter(restaurant => 
//       restaurant.name.toLowerCase().includes(term) ||
//       restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(term)) ||
//       restaurant.areaName.toLowerCase().includes(term)
//     );
//   };
  
//   // Helper function to get restaurant by ID
//   export const getRestaurantById = (id) => {
//     return restaurantPreviewData.find(restaurant => restaurant.id === id);
//   };
  
//   // Example Usage:
//   console.log("Total Restaurants:", restaurantPreviewData.length);
  
//   console.log("\n🌟 Top Rated (4.5+):");
//   filterByRating(4.5).forEach(r => {
//     console.log(`${r.name} - ${r.avgRating}⭐ - ${r.deliveryTime}`);
//   });
  
//   console.log("\n🍕 Pizza Places:");
//   filterByCuisine("Pizza").forEach(r => {
//     console.log(`${r.name} - ${r.costForTwo}`);
//   });
  
//   console.log("\n⚡ Fast Delivery (< 30 mins):");
//   getFastDeliveryRestaurants(30).forEach(r => {
//     console.log(`${r.name} - ${r.deliveryTime}`);
//   });
  
//   console.log("\n🔍 Search 'Biryani':");
//   searchRestaurants("Biryani").forEach(r => {
//     console.log(`${r.name} - ${r.areaName}`);
//   });
  
//   // Example: Get image URL
//   const firstRestaurant = restaurantPreviewData[0];
//   console.log("\n📸 Image URL:", getImageUrl(firstRestaurant.cloudinaryImageId));
  
//   // Example: Get single restaurant
//   console.log("\n🏪 Restaurant Details:");
//   const restaurant = getRestaurantById("1072642");
//   console.log(restaurant);