import shihtzu from "@/assets/breed-shihtzu.jpg";
import toypoodle from "@/assets/breed-toypoodle.jpg";
import goldenretriever from "@/assets/breed-goldenretriever.jpg";
import maltipoo from "@/assets/breed-maltipoo.jpg";
import labrador from "@/assets/breed-labrador.jpg";
import gsd from "@/assets/breed-gsd.jpg";
import beagle from "@/assets/breed-beagle.jpg";
import husky from "@/assets/breed-husky.jpg";
import frenchie from "@/assets/breed-frenchie.jpg";
import pug from "@/assets/breed-pug.jpg";
import pomeranian from "@/assets/breed-pomeranian.jpg";
import cockerspaniel from "@/assets/breed-cockerspaniel.jpg";
import chowchow from "@/assets/breed-chowchow.jpg";
import chihuahua from "@/assets/breed-chihuahua.jpg";
import yorkshire from "@/assets/breed-yorkshire.jpg";
import bichon from "@/assets/breed-bichon.jpg";
import cavalier from "@/assets/breed-cavalier.jpg";
import toypom from "@/assets/breed-toypom.jpg";
import jackrussell from "@/assets/breed-jackrussell.jpg";
import lhasa from "@/assets/breed-lhasa.jpg";
import rottweiler from "@/assets/breed-rottweiler.jpg";
import doberman from "@/assets/breed-doberman.jpg";

import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";
import customer7 from "@/assets/customer-7.jpg";
import customer8 from "@/assets/customer-8.jpg";
import customer9 from "@/assets/customer-9.jpg";
import customer10 from "@/assets/customer-10.jpg";
import customer11 from "@/assets/customer-11.jpg";

export type Breed = {
  name: string;
  image: string;
  size: "Small Breed" | "Medium Breed" | "Large Breed";
  price?: string;
  choice?: boolean;
};

export const breeds: Breed[] = [
  { name: "Shih Tzu", image: shihtzu, size: "Small Breed", choice: true },
  { name: "Toy Poodle", image: toypoodle, size: "Small Breed", choice: true },
  { name: "Golden Retriever", image: goldenretriever, size: "Large Breed", choice: true },
  { name: "Maltipoo", image: maltipoo, size: "Small Breed", choice: true },
  { name: "Labrador Retriever", image: labrador, size: "Large Breed", choice: true },
  { name: "German Shepherd", image: gsd, size: "Large Breed", choice: true },
  { name: "Beagle", image: beagle, size: "Medium Breed", choice: true },
  { name: "Siberian Husky", image: husky, size: "Large Breed", choice: true },
  { name: "French Bulldog", image: frenchie, size: "Small Breed", choice: true },
  { name: "Pug", image: pug, size: "Small Breed", choice: true },
  { name: "Pomeranian", image: pomeranian, size: "Small Breed", choice: true },
  { name: "Cocker Spaniel", image: cockerspaniel, size: "Medium Breed", choice: true },
  { name: "Chow Chow", image: chowchow, size: "Large Breed", choice: true },
  { name: "Chihuahua", image: chihuahua, size: "Small Breed", choice: true },
  { name: "Yorkshire Terrier", image: yorkshire, size: "Small Breed", choice: true },
  { name: "Bichon Frise", image: bichon, size: "Small Breed", choice: true },
  { name: "Cavalier King Charles", image: cavalier, size: "Small Breed", choice: true },
  { name: "Toy Pomeranian", image: toypom, size: "Small Breed", choice: true },
  { name: "Jack Russell Terrier", image: jackrussell, size: "Small Breed", choice: true },
  { name: "Lhasa Apso", image: lhasa, size: "Small Breed", choice: true },
  { name: "Rottweiler", image: rottweiler, size: "Large Breed", choice: true },
  { name: "Doberman Pinscher", image: doberman, size: "Large Breed", choice: true },
];

export const popularBreeds = breeds.map((b) => ({ name: b.name, image: b.image }));

export interface Review {
  name: string;
  city: string;
  image: string;
  breed: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Ananya & Family",
    city: "Gurugram",
    image: customer1,
    breed: "Golden Doodle",
    text: "Got our puppy from The Puppy Shop last month. Vaccination records were perfect and the pup is so healthy and playful. Best decision ever!",
    rating: 5,
  },
  {
    name: "Sneha & Bruno",
    city: "Gurugram",
    image: customer6,
    breed: "Toy Poodle",
    text: "I fell in love with Bruno the second I held him at The Puppy Shop! He is healthy, vaccinated, and so affectionate. Highly recommend them!",
    rating: 5,
  },
  {
    name: "The Sharma Family",
    city: "Delhi",
    image: customer7,
    breed: "Maltipoo",
    text: "Brought home our little puppy from The Puppy Shop for my son's birthday. The team walked us through food, vaccinations, and training. Excellent experience!",
    rating: 5,
  },
  {
    name: "Vikram & Simba",
    city: "Noida",
    image: customer8,
    breed: "Golden Retriever",
    text: "Got my Golden Retriever puppy Simba from The Puppy Shop. Pure breed, super playful, and vet support answered all my first-week questions instantly!",
    rating: 5,
  },
  {
    name: "Divya & Sameer",
    city: "Delhi NCR",
    image: customer9,
    breed: "Golden Retriever",
    text: "We visited their store in Gurugram and found our dream puppy! The staff gave us full health paperwork and pedigree details. Truly transparent!",
    rating: 5,
  },
  {
    name: "Master Aarav",
    city: "Faridabad",
    image: customer2,
    breed: "Toy Poodle",
    text: "Free vet consultation for the first year is a huge plus. Our puppy is thriving and brings so much joy to our home. Thank you team The Puppy Shop!",
    rating: 5,
  },
  {
    name: "Priya & Karan",
    city: "Delhi",
    image: customer3,
    breed: "Shih Tzu",
    text: "We visited the store, met multiple pups and never felt rushed. Our Shih Tzu settled in within a day. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rohit & Family",
    city: "Noida",
    image: customer4,
    breed: "Cavapoo",
    text: "Very transparent about the breeder and health checkups. They even called after two weeks to check on our pup. Genuinely caring people.",
    rating: 5,
  },
  {
    name: "Rohan & Neha",
    city: "Delhi NCR",
    image: customer5,
    breed: "Siberian Husky",
    text: "We brought home our Siberian Husky puppy from The Puppy Shop. The health guidance and pedigree papers were 100% authentic!",
    rating: 5,
  },
  {
    name: "Kavya & Honey",
    city: "Gurugram",
    image: customer10,
    breed: "Golden Retriever",
    text: "Holding our little Golden Retriever puppy for the first time at The Puppy Shop was pure magic! Healthy, vet checked, and so full of love.",
    rating: 5,
  },
  {
    name: "Riya & Yash",
    city: "Delhi",
    image: customer11,
    breed: "Golden Retriever",
    text: "Found our dream Golden Retriever pup at The Puppy Shop. The team is super knowledgeable, helpful, and transparent. Couldn't be happier!",
    rating: 5,
  },
];

