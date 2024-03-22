const fetchMovies = async (query: any) => {
  const response = await fetch(`https://wefit-movies.vercel.app/api/${query}`);
  const data = await response.json();

  return data.products
}

export default fetchMovies;