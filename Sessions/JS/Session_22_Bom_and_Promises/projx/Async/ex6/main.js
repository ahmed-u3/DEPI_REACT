const users = [
  {
    username: "johnDoe",
    email: "john.doe@example.com",
    password: "johnPassword123", // Example password; should be hashed in real applications
    img: "https://example.com/images/john.jpg",
    posts: [
      {
        id: 1,
        title: "JavaScript Tips",
        content: "Some useful JavaScript tips...",
        date: "2024-09-01",
      },
      {
        id: 2,
        title: "Node.js Tutorial",
        content: "An introductory guide to Node.js...",
        date: "2024-08-20",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    someInfo: {
      age: 30,
      location: "San Francisco, CA",
      bio: "Passionate full-stack developer with 8 years of experience.",
    },
  },
  {
    username: "janeSmith",
    email: "jane.smith@example.com",
    password: "janePassword456", // Example password; should be hashed in real applications
    img: "https://example.com/images/jane.jpg",
    posts: [
      {
        id: 1,
        title: "Product Management 101",
        content: "Basics of product management...",
        date: "2024-08-25",
      },
    ],
    skills: ["Product Management", "Agile", "Wireframing", "User Research"],
    someInfo: {
      age: 28,
      location: "New York, NY",
      bio: "Product manager with a knack for user-centric design.",
    },
  },
  {
    username: "mikeJohnson",
    email: "mike.johnson@example.com",
    password: "mikePassword789", // Example password; should be hashed in real applications
    img: "https://example.com/images/mike.jpg",
    posts: [
      {
        id: 1,
        title: "Machine Learning Basics",
        content: "An introduction to machine learning...",
        date: "2024-08-18",
      },
      {
        id: 2,
        title: "Data Science with Python",
        content: "Exploring data science using Python...",
        date: "2024-09-02",
      },
    ],
    skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    someInfo: {
      age: 35,
      location: "Seattle, WA",
      bio: "Data scientist specializing in machine learning and AI.",
    },
  },
  {
    username: "emilyWhite",
    email: "emily.white@example.com",
    password: "emilyPassword101", // Example password; should be hashed in real applications
    img: "https://example.com/images/emily.jpg",
    posts: [
      {
        id: 1,
        title: "UI/UX Design Principles",
        content: "Core principles of good UI/UX design...",
        date: "2024-08-12",
      },
      {
        id: 2,
        title: "Front-End Development Tips",
        content: "Tips for front-end development...",
        date: "2024-08-29",
      },
    ],
    skills: ["HTML", "CSS", "JavaScript", "Figma", "Adobe XD"],
    someInfo: {
      age: 26,
      location: "Los Angeles, CA",
      bio: "UX designer passionate about creating intuitive digital experiences.",
    },
  },
  {
    username: "davidBrown",
    email: "david.brown@example.com",
    password: "davidPassword202", // Example password; should be hashed in real applications
    img: "https://example.com/images/david.jpg",
    posts: [
      {
        id: 1,
        title: "DevOps Best Practices",
        content: "How to efficiently manage CI/CD pipelines...",
        date: "2024-09-03",
      },
    ],
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    someInfo: {
      age: 40,
      location: "Austin, TX",
      bio: "DevOps engineer focused on automation and cloud infrastructure.",
    },
  },
];

/**
 *  email: "john.doe@example.com",
    password: "johnPassword123",
 */

// function login(email, password) {
//   setTimeout(() => {
//     const user = users.find(user => user.email === email);

//     if (!user || user.password !== password)
//       return console.error("Error : email / password");

//     return user;
//   }, 3000);
// }

// console.log(login("john.doe@example.com", "johnPassword123"));

// promises

// login("john.doe@example.com", "johnPassword123")
//   .then(user => {
//     console.log(user);
//     return getUserPosts(user);
//   })
//   .then(posts => {
//     console.log(posts);
//     return getPostsContent(posts);
//   })
//   .then(content => console.log(content))
//   .catch(error => console.log("Error==> ", error));

// async await function
async function getData() {
  try {
    const user = await login("john.doe@example.com", "johnPassword123");
    console.log(user);
    const posts = await getUserPosts(user);
    console.log(posts);
    const content = await getPostsContent(posts);
    console.log(content);
  } catch (error) {
    console.log("Error==> ", error);
  } finally {
    console.log("Done...!");
  }
}

getData();

console.log(1);
function login(email, password) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users.find(user => user.email === email);
      if (!user || user.password !== password)
        return rej("Error : email / password");
      res(user);
    }, 3000);
  });
}

console.log(2);

function getUserPosts(user) {
  return new Promise(res => {
    setTimeout(() => {
      res(user.posts);
    }, 2000);
  });
}

function getPostsContent(posts) {
  return new Promise(res => {
    setTimeout(() => {
      const postsContent = posts.map(post => post.content);
      res(postsContent);
    }, 4000);
  });
}
