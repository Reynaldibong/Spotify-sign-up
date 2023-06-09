import ilogo from "../assets/spotifylogo.png";
import albuma from "../assets/album1.jpeg";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import Ccontent from "./main";
import Navbar from "./Rey NV";
import Playbar from "./Rey PL";

export default function Sidebar(props) {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        {/* SIDEBAR  */}
        <Box className="imotherside" pos={"absolute"} zIndex={3}>
          <div className="ilogo">
            <img src={ilogo} alt="" />
          </div>
          <div className="imenus">
            <div className="item">
              <div className="isvg">
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                </svg>
              </div>
              <div className="imenus3">Home</div>
            </div>
            <div className="item">
              <div className="isvg">
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
              </div>
              <div className="imenus3">Search</div>
            </div>
            <div className="item">
              <div className="isvg">
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
                </svg>
              </div>
              <div className="imenus3">Your Library</div>
            </div>
          </div>

          <div className="iplaylist">
            <div className="item">
              <div className="isvg">
                <BsFillPlusSquareFill className="ireacticon" fontSize="1.5em" />
              </div>
              <div className="imenus3">Create Playlist</div>
            </div>
            <div className="item">
              <div class="ilike">
                <svg
                  role="img"
                  height="12"
                  width="12"
                  padding="5px"
                  fill="white"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                </svg>
              </div>

              <div className="imenus3">Liked Songs</div>
            </div>
            <div className="iseparator"></div>
            <div className="ipadding"></div>

            <div className="imyplaylist">
              <div className="iplaylistcard">Daily Lift</div>
              <div className="iplaylistcard">Mood Booster</div>
              <div className="iplaylistcard">Long Drive</div>
              <div className="iplaylistcard">Parteey 🎉</div>
              <div className="iplaylistcard">Menangos 😭</div>
              <div className="iplaylistcard">Study</div>
              <div className="iplaylistcard">Focus</div>
              <div className="iplaylistcard">While Cooking</div>
              <div className="iplaylistcard">Daily Lift</div>
              <div className="iplaylistcard">Mood Booster</div>
              <div className="iplaylistcard">Long Drive</div>
              <div className="iplaylistcard">Parteey 🎉</div>
              <div className="iplaylistcard">Menangos 😭</div>
              <div className="iplaylistcard">Study</div>
              <div className="iplaylistcard">Focus</div>
              <div className="iplaylistcard">While Cooking</div>
              <div className="iplaylistcard">Daily Lift</div>
              <div className="iplaylistcard">Mood Booster</div>
              <div className="iplaylistcard">Long Drive</div>
              <div className="iplaylistcard">Pareey 🎉</div>
              <div className="iplaylistcard">Menangos 😭</div>
              <div className="iplaylistcard">Study</div>
              <div className="iplaylistcard">Focus</div>
              <div className="iplaylistcard">While Cooking</div>
              <div className="iplaylistcard">Daily Lift</div>
              <div className="iplaylistcard">Mood Booster</div>
              <div className="iplaylistcard">Long Drive</div>
              <div className="iplaylistcard">Parteey 🎉</div>
              <div className="iplaylistcard">Menangos 😭</div>
              <div className="iplaylistcard">Study</div>
              <div className="iplaylistcard">Focus</div>
              <div className="iplaylistcard">While Cooking</div>
              <div className="iplaylistcard">Daily Lift</div>
              <div className="iplaylistcard">Mood Booster</div>
              <div className="iplaylistcard">Long Drive</div>
              <div className="iplaylistcard">Parteey 🎉</div>
              <div className="iplaylistcard">Menangos 😭</div>
              <div className="iplaylistcard">Study</div>
              <div className="iplaylistcard">Focus</div>
              <div className="iplaylistcard">While Cooking</div>
            </div>
          </div>
          <div className="iinstall">
            <div className="ipadding"></div>
            <div className="item">
              <div className="isvg">
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
                  <path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path>
                </svg>
              </div>
              <div className="imenus3">Install App</div>
            </div>
          </div>
        </Box>

        {/* MAIN  */}
        <Box className="imothermain" width={"100vw"}>
          {/* <div className="inavbar"></div>
					<div className="imain"></div> */}
          <Navbar />
          <Ccontent data={props.data} setPlaylist={props.setPlaylist} />
        </Box>
      </Box>

      {/* PLAYBAR  */}
      {/* <Box className="imotherplaybar"><Playbar /></Box> */}
    </>
  );
}
