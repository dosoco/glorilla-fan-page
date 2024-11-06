// src/pages/Albums.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState(() => {
    // Load liked albums from localStorage on component mount
    const saved = localStorage.getItem('likedAlbums');
    return saved ? JSON.parse(saved) : {};
  });

  const handleLike = (album) => {
    setLikedAlbums(prev => {
      const newLikedAlbums = {
        ...prev,
        [album.name]: !prev[album.name]
      };
      // Save to localStorage whenever likes change
      localStorage.setItem('likedAlbums', JSON.stringify(newLikedAlbums));
      return newLikedAlbums;
    });
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
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-white mb-4">Albums</h2>
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
                  {likedAlbums[album.name] ? '❤️' : '🤍'}
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
