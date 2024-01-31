import { v4 as uuidv4 } from "uuid"

// nav-menu
const SETTINGS_ITEMS = ["Perfil", "Cerrar sesión"]

const NAV_ITEMS = [
  { id: 1, text: "Inicio", href: "#inicio" },
  { id: 2, text: "Menu", href: "#menu" },
  { id: 3, text: "Eventos", href: "#eventos" },
  { id: 4, text: "Servicios", href: "#servicios" },
]

// comidas - bebidas - etc
const RECOMMENDED_DATA = {
  Almuerzos: [
    {
      id: uuidv4(),
      name: "Name",
      price: "10.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/nvc65alrl9khkgztijhj.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "27.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/bc1lej1cuh3m9o6pxmt6.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "10.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/jihdyidovcvxsllvu4nc.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "21.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/airroikdqoya5alajgvb.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "22.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/fmnsb2jimcgh7cmdh4gd.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "23.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714024/hotel/almuerzos/kmh2wcc6ye2qefexatcf.webp",
    },
  ],
  ["Desayunos_Cenas"]: [
    {
      id: uuidv4(),
      name: "Name",
      price: "10.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714304/hotel/desayunos/tpf2t4y8cjg8mptwaakm.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "33.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714304/hotel/desayunos/zsclidfzkrxmprpzrq7p.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "30.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714304/hotel/desayunos/vglcvpolok8dhcjz9acl.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "30.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714304/hotel/desayunos/kwcc3twotvp9bo2iepim.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "50.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714303/hotel/desayunos/sf2mcfqyqcatrjwdtz7v.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "20.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714304/hotel/desayunos/aqbofoum9euwnkr9amou.webp",
    },
  ],
  Postres: [
    {
      id: uuidv4(),
      name: "Name",
      price: "12.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/nzuqiynylhvdmkpmn2ix.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/reptsnnkxzr76budswwo.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/etmaxofkeutpqobqxoal.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/okxkrijyfopmw0dqyet1.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "35.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/iiofd8npmbton849xvb9.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "23.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714487/hotel/postres/kwxnuvl954ukszlgxxpm.webp",
    },
  ],
  Bebidas: [
    {
      id: uuidv4(),
      name: "Name",
      price: "12.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714645/hotel/bebidas/cvqy6nqwkuz9apqmhfvw.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714645/hotel/bebidas/quvuqjkeutgxq8wwbtug.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714645/hotel/bebidas/zzilq1my5xvnevzjuir8.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "15.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714645/hotel/bebidas/ozq7n2jduqn2ubzrqyge.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "35.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714645/hotel/bebidas/qslrikpbn46u8w5epxkw.webp",
    },
    {
      id: uuidv4(),
      name: "Name",
      price: "23.000",
      image:
        "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706714644/hotel/bebidas/qwjl2elaaqrbz8jjve3t.webp",
    },
  ],
}

// habitaciones
const ROOMS_DATA = [
  {
    id: uuidv4(),
    name: "Nombre de la habitación",
    paragraphs: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      " Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.",
    ],

    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706660132/hotel/rooms/sqbbwg7gxjxgeojptdck.jpg",
  },
  {
    id: uuidv4(),
    name: "Nombre de la habitación",
    paragraphs: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      " Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.",
    ],

    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706660131/hotel/rooms/xkkxcynuawyfeomzkcsx.jpg",
  },
]

//eventos
const EVENTS_DATA = [
  {
    id: uuidv4(),
    title: "Concierto",
    date: "24/04/24 - 15:00hs",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706713402/hotel/events/j4mha1hqo1p7niwgxxwc.webp",
  },
  {
    id: uuidv4(),
    title: "Noche de Vino",
    date: "21/04/24 - 21:00hs",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706712959/hotel/eventos/g3vxy5kdjlpmeuqdaflh.webp",
  },
  {
    id: uuidv4(),
    title: "Concierto",
    date: "02/04/24 - 17:00hs",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706713402/hotel/events/j4mha1hqo1p7niwgxxwc.webp",
  },
]

// servicios
const SERVICES_DATA = [
  {
    id: uuidv4(),
    title: "Piscina",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703956/hotel/services/id5xvufx9wupft8r4vcf.webp",
  },
  {
    id: uuidv4(),
    title: "Spa",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703955/hotel/services/xcnkafanktrxq9r61usd.webp",
  },
  {
    id: uuidv4(),
    title: "Sauna",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703955/hotel/services/wuq8wqvie8tbmhgp6iqr.webp",
  },
  {
    id: uuidv4(),
    title: "Discoteca",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703956/hotel/services/tiajswetalgecdczzlhl.webp",
  },
  {
    id: uuidv4(),
    title: "Desayunos",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703956/hotel/services/qdch1m1drdgd07jfwvzd.webp",
  },
  {
    id: uuidv4(),
    title: "Gimnasio",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703956/hotel/services/vkpy2fpjgsltp9c06bix.webp",
  },
  {
    id: uuidv4(),
    title: "Animaciones",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703956/hotel/services/duds2exjirrf8zf1rgiu.webp",
  },
  {
    id: uuidv4(),
    title: "Transporte",
    image:
      "https://res.cloudinary.com/dgdcfmnnx/image/upload/v1706703537/hotel/services/yeikvntecsxvdshsgqwx.webp",
  },
]

// footer links
const FOOTER_LINKS = [
  { id: uuidv4(), text: "Enlace", href: "#" },
  { id: uuidv4(), text: "Enlace", href: "#" },
  { id: uuidv4(), text: "Enlace", href: "#" },
]

const FOOTER_TERMS = [
  { id: uuidv4(), text: "Términos y condiciones", href: "#" },
  { id: uuidv4(), text: "Politicas de privacidad", href: "#" },
  { id: uuidv4(), text: "Seguridad", href: "#" },
]

export {
  SETTINGS_ITEMS,
  NAV_ITEMS,
  RECOMMENDED_DATA,
  ROOMS_DATA,
  EVENTS_DATA,
  SERVICES_DATA,
  FOOTER_LINKS,
  FOOTER_TERMS,
}
