import Main from "../../components/Main";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import Article from "../../components/Article";
import Button from "../../components/Button";
import SectionImage from "../../components/SectionImage";
import CardContainer from "../../components/CardContainer";
import MenuCard from "../../components/MenuCard";
import TestimonialsCard from "../../components/TestimonialsCard";
import restaurantfood from "../../assets/restauranfood.jpg";
import marioAdrian from "../../assets/mario_adrian.jpg";
import menuItems from "../../assets/menu-items/data.json";
import testimonials from "../../assets/testimonials/data.json";
import "./styles.css"

export default function Home() {
    return (
    <Main>
        <Section dark>
          <SectionTitle subtitle="Chicago">Little Lemon</SectionTitle>
          <Article className="article section-article">
            <Paragraph>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Paragraph>
          </Article>
          <Button href="/reservations" value="Reserve a table" className="button reserve-button" />
          <SectionImage src={restaurantfood} alt="Restaurant Food" height="360px" />
        </Section>
        <Section height="fit-content">
          <SectionTitle dark>Weekly specials</SectionTitle>
          <Button href="/under-construction" value="Go to menu" className="button specials-button" />
          <CardContainer>
            {menuItems.map(({id, title, description, price, img}) =>
              <MenuCard img={img} name={title} price={price} key={id}>
                {description}
              </MenuCard>
            )}
          </CardContainer>
        </Section>
        <Section dark>
          <SectionTitle>Testimonials</SectionTitle>
          <CardContainer>
            {testimonials.map(({id, name, img, rating, review}) =>
              <TestimonialsCard img={img} name={name} rating={rating} key={id}>
                {review}
              </TestimonialsCard>
            )}
          </CardContainer>
        </Section>
        <Section>
          <SectionTitle subtitle="Chicago" dark>Little Lemon</SectionTitle>
          <Article className="article section-article">
            <Paragraph dark>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
          </Article>
          <SectionImage src={marioAdrian} alt="Mario and Adrian" height="400px" />
        </Section>
      </Main>
    );
}