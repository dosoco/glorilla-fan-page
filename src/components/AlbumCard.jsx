// Example of how to create links to albums
const createAlbumLink = (artist, album) => {
  return encodeURIComponent(`${artist}___${album}`);
};

// Usage in a component
<Link to={`/album/${createAlbumLink(artistName, albumName)}`}>
  {/* Album card content */}
</Link> 