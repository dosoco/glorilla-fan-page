// src/pages/Albums.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [artistInfo, setArtistInfo] = useState(null);

  const handleLike = (album) => {
    // You can implement your like functionality here
    console.log(`Liked album: ${album.name}`);
    // Example: Save to localStorage or make an API call
  };

  useEffect(() => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Glorilla&api_key=${import.meta.env.VITE_API_KEY}&format=json`
      )
      .then((response) => {
        setAlbums(response.data.topalbums.album);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });

    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Glorilla&api_key=${import.meta.env.VITE_API_KEY}&format=json`
      )
      .then((response) => {
        setArtistInfo(response.data.artist);
      })
      .catch((error) => {
        console.error('Error fetching artist info:', error);
      });
  }, []);

  return (
    <Container className="my-5">
      {artistInfo && (
        <div className="text-white mb-4">
          <h1>{artistInfo.name}</h1>
          <p>Listeners: {artistInfo.stats.listeners}</p>
          <p>Total Plays: {artistInfo.stats.playcount}</p>
          {artistInfo.bio && <p>{artistInfo.bio.summary}</p>}
        </div>
      )}
      <Row>
        {albums.map((album) => (
          <Col key={album.mbid || album.name} md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={album.image[2]['#text']} alt={album.name} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>Playcount: {album.playcount}</Card.Text>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleLike(album)}
                >
                  ❤️ Like
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Albums;
