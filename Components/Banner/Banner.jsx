import React, { useState, useEffect } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import "../Banner/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  // Truncate function to shorten the description
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
