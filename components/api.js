import { useState, useEffect } from "react";

function CallAPI(url) {
  const [items, setItems] = useState([]);

  if (url != "https://www.swapi.tech/api/films") {
    const fetchItems = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data.results));
    };
    useEffect(() => {
      fetchItems();
    }, []);

    return (
      <div>
        {items.map((item) => (
          <p key={item.id}>{`○  ${item.name}`}</p>
        ))}
      </div>
    );
  }

  const fetchItems = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.result));
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{`○  ${item.properties.title}`}</p>
      ))}
    </div>
  );
}

export default CallAPI;
