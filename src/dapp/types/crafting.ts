import Token from "../../abis/Token.json";
import Farm from "../../abis/Farm.json";
import Axe from "../../abis/Axe.json";
import Wood from "../../abis/Wood.json";
import Pickaxe from "../../abis/Pickaxe.json";
import StonePickaxe from "../../abis/StonePickaxe.json";
import IronPickaxe from "../../abis/IronPickaxe.json";
import Stone from "../../abis/Stone.json";
import Gold from "../../abis/Gold.json";
import Egg from "../../abis/Egg.json";
import Chicken from "../../abis/Chicken.json";
import Iron from "../../abis/Iron.json";
import Statue from "../../abis/Statue.json";
import ChristmasTree from "../../abis/ChristmasTree.json";
import Scarecrow from "../../abis/Scarecrow.json";
import PotatoStatue from "../../abis/PotatoStatue.json";
import FarmCat from "../../abis/FarmCat.json";
import FarmDog from "../../abis/FarmDog.json";
import Gnome from "../../abis/Gnome.json";

import pickaxe from "../images/ui/pickaxe.png";
import woodPickaxe from "../images/ui/wood_pickaxe.png";
import ironPickaxe from "../images/ui/iron_pickaxe.png";
import axe from "../images/ui/axe.png";
import hammer from "../images/ui/hammer.png";
import rod from "../images/ui/rod.png";
import sword from "../images/ui/sword.png";
import wood from "../images/ui/wood.png";
import iron from "../images/ui/ore.png";
import goldOre from "../images/ui/gold_ore.png";
import stone from "../images/ui/rock.png";
import gnome from "../images/ui/gnome.png";
import chicken from "../images/ui/chicken.png";
import egg from "../images/ui/egg.png";
import chickenCoop from "../images/ui/chicken_coop.png";
import goldEgg from "../images/ui/gold_egg.png";
import coin from "../images/ui/icon.png";
import statue from "../images/ui/sunflower_statue.png";
import potatoStatue from "../images/ui/potato_statue.png";
import christmasTree from "../images/ui/christmas_tree.png";
import scarecrow from "../images/ui/scarecrow.png";
import farmCat from "../images/ui/farm_cat.png";
import dog from "../images/ui/dog.png";
import wheatSeed from "../images/wheat/seed.png";
import wheat from "../images/wheat/plant.png";
import flour from "../images/wheat/flour.png";

export interface Ingredient {
  name:
    | "Wood"
    | "Stone"
    | "$SFF"
    | "Iron"
    | "Gold"
    | "Egg"
    | "Wheat"
    | "MATIC";
  image: any;
  amount: number;
}

export interface Recipe extends Item {
  ingredients: Ingredient[];
}

export interface Item {
  name:
    | "Axe"
    | "Wood pickaxe"
    | "Stone Pickaxe"
    | "Iron Pickaxe"
    | "Fishing rod"
    | "Hammer"
    | "Stone"
    | "Wood"
    | "Iron"
    | "Gold"
    | "Egg"
    | "Chicken"
    | "Sword"
    | "Chicken coop"
    | "Sunflower Statue"
    | "OG Potato Statue"
    | "Christmas Tree"
    | "Golden Egg"
    | "Scarecrow"
    | "Farm Cat"
    | "Farm Dog"
    | "Gnome"
    | "Wheat Seed"
    | "Flour";
  description: string;
  address: string;
  image: any;
  type: "ERC20" | "NFT";
  communityMember?: {
    twitterName?: string;
    twitterLink?: string;
    discordName?: string;
  };
  isLocked?: boolean;
  supply?: number;
  limit?: number;
  farmLevel?: number;
  abi?: any;
  openSeaLink?: string;
}

export const recipes: Recipe[] = [
  {
    name: "Axe",
    description: "Used for cutting and collecting wood",
    image: axe,
    type: "ERC20",
    address: "0xbF3b50220F095C6597bc165a602fCEFA0eDc808B",
    ingredients: [
      {
        name: "$SFF",
        amount: 1,
        image: coin,
      },
    ],
    abi: Axe,
  },
  {
    name: "Wood pickaxe",
    description: "Used for mining and collecting stone",
    image: woodPickaxe,
    type: "ERC20",
    address: "0x7865C8C04A647D0ca40da87c75180919825e8588",
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 2,
        image: coin,
      },
    ],
    abi: Pickaxe,
  },
  {
    name: "Stone Pickaxe",
    abi: StonePickaxe,
    description: "Used for mining and collecting iron ore",
    image: pickaxe,
    type: "ERC20",
    address: "0xBF3AC45E7eb5b3c9853F71C2A3270fAf68F8d552",
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "Stone",
        amount: 5,
        image: stone,
      },
      {
        name: "$SFF",
        amount: 2,
        image: coin,
      },
    ],
  },
  {
    name: "Iron Pickaxe",
    abi: IronPickaxe,
    description: "Used for mining and collecting gold",
    image: ironPickaxe,
    type: "ERC20",
    address: "0xCf57667f3c107Cd97105B9CD97c81C21aB8ba0C5",
    ingredients: [
      {
        name: "Wood",
        amount: 10,
        image: wood,
      },
      {
        name: "Iron",
        amount: 10,
        image: iron,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Hammer",

    description: "Used for building barns, coops & other structures",
    image: hammer,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Fishing rod",
    description: "Used for fishing and gathering fish",
    image: rod,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Sword",
    description: "Used for fighting monsters and collecting rewards",
    image: sword,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wood",
        amount: 5,
        image: wood,
      },
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Sunflower Statue",
    abi: Statue,
    description: "A symbol of the holy token",
    image: statue,
    type: "NFT",
    address: "0xCdbBC29265f0F3393A0e0C00a7415857E9Af4b8C",
    ingredients: [
      {
        name: "$SFF",
        amount: 50,
        image: coin,
      },
      {
        name: "Stone",
        amount: 50,
        image: stone,
      },
      {
        name: "Iron",
        amount: 50,
        image: iron,
      },
    ],
    supply: 1000,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-statue",
  },
  {
    name: "Scarecrow",
    abi: Scarecrow,
    description: "Grow wheat (coming soon) 3x faster.",
    image: scarecrow,
    type: "NFT",
    address: "0x5c1063DE871C9C98AdE8F309654E095593De6570",
    ingredients: [
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
      {
        name: "Wood",
        amount: 50,
        image: wood,
      },
    ],
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-scarecrow",
    supply: 5000,
  },
  {
    name: "Christmas Tree",
    abi: ChristmasTree,
    description: "A christmas tree for the holidays",
    image: christmasTree,
    type: "NFT",
    address: "0x53d246cA9591EA1E175A266afaCaf6652ecAE664",
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-christmas-tree",
    ingredients: [
      {
        name: "$SFF",
        amount: 300,
        image: coin,
      },
      {
        name: "Wood",
        amount: 500,
        image: wood,
      },
    ],
    supply: 50,
  },
  {
    name: "Chicken coop",
    abi: ChristmasTree,
    description: "Produce eggs 3x as fast with this stylish coop",
    image: chickenCoop,
    type: "NFT",
    address: "0x4490A931d03A5c2F201F5FCe812dA44529f36137",
    ingredients: [
      {
        name: "$SFF",
        amount: 200,
        image: coin,
      },
      {
        name: "Wood",
        amount: 300,
        image: wood,
      },
      {
        name: "Gold",
        amount: 25,
        image: goldOre,
      },
    ],
    supply: 2000,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-chicken-coop",
  },
  {
    name: "Chicken",
    abi: Chicken,
    description: "An animal used to produce eggs",
    image: chicken,
    type: "ERC20",
    address: "0x8B3acDe8DA303e4A22AB074f73D1c4d32Dd55908",
    ingredients: [
      {
        name: "$SFF",
        amount: 10,
        image: coin,
      },
    ],
  },
  {
    name: "Golden Egg",
    abi: Chicken,
    description: "Will the golden egg bring you happiness?",
    image: goldEgg,
    type: "NFT",
    address: "0x3059facf426Dae7A015a2b58A46782F26038C738",
    limit: 300,
    supply: 300,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-golden-egg",
    ingredients: [
      {
        name: "Gold",
        amount: 50,
        image: goldOre,
      },
      {
        name: "Egg",
        amount: 150,
        image: egg,
      },
    ],
  },
  {
    name: "OG Potato Statue",
    abi: PotatoStatue,
    description: "Flex your status as an original potato hustler",
    image: potatoStatue,
    type: "NFT",
    address: "0xdfa1Db59017D6D216D9b40Ce05F6bE16AF11d8B3",
    ingredients: [
      {
        name: "Stone",
        amount: 5,
        image: stone,
      },
    ],
    supply: 10000,
    openSeaLink:
      "https://opensea.io/collection/sunflower-farmers-og-potato-statue",
  },
  {
    name: "Farm Cat",
    abi: FarmCat,
    description: "A cat named Victoria that helps keep rats away.",
    image: farmCat,
    type: "NFT",
    address: "0x997Bb38CDF3d15342dfb4B78efE51C90a5ab068d",
    ingredients: [
      {
        name: "Gold",
        amount: 5,
        image: goldOre,
      },
    ],
    farmLevel: 5,
    supply: 75,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-cat",
  },
  {
    name: "Farm Dog",
    abi: FarmDog,
    description: "Herd sheep 4x faster with Chonker the Dog.",
    image: dog,
    type: "NFT",
    address: "0x6df04b53b4Fb9668eeAE739479b0ef67F6625706",
    ingredients: [
      {
        name: "$SFF",
        amount: 30,
        image: coin,
      },
    ],
    communityMember: {
      discordName: "bumpkinbuilder",
      twitterName: "@sunflowerfarmz",
      twitterLink: "https://twitter.com/sunflowerfarmz",
    },
    supply: 500,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-dog",
  },
  {
    name: "Gnome",
    abi: Gnome,
    description: "Influence the weather with this magic gnome",
    image: gnome,
    type: "NFT",
    address: "0xB57eC65C58404700265a9b1f103cd0Aa3C48c406",
    ingredients: [
      {
        name: "$SFF",
        amount: 5,
        image: coin,
      },
    ],
    communityMember: {
      discordName: "firstmover",
    },
    supply: 1000,
    openSeaLink: "https://opensea.io/collection/sunflower-farmers-gnome",
  },
  {
    name: "Wheat Seed",
    description: "Used for planting wheat",
    image: wheatSeed,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "$SFF",
        amount: 0.1,
        image: coin,
      },
    ],
  },
  {
    name: "Flour",
    description: "Used in recipes",
    image: flour,
    type: "ERC20",
    address: "TODO",
    isLocked: true,
    ingredients: [
      {
        name: "Wheat",
        amount: 1,
        image: wheat,
      },
    ],
  },
];

export const items: Item[] = [
  ...recipes,
  {
    name: "Stone",
    abi: Stone,
    description: "A natural resource in Sunflower Land used for crafting",
    image: stone,
    type: "ERC20",
    address: "0x52C06763F9E92eCba23C1068Cbe5a374e13c8609",
  },
  {
    name: "Wood",
    abi: Wood,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: wood,
    type: "ERC20",
    address: "0x1A648C8210382e598f5Bd32eB9b8003d49E6dc00",
  },

  {
    name: "Iron",
    abi: Iron,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: iron,
    type: "ERC20",
    address: "0x22076CF56620b629865bb0BAeC458bBE8f030b53",
  },
  {
    name: "Gold",
    abi: Gold,
    description: "A scarce resource in Sunflower Land used for crafting",
    image: goldOre,
    type: "ERC20",
    address: "0x0F4D6456A234166268ce0dA9485F810280AAC75b",
  },
  {
    name: "Egg",
    abi: Egg,
    description:
      "A bountiful resource in Sunflower Land used for crafting",
    image: egg,
    type: "ERC20",
    address: "0x7dB175Bde9b63A444833C1A81FA5Be3713BE7C71",
  },
];

export type Inventory = Record<ItemName, number>;

export const DEFAULT_INVENTORY: Inventory = {
  Wood: 0,
  Stone: 0,
  Axe: 0,
  "Wood pickaxe": 0,
  "Stone Pickaxe": 0,
  "Iron Pickaxe": 0,
  Iron: 0,
  Gold: 0,
  Chicken: 0,
  Egg: 0,
  "OG Potato Statue": 0,
  "Sunflower Statue": 0,
  "Fishing rod": 0,
  "Chicken coop": 0,
  Hammer: 0,
  Sword: 0,
  Scarecrow: 0,
  "Golden Egg": 0,
  "Christmas Tree": 0,
  "Farm Cat": 0,
  "Farm Dog": 0,
  Gnome: 0,
  "Wheat Seed": 0,
  Flour: 0,
};
export type ItemName = Item["name"];
