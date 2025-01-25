import { createListCollection } from "@chakra-ui/react";

export const categoryTypes = createListCollection({
  items: [
    {
      key: "General Knowledge",
      label: "General Knowledge",
      value: "9",
    },
    {
      key: "Books",
      label: "Books",
      value: "10",
    },
    {
      key: "Films",
      label: "Films",
      value: "11",
    },
    {
      key: "Music",
      label: "Music",
      value: "12",
    },
    {
      key: "Musicals & Theatres",
      label: "Musicals & Theatres",
      value: "13",
    },
    {
      key: "Television",
      label: "Television",
      value: "14",
    },
    {
      key: "Video Games",
      label: "Video Games",
      value: "15",
    },
    {
      key: "Board Games",
      label: "Board Games",
      value: "16",
    },
    {
      key: "Science & Knowledge",
      label: "Science & Knowledge",
      value: "17",
    },
    {
      key: "Computers",
      label: "Computers",
      value: "18",
    },
    {
      key: "Mathematics",
      label: "Mathematics",
      value: "19",
    },
    {
      key: "Mythology",
      label: "Mythology",
      value: "20",
    },
    {
      key: "Sports",
      label: "Sports",
      value: "21",
    },
    {
      key: "Geography",
      label: "Geography",
      value: "22",
    },
    {
      key: "History",
      label: "History",
      value: "23",
    },
    {
      key: "Politics",
      label: "Politics",
      value: "24",
    },
    {
      key: "Arts",
      label: "Arts",
      value: "25",
    },
    {
      key: "Celebrities",
      label: "Celebrities",
      value: "26",
    },
    {
      key: "Animals",
      label: "Animals",
      value: "27",
    },
    {
      key: "Vehicles",
      label: "Vehicles",
      value: "28",
    },
    {
      key: "Comics",
      label: "Comics",
      value: "29",
    },
    {
      key: "Gadgets",
      label: "Gadgets",
      value: "30",
    },
    {
      key: "Japanese Anime & Manga",
      label: "Japanese Anime & Manga",
      value: "31",
    },
    {
      key: "Cartoon & Animations",
      label: "Cartoon & Animations",
      value: "32",
    },
  ],
});

export const difficultyLevels = createListCollection({
  items: [
    {
      label: "Easy",
      value: "easy",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Hard",
      value: "hard",
    },
  ],
});

export const questionTypes = [
  { label: "Multiple Choice", value: "multiple" },
  { label: "True/False", value: "boolean" },
];
