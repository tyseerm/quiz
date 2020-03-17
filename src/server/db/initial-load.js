import md5 from "md5";
export const initialLoad = {
  users: [
    {
      id: "u0",
      name: "Quiz Maker",
      username: "quizmaker",
      email: "quiz.maker@quiz.com",
      role: "admin",
      passwordHash: md5("P@ssw0rdRain"),
      passwordSalt: "Rain"
    }
  ],
  quizzes: [
    {
      user: "u0",
      id: "q1",
      title: "Very Easy Quiz",
      description: "Easy Quiz for testing",
      active: true,
      level: 7,
      success_percentage: 50,
      show_results: true,
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
          answer: 1
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
    },
    {
      user: "u0",
      id: "q2",
      title: "Easy Math Quiz",
      description: "Easy Math Quiz for testing",
      active: true,
      level: 1,
      success_percentage: 60,
      show_results: true,
      questions: [
        {
          id: 1,
          title: "5 + 5 = ?",
          choices: [
            {
              value: 10,
              id: 1
            },
            {
              value: 5,
              id: 2
            },
            {
              value: 25,
              id: 3
            }
          ],
          answer: 1
        },
        {
          id: 2,
          title: "5 - 5 = ?",
          choices: [
            {
              value: 10,
              id: 1
            },
            {
              value: -5,
              id: 2
            },
            {
              value: 0,
              id: 3
            }
          ],
          answer: 3
        },
        {
          id: 3,
          title: "5 * 5 = ?",
          choices: [
            {
              value: 50,
              id: 1
            },
            {
              value: 5,
              id: 2
            },
            {
              value: 25,
              id: 3
            }
          ],
          answer: 3
        },
        {
          id: 4,
          title: "5 / 5 = ?",
          choices: [
            {
              value: 5,
              imgSrc: "",
              id: 1
            },
            {
              value: 1,
              imgSrc: "",
              id: 2
            },
            {
              value: 0,
              imgSrc: "",
              id: 3
            }
          ],
          answer: 2
        }
      ]
    }
  ]
};
