import md5 from "md5";
export const initialLoad = {
  users: [
    {
      id: "u0",
      name: "admin",
      role: "admin",
      passwordHash: md5("P@ssw0rd")
    }
  ],
  questions: [
    {
      id: 1,
      title: "What is the current year?",
      choices: [
        {
          value: 2020,
          id: 1
        },
        {
          value: 2040,
          id: 2
        },
        {
          value: 2010,
          id: 3
        }
      ],
      answer:1
    },
    {
      id: 2,
      title: "What is the current Month?",
      choices: [
        {
          value: "May",
          id: 1
        },
        {
          value: "February",
          id: 2
        },
        {
          value: "March",
          id: 3
        }
      ],
      answer: 3
    },
    {
      id: 3,
      title: "Which one of the following is not an animal?",
      choices: [
        {
          value: "Horse",
          imgSrc: "../img/horse.png",
          id: 1
        },
        {
          value: "Dog",
          imgSrc: "",
          id: 2
        },
        {
          value: "Mobile",
          imgSrc: "",
          id: 3
        }
      ],
      answer: 3
    },
    {
      id: 4,
      title: "Which one of the following is an animal?",
      choices: [
        {
          value: "Computer",
          imgSrc: "",
          id: 1
        },
        {
          value: "Cat",
          imgSrc: "../img/cat.png",
          id: 2
        },
        {
          value: "Mobile",
          imgSrc: "",
          id: 3
        }
      ],
      answer: 2
    }
  ]
};
