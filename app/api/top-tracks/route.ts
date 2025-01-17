import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { SpotifyTokenResponse, TopTracksResponse } from "@/types/spotify";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

if (!refreshToken) {
  throw new Error("Missing refresh token");
}

const getAccessToken = async (): Promise<string> => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    } as Record<string, string>),
  });

  const data = (await response.json()) as SpotifyTokenResponse;

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${data.error}`);
  }

  return data.access_token;
};

const getTopTracks = async (accessToken: string) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=8",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
  }

  const data = (await response.json()) as TopTracksResponse;

  return data.items.map((track) => ({
    title: track.name,
    artist: track.artists.map((artist) => artist.name).join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  }));
};

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    // Fetch top tracks
    const topTracks = await getTopTracks(accessToken);

    return NextResponse.json({
      topTracks,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch top tracks." },
      { status: 500 }
    );
  }
}
