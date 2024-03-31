import bklin1 from "./images/bklin/1.jpg";
import bklin2 from "./images/bklin/2.jpg";
import bklin3 from "./images/bklin/3.jpg";
import bklin4 from "./images/bklin/4.jpg";
import bklin5 from "./images/bklin/5.jpg";
import bklin6 from "./images/bklin/6.jpg";
import bklin7 from "./images/bklin/7.jpg";
import bklin8 from "./images/bklin/8.jpg";
import bklin9 from "./images/bklin/9.jpg";
import bklin10 from "./images/bklin/10.jpg";

import train1 from "./images/train/1.jpg";
import train2 from "./images/train/2.jpg";
import train3 from "./images/train/3.jpg";
import train4 from "./images/train/4.jpg";
import train5 from "./images/train/5.jpg";
import train6 from "./images/train/6.jpg";

import trail1 from "./images/trails/1.jpg";
import trail2 from "./images/trails/2.jpg";
import trail3 from "./images/trails/3.jpg";
import trail4 from "./images/trails/4.jpg";
import trail5 from "./images/trails/5.jpg";
import trail6 from "./images/trails/6.jpg";
import trail7 from "./images/trails/7.jpg";
import trail8 from "./images/trails/8.jpg";

import animal1 from "./images/animals/1.jpg"
import animal2 from "./images/animals/2.jpg"
import animal3 from "./images/animals/3.jpg"
import animal4 from "./images/animals/4.jpg"
import animal5 from "./images/animals/5.jpg"
import animal6 from "./images/animals/6.jpg"

import house1 from "./images/domek.jpg"
import house2 from "./images/kompleks.jpg"
import house3 from "./images/bklin/1.jpg"
import house4 from "./images/house/1.jpg"
import house5 from "./images/house/2.jpg"
import house6 from "./images/house/3.jpg"
import house7 from "./images/house/4.jpg"
import house8 from "./images/house/5.jpg"
import house9 from "./images/house/6.jpg"
import house10 from "./images/bklin/5.jpg"
import house11 from "./images/bklin/7.jpg"
import house12 from "./images/bklin/8.jpg"

import kon1 from './images/rooms/kon/1.jpg'
import kon2 from './images/rooms/kon/2.jpg'
import kon3 from './images/rooms/kon/3.jpg'
import kon4 from './images/rooms/kon/4.jpg'
import kon5 from './images/rooms/kon/5.jpg'

import rys1 from './images/rooms/rys/1.jpg'
import rys2 from './images/rooms/rys/2.jpg'
import rys3 from './images/rooms/rys/3.jpg'
import rys4 from './images/rooms/rys/4.jpg'
import rys5 from './images/rooms/rys/5.jpg'
import rys6 from './images/rooms/rys/6.jpg'

import wilk1 from './images/rooms/wilk/1.jpg'
import wilk2 from './images/rooms/wilk/2.jpg'
import wilk3 from './images/rooms/wilk/3.jpg'
import wilk4 from './images/rooms/wilk/4.jpg'
import wilk5 from './images/rooms/wilk/5.jpg'

import zbik1 from './images/rooms/zbik/1.jpg'
import zbik2 from './images/rooms/zbik/2.jpg'
import zbik3 from './images/rooms/zbik/3.jpg'
import zbik4 from './images/rooms/zbik/4.jpg'
import zbik5 from './images/rooms/zbik/5.jpg'
import zbik6 from './images/rooms/zbik/6.jpg'

import kuchnia1 from './images/rooms/kuchnia/1.jpg'
import kuchnia2 from './images/rooms/kuchnia/2.jpg'
import kuchnia3 from './images/rooms/kuchnia/3.jpg'

import { FaRuler, FaCocktail, FaUser, FaWifi, FaBath, FaShapes, FaHiking, FaShoppingBasket, FaFire, FaChild, FaParking, FaBed } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineSportsSoccer, MdBalcony, MdOutlineRoofing } from "react-icons/md";


export const house = {
   images: [
      house1, 
      house2, 
      house3, 
      house4, 
      house5, 
      house6, 
      house7, 
      house8, 
      house9, 
      house10, 
      house11, 
      house12, 
   ],
   info: [
      {
         icon: FaUser,
         label: "Osoby",
         value: "4-6"
      },
      {
         icon: FaRuler,
         label: "Powierzchnia",
         value: "?? m2"
      },
      {
         icon: MdOutlineRoofing,
         label: "Sypialnia",
         value: "Na piętrzę"
      },
   ],
   options: [
      {
         label: 'Wypoczynek',
         description: 'przestronny salon z wypoczynkiem i kominkiem',
         icon: FaCocktail
      },
      {
         label: 'WI-FI',
         description: 'dostęp do internetu poprzez Wi-Fi',
         icon: FaWifi
      },
      {
         label: 'Łazienka',
         description: 'funkcjonalna łazienka z prysznicem',
         icon: FaBath
      },
      {
         label: 'Plac zabaw',
         description: 'plac zabaw z piaskownicą dla najmłodszych (aktualnie niedostępny)',
         icon: FaShapes
      },
      {
         label: 'Sport',
         description: 'zielony teren idealny do gier zespołowych tj. piłka nożna, badminton, piłka siatkowa itp.',
         icon: MdOutlineSportsSoccer
      },
      {
         label: 'Atrakcje',
         description: 'liczne atrakcje turystyczne w okolicy oraz centrum Cisnej w odległości 2km',
         icon: FaHiking
      },
      {
         label: 'Parking',
         description: 'bezpieczny, ogrodzony parking',
         icon: FaParking
      },
      {
         label: 'Taras',
         description: 'do domku przynależy własny taras',
         icon: MdBalcony
      },
      {
         label: 'Bliskość sklepu',
         description: 'sklep spożywczo - przemysłowy w odległości 100m',
         icon: FaShoppingBasket
      },
   ]
}

export const rooms = {
   images: {
      kon: [kon1, kon2, kon3, kon4, kon5],
      rys: [rys1, rys2, rys3, rys4, rys5, rys6],
      wilk: [wilk1, wilk2, wilk3, wilk4, wilk5],
      zbik: [zbik1, zbik2, zbik3, zbik4, zbik5, zbik6],
      kuchnia: [kuchnia1, kuchnia2, kuchnia3]
   },
   info: [
      {
         icon: FaUser,
         label: "Osoby",
         value: "2-4"
      },
      {
         icon: FaBath,
         label: "Łazienka",
         value: "tak"
      },
   ],
   options: [
      {
         label: 'Kuchnia',
         description: 'w pełni wyposażona kuchnia (lodówka, płyta grzewcza, kuchenka mikrofalowa, czajnik elektryczny, naczynia, sztućce itp.)',
         icon: FaKitchenSet
      },
      {
         label: 'WI-FI',
         description: 'dostęp do internetu poprzez Wi-Fi',
         icon: FaWifi
      },
      {
         label: 'Parking',
         description: 'bezpieczny, ogrodzony parking',
         icon: FaParking
      },
      {
         label: 'Ognisko',
         description: 'możliwość korzystania ze specjalnie przygotowanego miejsca na ognisko',
         icon: FaFire
      },
      {
         label: 'Plac zabaw',
         description: 'plac zabaw z piaskownicą dla najmłodszych (aktualnie niedostępny)',
         icon: FaShapes
      },
      {
         label: 'Sport',
         description: 'zielony teren idealny do gier zespołowych tj. piłka nożna, badminton, piłka siatkowa itp.',
         icon: MdOutlineSportsSoccer
      },
      {
         label: 'Bliskość sklepu',
         description: 'sklep spożywczo - przemysłowy w odległości 100m',
         icon: FaShoppingBasket
      },
      {
         label: 'Trampolina',
         description: 'wyjątkowa zabawa dla naszych najmłodszych Gości (aktualnie niedostępna)',
         icon: FaChild
      },
      {
         label: 'Atrakcje',
         description: 'liczne atrakcje turystyczne w okolicy oraz centrum Cisnej w odległości 2km',
         icon: FaHiking
      },
   ]
}





export const navLinks = [
   {
      label: "o-nas",
      path: "/#o-nas"
   },
   {
      label: "oferta",
      path: "/#oferta"
   },
   {
      label: "okolica",
      path: "/okolica"
   },
   {
      label: "galeria",
      path: "/galeria"
   },
   {
      label: "kontakt",
      path: "/#kontakt"
   },
]

export const colors = [
   {
      number: 1,
      color: 'bg-yellow-500',
      text: 'text-yellow-500',
      hover: 'bg-yellow-400'
   },
   {
      number: 2,
      color: 'bg-green-600',
      text: 'text-green-600',
      hover: 'bg-green-500'
   },
   {
      number: 3,
      color: 'bg-blue-600',
      text: 'text-blue-600',
      hover: 'bg-blue-500'
   },
   {
      number: 4,
      color: 'bg-red-600',
      text: 'text-red-600',
      hover: 'bg-red-500'
   },
   {
      number: 5,
      color: 'bg-violet-600',
      text: 'text-violet-600',
      hover: 'bg-violet-500'
   },
   {
      number: 6,
      color: 'bg-gray-600',
      text: 'text-gray-600',
      hover: 'bg-gray-500'
   },
   {
      number: 7,
      color: 'bg-zinc-600',
      text: 'text-zinc-600',
      hover: 'bg-zinc-500'
   },
   {
      number: 8,
      color: 'bg-slate-600',
      text: 'text-slate-600',
      hover: 'bg-slate-500'
   },
   {
      number: 9,
      color: 'bg-stone-600',
      text: 'text-stone-600',
      hover: 'bg-stone-500'
   },
   {
      number: 10,
      color: 'bg-emerald-600',
      text: 'text-emerald-600',
      hover: 'bg-emerald-500'
   },
   {
      number: 11,
      color: 'bg-teal-600',
      text: 'text-teal-600',
      hover: 'bg-teal-500'
   },
   {
      number: 12,
      color: 'bg-neutral-600',
      text: 'text-neutral-600',
      hover: 'bg-neutral-500'
   },
]

export const regionList = [
   {
      title: 'Atrakcje w Bieszczadzkim Klinie',
      description1: 'U nas każdy znajdzie coś dla siebie!',
      description2: 'Boisko do piłki siatkowej, badmington, trampolina, leżaki, altanka, ognisko, rusztowanie, plac zabaw... to tylko początek!',
      images: [bklin1, bklin2, bklin3, bklin4, bklin5, bklin6, bklin7, bklin8, bklin9, bklin10]
   },
   {
      title: 'Kolejka Bieszczadzka',
      description1: 'Jedna z najpopularniejszych atrakcji w okolicach Bieszczadzkiego Klinu',
      description2: 'Po sąsiedzku znajduje się główna stacja Bieszczadzkiej Kolei Wąskotorowej, z której można wybrać się na niezapomnianą przejażdżkę wzdłuż pięknych bieszczadzkich lasów...',
      images: [train1, train2, train3, train4, train5, train6]
   },
   {
      title: 'Leśny Zwierzyniec',
      description1: 'Mini ZOO niedaleko Bieszczadzkiego Klinu',
      description2: 'Ciekawym urozmaiceniem zarówno dla naszych najmłodszych Gości, jak i dorosłych jest wizyta w Leśnym Zwierzyńcu...',
      images: [animal1, animal2, animal3, animal4, animal5, animal6]
   },
   {
      title: 'Szlaki turystyczne',
      description1: 'Niezapomniane widoki!',
      description2: 'Piękno Bieszczad polega na tym, że każdy zawsze znajdzie w nich coś dla siebie - niezależnie od nastroju, wieku, czy kondycji fizycznej!',
      images: [trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8]
   },
]