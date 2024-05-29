import { useFetch } from "../../hooks/useFetch";

import Card from "../../components/Card";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import HeroBanner from "../../components/HeroBanner";

import heroImage from "../../assets/hero_home.jpg";
import SkeletonCard from "../../components/Card/SkeletonCard";

const Home = () => {
  const { isLoading, data, isError } = useFetch("/logements.json");
  const isData = !isLoading && !isError && data;

  let lodgementGrid;

  if (isLoading) {
    lodgementGrid = (
      <Grid>
        {[0, 1, 2].map((index) => (
          <SkeletonCard key={index} />
        ))}
      </Grid>
    );
  }

  if (isError) {
    lodgementGrid = <Error />;
  }

  if (isData) {
    lodgementGrid = (
      <Grid>
        {data.map((lodgement) => (
          <Card key={lodgement.id} data={lodgement} />
        ))}
      </Grid>
    );
  }

  return (
    <main>
      <HeroBanner image={heroImage} title="Chez vous, partout et ailleurs" />
      {lodgementGrid}
    </main>
  );
};

export default Home;
