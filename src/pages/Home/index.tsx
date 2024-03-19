import { useEffect, useState } from "react";
import apiService from "../../services/apiService";
import Card from "../../components/Card";
import { IProduct } from "../../interfaces/Products";
import { MainContainer } from "./style";

const Home = () => {
  const [data, setData] = useState<IProduct[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get('/movies');
        setData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      {data ? (
        data?.map(product => {
          return (  
            <Card 
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              />
          )})
      ) : (
        <div>Loading...</div>
      )}
    </MainContainer>
  );
}

export default Home;