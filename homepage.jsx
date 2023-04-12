import Sidebar from "../components/Sidebar";
import Playbar from "../components/Rey PL";
import Navbar from "../components/Rey NV";
import "../components/main.css";
import Ccontent from "../components/main";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import axios from "axios";

export default function HomePage(props) {
  let nav = useNavigate();

  // useEffect(() => {
  //masuk sini pada saat load page
  // const user = JSON.parse(localStorage.getItem("user"));
  // if (!user?.email) {
  //   return nav("/login");
  // }

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  // }, []);

  const [playlist, setPlaylist] = useState([]);
  const [home_playlist, setHome_playlist] = useState([]);

  async function fetchData() {
    await axios.get("http://localhost:2000/musics").then((res) => {
      console.log(res.data);
      setPlaylist(res.data);
    });
    await axios.get("http://localhost:2000/playlist").then((res) => {
      console.log(res.data);
      setHome_playlist(res.data);
    });
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Center w={"100vw"} h={"100vh"}>
          <Spinner size={"xl"} />
        </Center>
      ) : (
        <>
          <Sidebar data={home_playlist} setPlaylist={setPlaylist} />
          {/* <Navbar /> */}
          {/* <Ccontent /> */}
          <Playbar playlist={playlist} />
        </>
      )}
    </>
  );
}
