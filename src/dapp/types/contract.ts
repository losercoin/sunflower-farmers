import { Item, items } from "./crafting";
import { FruitItem, FRUITS, Fruit } from "./fruits";

export { Fruit };

export enum Charity {
  TheWaterProject = "0x1EC0E4DC543566f26B73800700080B4b2f3fD208",
  Heifer = "0x6Bf8a9Af2CA25D593A17255694b798eB97f0F5c7",
  CoolEarth = "0x33be1F5c1Cc90D1243Ff5Fc882BE447DAAe112D4",
}

export interface Donation {
  charity: Charity;
  value: string;
}
export interface Square {
  fruit: Fruit;
  createdAt: number;
}

export interface Transaction {
  fruit: Fruit;
  createdAt: number;
  action: Action;
  landIndex: number;
}

export enum Action {
  Plant = 0,
  Harvest = 1,
}

export type ActionableItem = FruitItem | Item;

export function isFruit(item: ActionableItem): item is FruitItem {
  return !(item as Item).address;
}

export const ACTIONABLE_ITEMS = [...FRUITS, ...items];
