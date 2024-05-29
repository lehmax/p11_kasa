import { useFetch } from "../../hooks/useFetch";

import Card from "../../components/Card";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import GridLoading from "../../components/Grid/GridLoading";
import HeroBanner from "../../components/HeroBanner";

import heroImage from "../../assets/hero_home.jpg";

const Home = () => {
  const { isLoading, data, isError } = useFetch("/logements.json");
  const isData = !isLoading && !isError && data;

  let lodgementGrid;

  if (isLoading) {
    lodgementGrid = <GridLoading />;
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
