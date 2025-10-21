import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Assignment Help",
        newTab: false,
        path: "/services/assignment-help",
      },
      {
        id: 22,
        title: "Homework Help",
        newTab: false,
        path: "/services/homework-help",
      },
      {
        id: 23,
        title: "Essay Writing",
        newTab: false,
        path: "/services/essay-writing",
      },
      {
        id: 24,
        title: "Dissertation Help",
        newTab: false,
        path: "/services/dissertation-help",
      },
      {
        id: 25,
        title: "Project Report Help",
        newTab: false,
        path: "/services/project-report-help",
      },
    ],
  },
  {
    id: 3,
    title: "Subjects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Programming",
        newTab: false,
        submenu: [
          { id: 311, title: "C#", path: "/subjects/programming/c-sharp", newTab: false },
          { id: 312, title: "Python", path: "/subjects/programming/python", newTab: false },
          { id: 313, title: "C++", path: "/subjects/programming/cpp", newTab: false },
          { id: 314, title: "Java", path: "/subjects/programming/java", newTab: false },
          { id: 315, title: "Web Development", path: "/subjects/programming/web-dev", newTab: false },
        ],
      },
      {
        id: 32,
        title: "Computer Science",
        newTab: false,
        submenu: [
          { id: 321, title: "Machine Learning", path: "/subjects/computer-science/machine-learning", newTab: false },
          { id: 322, title: "Artificial Intelligence", path: "/subjects/computer-science/artificial-intelligence", newTab: false },
          { id: 323, title: "Data Science", path: "/subjects/computer-science/data-science", newTab: false },
          { id: 324, title: "Cryptography", path: "/subjects/computer-science/cryptography", newTab: false },
          { id: 325, title: "Big Data", path: "/subjects/computer-science/big-data", newTab: false },
        ],
      },
      {
        id: 33,
        title: "Mathematics",
        newTab: false,
        submenu: [
          { id: 331, title: "Statistics", path: "/subjects/mathematics/statistics", newTab: false },
          { id: 332, title: "Calculus", path: "/subjects/mathematics/calculus", newTab: false },
          { id: 333, title: "Algebra", path: "/subjects/mathematics/algebra", newTab: false },
        ],
      },
      {
        id: 34,
        title: "Management",
        newTab: false,
        submenu: [
          { id: 341, title: "Marketing", path: "/subjects/management/marketing", newTab: false },
          { id: 342, title: "Finance", path: "/subjects/management/finance", newTab: false },
          { id: 343, title: "Human Resource", path: "/subjects/management/hr", newTab: false },
        ],
      },
      {
        id: 35,
        title: "Engineering",
        newTab: false,
        submenu: [
          { id: 351, title: "Mechanical", path: "/subjects/engineering/mechanical", newTab: false },
          { id: 352, title: "Civil", path: "/subjects/engineering/civil", newTab: false },
          { id: 353, title: "Electrical", path: "/subjects/engineering/electrical", newTab: false },
          { id: 354, title: "Chemical", path: "/subjects/engineering/chemical", newTab: false },
        ],
      },
      {
        id: 36,
        title: "Arts & Humanities",
        newTab: false,
        submenu: [
          { id: 361, title: "History", path: "/subjects/arts/history", newTab: false },
          { id: 362, title: "Sociology", path: "/subjects/arts/sociology", newTab: false },
          { id: 363, title: "English Literature", path: "/subjects/arts/english", newTab: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 5,
    title: "Reviews",
    newTab: false,
    path: "/reviews",
  },
  {
    id: 6,
    title: "AI Study Tools",
    newTab: false,
    submenu: [
      { id: 61, title: "AI Paraphraser", path: "/ai-tools/paraphraser", newTab: false },
      { id: 62, title: "AI Summarizer", path: "/ai-tools/summarizer", newTab: false },
      { id: 63, title: "AI Essay Writer", path: "/ai-tools/essay-writer", newTab: false },
      { id: 64, title: "AI Proofreader", path: "/ai-tools/proofreader", newTab: false },
    ],
  },
];

export default menuData;

