// นำเข้า Axios
import axios from "axios";

// ฟังก์ชันสำหรับดึงข้อมูลจาก API
const fetchTravelData = async (keyword) => {
  try {
    // เรียก API
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${keyword}`
    );
    const travelData = response.data.data;
    console.log(travelData);

    // แสดงข้อมูล
    // travelData.forEach((trip) => {
    //   console.log(`Title: ${trip.title}`);
    //   console.log(`Description: ${trip.description}`);
    //   console.log(`URL: ${trip.url}`);
    //   console.log(`Photos: ${trip.photos.join(", ")}`);
    //   console.log(`Tags: ${trip.tags.join(", ")}`);
    //   console.log("-------------------------");
    // });
  } catch (error) {
    console.error("Error fetching travel data:", error);
  }
};

// เรียกฟังก์ชัน
fetchTravelData("");
