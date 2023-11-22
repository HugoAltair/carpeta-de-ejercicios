import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";
import { Message } from "./Message";

export const SongDetails = (search, lyric, bio) => {
  console.log(lyric);
  if (!lyric || !bio) return null;
  return (
    <>
      {/* {!lyric.length ? ( */}
      {lyric.error || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion ${search.song}`}
          bgColor={"#dc3545"}
        />
      ) : (
        <SongLyric />
      )}
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: no existe el interprete ${search.artist}`}
          bgColor={"#dc3545"}
        />
      )}
    </>
  );
};
