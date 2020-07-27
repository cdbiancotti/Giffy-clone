import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

const ListOfGifs = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
    return () => {};
    // If you don't put the second parameter to useEffect ( dependencies ), this hook will run each time when the component is render
  }, [keyword]);

  if (loading) return <i>Cargando...</i>;

  return gifs.map((singleGifs) => (
    <Gif key={singleGifs.id} url={singleGifs.url} title={singleGifs.title} id={singleGifs.id} />
  ));

  // Destructuring the singleGifs
  //   return gifs.map(({ id, title, url }) => <Gifs key={id} url={url} title={title} id={id} />);

  // With spread
  // <Gifs key={singleGifs.id} {...singleGifs} />
};
export default ListOfGifs;
