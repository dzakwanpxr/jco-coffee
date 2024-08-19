import { randomDiscount, randomPrice } from "@shared/utils/utils";
import americano from "@assets/americano.webp";
import avocadoFrappe from "@assets/avocado-frappe.webp";
import cafeLatte from "@assets/cafe-latte.webp";
import caramelFrappe from "@assets/caramel-frappe.webp";
import caramelJcoccino from "@assets/caramel-jcoccino.webp";
import hazelnutLatte from "@assets/hazelnut-latte.webp";
import jcoccinoFrappe from "@assets/jcoccino-frappe.webp";
import jcoccino from "@assets/jcoccino.webp";
import mochaEspressoFrappe from "@assets/mocha-espresso-frappe.webp";

export const coffeeProducts = [
  {
    id: 1,
    name: "Hot Black Coffee",
    description: "Hot black coffee.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: americano,
  },
  {
    id: 2,
    name: "Hot Americano",
    description: "Hot Americano",
    price: randomPrice(),
    discount: randomDiscount(),
    image: americano,
  },
  {
    id: 3,
    name: "Hot Caramel Jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: caramelJcoccino,
  },
  {
    id: 4,
    name: "Hot Hazelnut Latte",
    description:
      "Espresso shot with steamed fresh milk, hazelnut syrup, and garnished with caramel sauce.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: hazelnutLatte,
  },
  {
    id: 5,
    name: "Hot Jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: jcoccino,
  },
  {
    id: 6,
    name: "Hot Latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: cafeLatte,
  },
  {
    id: 7,
    name: "Hot Mocha Espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: mochaEspressoFrappe,
  },
  {
    id: 8,
    name: "Iced Americano",
    description: "Iced black coffee.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: americano,
  },
  {
    id: 9,
    name: "Iced Caramel Jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: caramelJcoccino,
  },
  {
    id: 10,
    name: "Iced Jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: jcoccino,
  },
  {
    id: 11,
    name: "Iced Latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: cafeLatte,
  },
  {
    id: 12,
    name: "Iced Mocha Espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: mochaEspressoFrappe,
  },
  {
    id: 13,
    name: "Avocado Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, avocado powder, topped with mocha cream, and garnished with chocolate flakes.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: avocadoFrappe,
  },
  {
    id: 14,
    name: "Caramel Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, caramel syrup, topped with mocha cream, and garnished with caramel sauce.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: caramelFrappe,
  },
  {
    id: 15,
    name: "Jcoccino Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, vanilla powder, topped with mocha cream.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: jcoccinoFrappe,
  },
  {
    id: 16,
    name: "Mocha Espresso Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: randomPrice(),
    discount: randomDiscount(),
    image: mochaEspressoFrappe,
  },
];
