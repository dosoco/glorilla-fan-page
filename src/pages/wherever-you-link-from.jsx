import React from 'react';
import { Link } from 'react-router-dom';

// Example of creating a link to AlbumDetails
const artistName = 'Artist Name';
const albumName = 'Album Name';
const albumId = encodeURIComponent(`${artistName}___${albumName}`);

export default function WhereverYouLinkFrom() {
  return <Link to={`/album/${albumId}`}>Album Name</Link>;
}
