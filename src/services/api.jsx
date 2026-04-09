const contentData = [
  {
    id: 1,
    user: "Ravi",
    text: "This is a normal post",
    status: "pending"
  },
  {
    id: 2,
    user: "Anita",
    text: "Spam promotion link!!!",
    status: "pending"
  },
  {
    id: 3,
    user: "Kumar",
    text: "Good morning everyone",
    status: "approved"
  }
];

export const getContent = () => {
  return Promise.resolve(contentData);
};