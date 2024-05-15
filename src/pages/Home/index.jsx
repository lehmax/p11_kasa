import heroImage from "../../assets/hero_home.jpg";
import HeroBanner from "../../components/HeroBanner";
import LodgementsGrid from "../../components/Lodgement/LodgementsGrid";

const Home = () => {
  return (
    <>
      <HeroBanner image={heroImage} title="Chez vous, partout et ailleurs" />
      <LodgementsGrid />
    </>
  );
};

export default Home;
