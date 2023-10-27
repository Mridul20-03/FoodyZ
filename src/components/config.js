export  const IMG_CDN_URL =  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

//image cdn of restuarant menu items
export const MENU_ITEM_IMG_CDN_URL =  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"; 


// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5220604&lng=87.2593454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// swiggy api for restaurant menu 
export const swiggy_restaurant_api_url = 
"https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.5220604&lng=87.2593454&&submitAction=ENTER&restaurantId=";

// restaurant menu items @type 
export const RESTAURANT_TYPE =  
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const ITEM_CATEGORY_TYPE = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";