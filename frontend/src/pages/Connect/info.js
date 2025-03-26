import img1 from './img/team-1.jpg';
import img2 from './img/team-2.jpg';
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";

const profiles = [
  {
    id: "1",
    name: 'John Doe',
    profession: 'Software Engineer',
    img: img1,
    location: 'San Francisco, CA',
    wages: '$100/hr',
    times: 'Full-time',
    exp: '5 years',
  },
  {
    id: "2",
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    img: img1,
    location: 'Bihar',
    wages: '$80/hr',
    times: 'Part-time',
    exp: '3 years',
  },
  {
    id: "3",
    name: 'Rohan',
    profession: 'Project Manager',
    img: img2,
    location: 'Delhi',
    wages: '$100/hr',
    times: 'FreeLancer',
    exp: '30 years',
  },
  {
    id: "4",
    name: 'Mohan',
    profession: 'Frontend',
    img: img1,
    location: 'New York, NY',
    wages: '$80/hr',
    times: 'Part-time',
    exp: '3 years',
  },
  {
    id: "6",
    name: 'Sohan',
    profession: 'Backend',
    img: img1,
    location: 'New York, NY',
    wages: '$80/hr',
    times: 'Part-time',
    exp: '3 years',
  },
  // Add more profiles as needed
];

const professions = [
  { name: 'Marketing', icon: 'fa-mail-bulk', available: 123 },
  { name: 'Customer Service', icon: 'fa-headset', available: 123 },
  { name: 'Human Resource', icon: 'fa-user-tie', available: 123 },
  { name: 'Project Management', icon: 'fa-tasks', available: 123 },
  { name: 'Business Development', icon: 'fa-chart-line', available: 123 },
  { name: 'Sales & Communication', icon: 'fa-hands-helping', available: 123 },
  { name: 'Web Development', icon: 'fa-book-reader', available: 123 },
  { name: 'Design & Creative', icon: 'fa-drafting-compass', available: 123 },
];

const oprofiles = [
  {
    image: team1,
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team2,
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team3,
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team4,
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team3,
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];

const invited = [
  {id: 1, name: "Rohan"},
  {id: 2, name: "Sohan"},
]
const requested = [
  {id: 3, name: "Rohan"},
  {id: 4, name: "Sohan"},
]
const provisional = [
  {id: 5, name: "Rohan"},
  {id: 6, name: "Sohan"},
  {id: 21, name: "Rohan"},
  {id: 22, name: "Sohan"},
]
const final = [
  {id: 7, name: "Rohan"},
  {id: 123, name: "Sohan"},
]
const manages = {
  invited: invited, requested: requested, provisional: provisional, final: final,
}

export { profiles, professions, oprofiles, manages };