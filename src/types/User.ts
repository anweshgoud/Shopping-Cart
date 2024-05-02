import images1 from "../assets/user.jpeg";
import { v4 as uuidv4 } from "uuid";
import { carttype } from "./Carts";
import { Ordertype } from "./Orders";
export interface orderstype {
  quantity: number;
  totalamount: number;
}

export interface Placetype{
  address:string,
  city:string,
}

export interface Usertype {
  id: string;
  name: string;
  place: Placetype[];
  AmountSpent: number;
  mail: string;
  image: string;
  quantity: number;
  cartArray:Ordertype[];
}


export const User: Usertype[] = [
  {
    id: uuidv4(),
    name: "Anwesh",
    place: [
      {
        address: "h.no-12-121, Road no-6 ,jubille hills ,500056,hyderabad, telangana",
        city: "Hyderabad",
      },
      {
        address: "No. 24, Anna Salai, Nungambakkam, Chennai - 600034",
        city: "Chennai",
      },
      {
        address: "Plot No. 123, Sector 4, Vashi, Navi Mumbai - 400703",
        city: "Mumbai",
      },
    ],
    AmountSpent: 0,
    mail: "anweshgoud2010@gmail.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Isha",
    place: [
      {
        address: "B-17, Hauz Khas Enclave, New Delhi - 110016",
        city: "Delhi",
      },
      {
        address: "C-Scheme, Shanti Path, Jaipur - 302001",
        city: "Jaipur",
      },
      {
        address: "Taj Ganj, Agra - 282001",
        city: "Agra",
      },
    ],
    AmountSpent: 0,
    mail: "isha.sharma@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Arjun",
    place: [
      {
        address: "No. 456, 12th Main, Indiranagar, Bangalore - 560038",
        city: "Bangalore",
      },
      {
        address: "Vijayanagar 2nd Stage, Mysore - 570017",
        city: "Mysore",
      },
      {
        address: "Balmatta, Mangalore - 575001",
        city: "Mangalore",
      },
    ],
    AmountSpent: 0,
    mail: "arjun.singh@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Priya",
    place: [
      {
        address: "25/1, Rashbehari Avenue, Kolkata - 700026",
        city: "Kolkata",
      },
      {
        address: "Lachit Nagar, Guwahati - 781007",
        city: "Guwahati",
      },
      {
        address: "Hill Cart Road, Siliguri - 734001",
        city: "Siliguri",
      },
    ],
    AmountSpent: 0,
    mail: "priya.das@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Rahul",
    place: [
      {
        address: "Baner Road, Pune - 411045",
        city: "Pune",
      },
      {
        address: "Panchavati, Nashik - 422003",
        city: "Nashik",
      },
      {
        address: "N-7, CIDCO, Aurangabad - 431003",
        city: "Aurangabad",
      },
    ],
    AmountSpent: 0,
    mail: "rahul.patil@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Meera",
    place: [
      {
        address: "Navrangpura, Ahmedabad - 380009",
        city: "Ahmedabad",
      },
      {
        address: "Adajan Patia, Surat - 395009",
        city: "Surat",
      },
      {
        address: "Akota, Vadodara - 390020",
        city: "Vadodara",
      },
    ],
    AmountSpent: 0,
    mail: "meera.patel@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Vivek",
    place: [
      {
        address: "Adyar, Chennai - 600020",
        city: "Chennai",
      },
      {
        address: "Gandhipuram, Coimbatore - 641012",
        city: "Coimbatore",
      },
      {
        address: "Arasaradi, Madurai - 625016",
        city: "Madurai",
      },
    ],
    AmountSpent: 0,
    mail: "vivek.kumar@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Neha",
    place: [
      {
        address: "Hazratganj, Lucknow - 226001",
        city: "Lucknow",
      },
      {
        address: "Swaroop Nagar, Kanpur - 208002",
        city: "Kanpur",
      },
      {
        address: "Lahurabir, Varanasi - 221010",
        city: "Varanasi",
      },
    ],
    AmountSpent: 0,
    mail: "neha.singh@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Rohan",
    place: [
      {
        address: "Nayapalli, Bhubaneswar - 751012",
        city: "Bhubaneswar",
      },
      {
        address: "Badambadi, Cuttack - 753012",
        city: "Cuttack",
      },
      {
        address: "Sea Beach Road, Puri - 752001",
        city: "Puri",
      },
    ],
    AmountSpent: 0,
    mail: "rohan.mishra@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
  {
    id: uuidv4(),
    name: "Diya",
    place: [
      {
        address: "Sector 17, Chandigarh - 160017",
        city: "Chandigarh",
      },
      {
        address: "Ranjit Avenue, Amritsar - 143001",
        city: "Amritsar",
      },
      {
        address: "Sarabha Nagar, Ludhiana - 141001",
        city: "Ludhiana",
      },
    ],
    AmountSpent: 0,
    mail: "diya.kapoor@example.com",
    image: images1,
    quantity: 0,
    cartArray: [],
  },
];


export const UsersData: Usertype[] = [];
