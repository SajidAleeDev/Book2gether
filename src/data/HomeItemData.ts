import { Images } from "../../assets/Images";
import { ReturnProps } from "../types/type";

export const HomeItemData: ReturnProps[] = [
  {
    id: Math.random() * 10000000,
    name: "The Razor’s Salon",
    Image: Images.Barber,
    Location: "42 Baker Street, London, NW...",
    city: "Amsterdam",
    open: true,
    number: "+1 2487865278",
    Rating: 4.5,
    OpenTiming: [
      {
        day: "Monday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Tuesday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Wednesday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Thursday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Friday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Saturday",
        openTime: "9:00",
        closeTime: "05:00",
      },
      {
        day: "Sunday",
        Closed: true,
      },
    ],
    Employees: [
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Hair Stylist",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
      {
        name: "John Doe",
        Image: Images.Barber,
        Expertise: "Haircut",
      },
    ],
    Treatment: [
      {
        name: "Haircut",
        Treatments: [
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
        ],
      },
      {
        name: "Haircut",
        Treatments: [
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
        ],
      },
      {
        name: "Haircut",
        Treatments: [
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
          {
            name: "Hair straightening",
            duration: "1 Hour",
            price: "$100",
          },
        ],
      },
    ],
  },
];
