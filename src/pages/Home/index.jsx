import Main from "../../components/Main";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Paragraph from "../../components/Paragraph";
import Article from "../../components/Article";
import Button from "../../components/Button";
import Image from "../../components/Image";
import CardContainer from "../../components/CardContainer";
import MenuCard from "../../components/MenuCard";
import restaurantfood from "../../assets/restauranfood.jpg";
import menuItems from "../../assets/menu-items/data.json";

export default function Home() {
    return (
    <Main>
        <Section height="350px" backgroundColor="var(--primary-1)">
          <Article style={{gridColumn: "3 / span 3"}}>
            <SectionTitle subtitle="Chicago">Little Lemon</SectionTitle>
            <Paragraph>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Paragraph>
          </Article>
          <Button href="/reservations" value="Reserve a table" style={{gridColumn: "3 / span 3", gridRow: "2"}} />
          <Image src={restaurantfood} alt="Restaurant Food" height="424px" style={{gridColumn: "7 / span 4"}} />
        </Section>
        <div style={{height: "120px"}}></div>
        <Section height="fit-content">
          <SectionTitle dark style={{gridColumn: "3 / span 5"}}>This weeks' specials</SectionTitle>
          <Button href="/menu" value="Go to menu" style={{gridColumn: "8 / span 3"}} />
          <CardContainer style={{gridColumn: "3 / span 8", gridRow: "2"}}>
            {menuItems.map(({id, title, description, price, img}) =>
              <MenuCard img={img} name={title} price={price} style={{gridColumn: "3 / span 3", gridRow: "2"}} key={id}>
                {description}
              </MenuCard>
            )}

          </CardContainer>
        </Section>
      </Main>
    );
}