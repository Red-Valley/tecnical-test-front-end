import { Header } from "../organisms/Header";
import { CardsGrid } from "../organisms/CardsGrid";

export const Home = () => (
  <div className="container">
    <Header />
    <CardsGrid grid={[1, 2, 3, 4, 5, 6, 7, 8]} />
  </div>
);
