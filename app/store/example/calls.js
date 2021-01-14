import api from "Utils/api";

export const exampleCall = () => {
  const response = api.get("https://aws.random.cat/meow");
  console.log(response);
};
