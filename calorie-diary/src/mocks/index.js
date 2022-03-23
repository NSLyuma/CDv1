import { nanoid } from "nanoid";

export const options = Array.from({ length: 5 }).map((_, index) => ({
  name: `Product ${index + 1}`,
  kcal: (index + 1) * 10,
  id: nanoid(),
}));
