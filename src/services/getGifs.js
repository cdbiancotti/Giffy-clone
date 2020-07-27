const apiKey = 'yFHEa6F15YvzUEgcuJyHfV9oATY6dRi9';

const getGifs = (searchText) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => ({
          id: image.id,
          url: image.images.downsized_medium.url,
          title: image.title,
        }));
        return gifs;
      }
    });
};
export default getGifs;
