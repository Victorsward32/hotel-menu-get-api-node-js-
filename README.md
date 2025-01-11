# hotel-menu-get-api-node-js-
The Hotel Menu API allows you to fetch menu items categorized into different cuisines such as Tandoori, Chinese (Veg/Non-Veg), Seafood, Biryani, and Soups. This API is ideal for restaurant management systems, food delivery apps, or online menu displays.

Endpoints Get All Menu Items

> URL: https://hotel-menu-list.netlify.app/.netlify/functions/menu

> Method: GET

Description: Fetch the entire menu with all categories and their respective items. Get Items by Category

URL: https://hotel-menu-list.netlify.app/.netlify/functions/category
Method: GET
Query Parameter: categoryId (required): The ID of the category to fetch, e.g., tandooriRoti or chineseDishes. Example: bash Copy code https://hotel-menu-list.netlify.app/.netlify/functions/category?categoryId=tandooriRoti Description: Fetch specific menu items by category ID. How to Use Access All Menu Items

Use the /menu endpoint to retrieve the complete menu data. Example Response: json

{
  "tandooriRoti": {
    "id": "tandooriRoti",
    "name": "TANDOORI ROTI",
    "items": [
      { "id": "roti1", "name": "Roti", "price": 15, "isVeg": true },
      { "id": "roti2", "name": "Butter Roti", "price": 20, "isVeg": true }
    ]
  },
  "chineseDishes": {
    "id": "chineseDishes",
    "name": "CHINESE DISHES",
    "items": [
      { "id": "chinese1", "name": "Veg. Chilly / Manchurian", "price": 150, "isVeg": true }
    ]
  }
}
Filter Items by Category

Use the /category endpoint with a categoryId query parameter. Example Request: bash Copy code

> GET https://hotel-menu-list.netlify.app/.netlify/functions/category?categoryId=chineseDishes

Example Response: json


{
  "id": "chineseDishes",
  "name": "CHINESE DISHES",
  "items": [
    { "id": "chinese1", "name": "Veg. Chilly / Manchurian", "price": 150, "isVeg": true },
    { "id": "chinese2", "name": "Veg. Balls in Schezwan Sauce", "price": 160, "isVeg": true }
  ]
}
Use Cases

Food Delivery Apps: Use the API to display menu items by category to users.
Restaurant Management: Simplify the digital menu listing process.
Custom Applications: Integrate the API for mobile or web-based ordering systems.
