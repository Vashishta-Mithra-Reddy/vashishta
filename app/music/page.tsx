"use client";
import { useEffect, useState } from "react";
import { Song,FavoriteSong } from "@/types/spotify";
import ColorThief from "colorthief";


const Music = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [favorites, setFavorites] = useState<FavoriteSong[]>([]);
  const [bgColor, setBgColor] = useState<string>("rgb(31, 41, 55)"); // Default gray-800 color
  const [favoriteColors, setFavoriteColors] = useState<string[]>([]); // Array for top tracks colors

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch("/api/currently-playing");
        const data = await response.json();
        setSong(data.currentlyPlaying);

        // Extract dominant color from the album image
        if (data.currentlyPlaying?.albumImageUrl) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = data.currentlyPlaying.albumImageUrl;
          img.onload = () => {
            const colorThief = new ColorThief();
            const dominantColor = colorThief.getColor(img);
            setBgColor(`rgb(${dominantColor.join(",")})`);
          };
        }
      } catch (error) {
        console.error("Error fetching currently playing song:", error);
      }
    };

    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 20000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Fetch top tracks and extract colors only on the client
  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch("/api/top-tracks");
        const data = await response.json();
        setFavorites(data.topTracks || []);

        // Extract dominant colors for top tracks
        const colors = await Promise.all(
          data.topTracks.map((track: FavoriteSong) => {
            return new Promise<string>((resolve) => {
              const img = new Image();
              img.crossOrigin = "anonymous";
              img.src = track.albumImageUrl;
              img.onload = () => {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(img);
                resolve(`rgb(${dominantColor.join(",")})`);
              };
              img.onerror = () => resolve("rgb(31, 41, 55)"); // Default color in case of error
            });
          })
        );
        setFavoriteColors(colors);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchTopTracks();
    }
  }, []);

  return (
    <div className="p-12">
      <h1 className="p-12 pl-4 text-7xl font-aileron">The Music</h1>
      <div className="flex flex-col items-start justify-start min-h-[50vh] mx-auto px-6">
        {/* Currently Playing Section */}
        <h2 className="text-3xl font-bold mb-6">Currently Listening To</h2>
        {song?.isPlaying ? (
          <div
            className="p-4 rounded-lg shadow-lg w-80"
            style={{ backgroundColor: bgColor }}
          >
            <a href={song.songUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={song.albumImageUrl}
                alt={song.title}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{song.title}</h2>
              <p className="text-gray-400">{song.artist}</p>
            </a>
          </div>
        ) : (
          <p className="text-gray-600 italic font-bold">Ah! Not currently listening to anything.</p>
        )}

        {/* My Favorites This Month Section */}
        <h2 className="text-3xl font-bold mt-8 mb-6">My Favorites This Month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-lg w-80"
              style={{
                backgroundColor: favoriteColors[index] || "rgb(31, 41, 55)",
              }}
            >
              <a
                href={favorite.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={favorite.albumImageUrl}
                  alt={favorite.title}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-4">{favorite.title}</h2>
                <p className="text-gray-400">{favorite.artist}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
