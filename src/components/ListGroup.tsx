// import "bootstrap/dist/css/bootstrap.css";
import { MouseEvent, useState } from "react";

interface Props {
  cities: string[];
  heading: string;
} ///Test

function ListGroup({ cities, heading }: Props) {
  //   let selectedIndex = 0;
  //   cities = [];

  //   const message = cities.length === 0 ? <p>No city found !</p> : null;
  //   const getMessage = () => {
  //     return cities.length === 0 ? <p>No city found !</p> : null;
  //   };

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
