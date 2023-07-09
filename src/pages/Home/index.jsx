import Main from "../../components/Main";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import Article from "../../components/Article";
import Button from "../../components/Button";
import Image from "../../components/Image";
import CardContainer from "../../components/CardContainer";
import MenuCard from "../../components/MenuCard";
import TestimonialsCard from "../../components/TestimonialsCard";
import restaurantfood from "../../assets/restauranfood.jpg";
import menuItems from "../../assets/menu-items/data.json";
import testimonials from "../../assets/testimonials/data.json";

export default function Home() {
    return (
    <Main>
        <Section dark>
          <SectionTitle subtitle="Chicago">Little Lemon</SectionTitle>
          <Article style={{gridColumn: "3 / span 3", gridRow: "2"}}>
            <Paragraph>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Paragraph>
          </Article>
          <Button href="/reservations" value="Reserve a table" style={{gridColumn: "3 / span 3", gridRow: "3"}} />
          <Image src={restaurantfood} alt="Restaurant Food" height="350px" style={{gridColumn: "7 / span 4", gridRow: "1 / span 3"}} />
        </Section>
        <Section height="fit-content">
          <SectionTitle dark>Weekly specials</SectionTitle>
          <Button href="/menu" value="Go to menu" style={{gridColumn: "8 / span 3"}} />
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
      </Main>
    );
}