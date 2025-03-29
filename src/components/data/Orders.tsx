// Define the item type
type Order = {
  date: string;
  client: string;
  owner: string;
  package: string;
  receiver: string;
  dropOffLocation: string; // Corrected property name to match the type
  status: string;
};

// List of possible drop-off locations
const dropOffLocations: string[] = [
  "16 Shomolu, Lagos",
  "456 Elm St, City B",
  "789 Oak St, City C",
  "321 Pine St, City D",
  "654 Maple St, City E",
  "16 London road, Lekki",
  "No 14 victoria island, Lagos",
  "246 Walnut St, City H",
  "No 8 Asabe street, Delta state",
  "No 2 orile, oshodi Lagos",
];

// Function to get a random location from the list
const getRandomLocation = (): string => {
  const randomIndex = Math.floor(Math.random() * dropOffLocations.length);
  return dropOffLocations[randomIndex];
};

// Orders array with random drop-off locations
const orders: Order[] = [
  {
    date: "2024-03-10",
    client: "John Doe",
    owner: "Jane Smith",
    package: "Electronics",
    receiver: "Alice Brown",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "pending",
  },
  {
    date: "2024-03-11",
    client: "Mark Johnson",
    owner: "David Lee",
    package: "Books",
    receiver: "Emily Davis",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "delivered",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "delivered",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "pending",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "Pending",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "delivered",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "Pending",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "delivered",
  },
  {
    date: "2024-04-06",
    client: "john Becky",
    owner: "Peculiar Amaka",
    package: "phone",
    receiver: "success",
    dropOffLocation: getRandomLocation(), // Randomly assigned location
    status: "delivered",
  },
];

export default orders;