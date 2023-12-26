import React, { useState, useEffect } from "react";
import axios from "axios";
// axios 없으면 npm i axios

const API_KEY = "AIzaSyC4GOFoyT5XaOWSZzHx5NIRXp0EB1crbbM";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

const YTBAPI = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            part: "snippet",
            maxResults: 5,
            key: API_KEY,
            q: "react",
          },
        });
        setVideos(response.data.items);
      } catch (err) {
        console.error("에러입니다", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>유튜브 비디오 리스트</h1>
      <ul>
        {videos.map((viedo) => (
          <li key={viedo.id.videoId}>
            <img
              src={viedo.snipper.thumbnails.default.url}
              alt="viedo Thumbnail"
            ></img>
            <p>{viedo.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default YTBAPI;
