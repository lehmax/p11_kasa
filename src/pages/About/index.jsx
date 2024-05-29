import Accordion from "../../components/Accordion";
import HeroBanner from "../../components/HeroBanner";

import heroImage from "../../assets/hero_about.jpg";

import classes from "./about.module.scss";

const content = [
  {
    id: 1,
    title: "Fiabilité",
    content:
      "Aliquip officia eu irure adipisicing commodo elit consectetur magna irure ex do deserunt excepteur. Sit velit esse sit laboris ex irure tempor voluptate et ex. Mollit officia deserunt anim nulla laboris exercitation. Aliqua adipisicing sint pariatur do eu velit. In ex consectetur est ea aute proident est deserunt pariatur. Officia aute cillum mollit est qui adipisicing culpa mollit.",
  },
  {
    id: 2,
    title: "Respect",
    content:
      "Dolore deserunt aute irure deserunt anim dolore proident esse et laboris quis. Nostrud eiusmod eiusmod deserunt elit velit exercitation pariatur aliquip sit exercitation sit pariatur anim. Laborum laboris ut anim ad reprehenderit fugiat velit duis non adipisicing ut eiusmod sunt. Veniam mollit cillum consequat fugiat qui ut minim. Velit pariatur consequat tempor enim nisi eu qui. Ea exercitation do sint nulla commodo. Cillum ipsum sit irure Lorem culpa nisi magna duis labore do voluptate sint nulla proident.",
  },
  {
    id: 3,
    title: "Service",
    content:
      "Sit sint labore in nisi pariatur elit adipisicing ullamco pariatur. Qui in reprehenderit veniam mollit pariatur exercitation id aliqua veniam nulla aliquip laborum. Enim tempor aliqua amet labore aliqua aliquip. Incididunt laborum quis exercitation ipsum esse et ad. Aliqua eiusmod in cillum magna aliquip Lorem. Lorem in aute enim cillum duis excepteur.",
  },
  {
    id: 4,
    title: "Sécurité",
    content:
      "Exercitation in consectetur exercitation consectetur ut deserunt occaecat consectetur magna reprehenderit pariatur quis pariatur.",
  },
];

const About = () => {
  return (
    <main>
      <HeroBanner image={heroImage} opacity="30" />
      <div className={classes.content}>
        {content.map((item) => (
          <Accordion key={item.id} title={item.title}>
            <p>{item.content}</p>
          </Accordion>
        ))}
      </div>
    </main>
  );
};

export default About;
