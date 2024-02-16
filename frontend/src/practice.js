import "./styles.css";
import { useEffect } from "react";

export default function App() {
  let data;
  async function fetchdata() {
    let temp = await fetch("https://dummyjson.com/products").then((data) =>
      data.json(),
    );
    data = temp.products;
    console.log(data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="App">
      pagination here.
      <div className="data">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}
