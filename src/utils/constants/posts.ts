import { customFaker } from "@/lib/faker";

export const posts = Array.from(
  { length: customFaker.number.int({ min: 0, max: 16 }) },
  () => ({
    id: customFaker.string.uuid(),
    content: customFaker.lorem.text(),
    author: {
      id: customFaker.string.uuid(),
      name: customFaker.person.firstName(),
      image: customFaker.image.avatar(),
    },
    comments: Array.from(
      { length: customFaker.number.int({ min: 0, max: 16 }) },
      () => ({
        author: {
          image: customFaker.image.avatar(),
        },
      }),
    ),
  }),
);
