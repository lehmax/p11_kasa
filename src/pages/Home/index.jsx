import { useFetch } from "../../hooks/useFetch";

import HeroBanner from "../../components/HeroBanner";
import LodgementsGrid from "../../components/Lodgement/LodgementsGrid";

import heroImage from "../../assets/hero_home.jpg";

const Home = () => {
  const { isLoading, data, isError } = useFetch("/logements.json");

  return (
    <>
      <HeroBanner image={heroImage} title="Chez vous, partout et ailleurs" />
      <LodgementsGrid
        lodgements={data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default Home;
