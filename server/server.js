const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/food-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("error to database", err));
const data = [
  {
    name: "Italian Delight",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Pasta Alfredo",
        price: 10,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
      {
        name: "Margherita Pizza",
        price: 15,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
      {
        name: "Chicken Parmesan",
        price: 20,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004646/file.jpg",
      },
    ],
    rating: 4.5,
  },
  {
    name: "Seafood Paradise",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Grilled Salmon",
        price: 12,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Lobster Bisque",
        price: 18,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Shrimp Scampi",
        price: 25,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 3.8,
  },
  {
    name: "Vegetarian Haven",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Quinoa Salad",
        price: 8,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Eggplant Parmesan",
        price: 12,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Mushroom Risotto",
        price: 16,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 4.2,
  },
  {
    name: "Sizzling Steakhouse",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Filet Mignon",
        price: 22,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "New York Strip",
        price: 18,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Ribeye Steak",
        price: 25,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 4.7,
  },
  {
    name: "Asian Fusion",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
    menu: [
      {
        name: "Sushi Platter",
        price: 20,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Pad Thai",
        price: 15,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
      {
        name: "Mongolian Beef",
        price: 18,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
      },
    ],
    rating: 4.0,
  },
];

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  menu: [
    {
      name: String,
      price: Number,
      image: String,
    },
  ],
  rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

const addDatabase = async () => {
  try {
    await Restaurant.deleteMany()
    await Restaurant.insertMany(data);
  } catch (error) {
    console.log(error.message);
  }
};
addDatabase()

app.get('/restaurants',async(req,res)=>{
    try {
        const restaurants =await Restaurant.find({})
        res.json(restaurants)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.listen(5000,()=>{
    console.log(`server is running on port ${5000}`);
})