import axios from "axios";
import type { AxiosResponse } from "axios";

axios.get("https://exmple.com/data").then((res) => {
  console.log(res.data);
});

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const res: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Todo", res.data);
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      console.log("Axios error", err.message);
      if (err.response) {
        console.log(err.response.status);
      }
    }
  }
};
