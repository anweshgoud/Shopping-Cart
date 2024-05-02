import { randomUUID} from "crypto";
import basketball from  "../assets/Basketball.jpg";
import laptop from "../assets/Laptop.jpg";
import bicycle from "../assets/bicycle.jpeg";
import camera from "../assets/camera.jpeg";
import campingtent from "../assets/campingtent.jpeg";
import shoes from "../assets/shoes.jpg";
import skateboard from "../assets/skateboard.jpeg";
import headphones from "../assets/heasphones.jpeg";
import Smartphone from "../assets/Smartphone.jpeg";
import smartwatch from "../assets/smartwatch.jpeg";
import speaker from "../assets/speaker.jpeg";
import sunglasses from "../assets/sunglasses.jpeg";
import scooter from "../assets/electric-scooter.jpeg";
import backpack from "../assets/backpack.jpeg";
import cookbook from "../assets/cookbook.jpeg";
import yogamat from "../assets/Yogamat.jpeg"

import basketball1 from "../assets/images/basketball/basketball1.jpeg";
import basketball2 from "../assets/images/basketball/basketball2.jpeg";
import  backpack1 from "../assets/images/backpack/backpack1.jpeg";
import backpack2 from "../assets/images/backpack/backpack2.jpeg";
import camera1 from "../assets/images/camera/camera1.jpeg";
import camera2 from "../assets/images/camera/camera2.jpeg";
import cycle1 from "../assets/images/bicycle/bicycle1.jpeg";
import cycle2 from "../assets/images/bicycle/bicycle2.jpeg"
import cookbook1 from "../assets/images/Cookbook/cooking1.jpeg";
import cookbook2 from "../assets/images/Cookbook/cooking2.jpeg";
import scooter1 from "../assets/images/electrixcScooter/scooter1.jpeg";
import scooter2 from "../assets/images/electrixcScooter/scooter2.jpeg";
import headphone1 from "../assets/images/Headphones/headphones1.jpeg";
import headphone2 from "../assets/images/Headphones/headphones2.jpeg";
import laptop1 from "../assets/images/laptop/laptop1.jpeg";
import laptop2 from "../assets/images/laptop/laptop2.jpeg";
import shoes1 from "../assets/images/runningshoes/shoes1.jpeg";
import shoes2 from "../assets/images/runningshoes/shoes2.jpeg";
import board1 from "../assets/images/skateboard/skateboard1.jpeg";
import board2 from "../assets/images/skateboard/skateboard1.jpeg";
import phone1 from "../assets/images/Smartphone/smartphone1.jpeg";
import phone2 from "../assets/images/Smartphone/smartphone2.jpeg";
import watch1 from "../assets/images/smartwatch/smartwatch1.jpeg";
import watch2 from "../assets/images/smartwatch/smartwatch2.jpeg";
import glasses1 from "../assets/images/sunglasses/sun1.jpeg";
import glasses2 from "../assets/images/sunglasses/sun2.jpeg";
import wireless1 from "../assets/images/wireless/speaker1.jpeg";
import wireless2 from "../assets/images/wireless/speaker2.jpeg";
import mat1 from "../assets/images/yogamat/yogamat1.jpeg";
import mat2 from "../assets/images/yogamat/yogamat2.jpeg";
import tent1 from "../assets/images/campingtent/camping1.jpeg";
import tent2 from "../assets/images/campingtent/camping2.jpeg";


export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  imagesArray:string[];
}


export const Products: ProductType[] = [
  {
    id: "1",
    name: "Basketball",
    description: "Best Basketball ever made",
    price: 2000,
    category: "Sports",
    image: basketball,
    imagesArray:[basketball2,basketball1,basketball],
  },
  {
    id: "2",
    name: "Laptop",
    description: "High-performance laptop for work and gaming",
    price: 1500,
    category: "Electronics",
    image: laptop,
    imagesArray:[laptop1,laptop2,laptop],
  },
  {
    id: "3",
    name: "Smartphone",
    description: "Latest flagship smartphone with 5G and triple camera",
    price: 800,
    category: "Electronics",
    image: Smartphone,
    imagesArray:[phone1,phone2,Smartphone],
  },
  {
    id: "4",
    name: "Headphones",
    description: "Noise-cancelling wireless headphones with long battery life",
    price: 250,
    category: "Electronics",
    image: headphones,
    imagesArray:[headphone1,headphone2,headphones],
  },
  {
    id: "5",
    name: "Running Shoes",
    description: "Lightweight and breathable running shoes for athletes",
    price: 120,
    category: "Sports",
    image: shoes,
    imagesArray:[shoes1,shoes2,shoes]
  },
  {
    id: "6",
    name: "Backpack",
    description: "Durable and spacious backpack for hiking and outdoor adventures",
    price: 80,
    category: "Outdoor",
    image: backpack,
    imagesArray:[backpack1,backpack2,backpack],
  },
  {
    id: "7",
    name: "Yoga Mat",
    description: "Non-slip and eco-friendly yoga mat for exercise and meditation",
    price: 50,
    category: "Fitness",
    image: yogamat,
    imagesArray:[mat1,mat2,yogamat]
  },
  {
    id: "8",
    name: "Cookbook",
    description: "Best-selling cookbook with easy-to-follow recipes for all occasions",
    price: 30,
    category: "Books",
    image: cookbook,
    imagesArray:[cookbook1,cookbook2,cookbook],
  },
  {
    id: "9",
    name: "Smartwatch",
    description: "Stylish and feature-packed smartwatch with fitness tracking",
    price: 300,
    category: "Electronics",
    image: smartwatch,
    imagesArray:[watch1,watch2,smartwatch]
  },
  {
    id: "10",
    name: "Bicycle",
    description: "High-quality mountain bike for off-road adventures",
    price: 1000,
    category: "Sports",
    image:bicycle,
    imagesArray:[cycle1,cycle2,bicycle],
  },
  {
    id: "11",
    name: "Wireless Speaker",
    description: "Portable and waterproof Bluetooth speaker with powerful sound",
    price: 100,
    category: "Electronics",
    image: speaker,
    imagesArray:[wireless1,wireless2,speaker],
  },
  {
    id: "12",
    name: "Camping Tent",
    description: "Spacious and weatherproof tent for camping and outdoor trips",
    price: 200,
    category: "Outdoor",
    image:campingtent,
    imagesArray:[tent1,tent2,campingtent],
  },
  {
    id: "13",
    name: "DSLR Camera",
    description: "Professional-grade DSLR camera for photography enthusiasts",
    price: 2500,
    category: "Electronics",
    image:camera,
    imagesArray:[camera1,camera2,camera],
  },
  {
    id: "14",
    name: "Skateboard",
    description: "High-quality skateboard for tricks and street riding",
    price: 150,
    category: "Sports",
    image: skateboard,
    imagesArray:[board1,board2,skateboard],
  },
  {
    id: "15",
    name: "Sunglasses",
    description: "Stylish and polarized sunglasses for outdoor activities",
    price: 80,
    category: "Accessories",
    image: sunglasses,
    imagesArray:[glasses1,glasses2],
  },

  {
    id: "16",
    name: "Electric Scooter",
    description: "Eco-friendly and foldable electric scooter for city commuting",
    price: 600,
    category: "Transportation",
    image: scooter,
    imagesArray:[scooter1,scooter2,scooter],
  },
];

