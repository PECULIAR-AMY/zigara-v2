// Define the type for a single notification
interface Notification {
    id: number;
    image: string;
    name: string;
    statement: string;
    hour: string;
  }
  
  // Create the notifications array with the defined type
  export const NotificationData: Notification[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1623930154261-37f8b293c059?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww", // Placeholder image URL
      name: "John Doe",
      statement: "Your package has been picked up by the rider.",
      hour: "2 hours ago",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/2198677079/photo/smile-laptop-and-research-with-business-woman-in-office-for-online-reading-or-corporate.jpg?s=612x612&w=0&k=20&c=zAjD4Xo1brjeF7OBBBjzSQ376oBatqhSVpEKjj6Kc5k=",
      name: "Jane Smith",
      statement: "Rider is on the way to deliver your package.",
      hour: "3 hours ago",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/2199045755/photo/glasses-computer-and-reading-with-business-woman-in-office-for-planning-website-and-email.jpg?s=612x612&w=0&k=20&c=LpcU-v9a0UNOTlrjYksdEoq6arA2_HH2j3_HkBzoePY=",
      name: "Alice Johnson",
      statement: "Your package has been delivered successfully.",
      hour: "5 hours ago",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBtYW58ZW58MHx8MHx8fDA%3D",
      name: "Bob Brown",
      statement: "Rider has arrived at the pickup location.",
      hour: "6 hours ago",
    },
    {
      id: 5,
      image: "https://media.istockphoto.com/id/1450970657/photo/programmer-examining-computer-codes-on-computer.jpg?s=612x612&w=0&k=20&c=sXKkgO3z1Nh-29PoclLuMdTXZIvxcJG9qetezT0krqw=",
      name: "Charlie Davis",
      statement: "Your package is out for delivery.",
      hour: "8 hours ago",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Eva Green",
      statement: "Rider is delayed due to traffic.",
      hour: "10 hours ago",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Frank Wilson",
      statement: "Your package is ready for pickup.",
      hour: "12 hours ago",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1611608822650-925c227ef4d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8fDA%3D",
      name: "Grace Lee",
      statement: "Rider has completed the delivery.",
      hour: "1 day ago",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww",
      name: "Henry Clark",
      statement: "Your package is delayed due to weather conditions.",
      hour: "2 days ago",
    },
    {
      id: 10,
      image: "https://media.istockphoto.com/id/1362381053/photo/smart-business-woman-working-with-computer-while-talking-with-earphone-sitting-in-modern.jpg?s=612x612&w=0&k=20&c=QLJxBcQR4Hqzi7EjZosbsTJHOKKwctQ5NuJcN0pahyA=",
      name: "Ivy Adams",
      statement: "Rider has started the delivery process.",
      hour: "3 days ago",
    },
  ];