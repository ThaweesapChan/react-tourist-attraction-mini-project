import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import Navbar from "./components/NavBar";


function App() {
  const [searchText, setSearchText] = useState("");
  const [travalData, setTravalData] = useState([]);

  const getTravalData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      console.log(response.data.data);
      setTravalData(response.data.data);
    } catch (error) {
      console.error("Error fetching travel data:", error);
    }
  };

  useEffect(() => {
    getTravalData();
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      {travalData.map((travel) => (
        <PostCard
          key={travel.eid}
          title={travel.title}
          description={travel.description}
          imageUrl1={travel.photos[0]}
          imageUrl2={travel.photos[1]}
          imageUrl3={travel.photos[2]}
          imageUrl4={travel.photos[3]}
          url={travel.url}
        />
      ))}
    </div>
  );
}

export default App;
