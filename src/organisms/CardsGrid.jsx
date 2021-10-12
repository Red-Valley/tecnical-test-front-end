import { CharacterCard } from "../molecules/CharacterCard";

export const CardsGrid = ({ grid = [] }) => (
  <section className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {grid.map(({ name, image, id }) => (
        <div className="col" key={id}>
          <CharacterCard name={name} id={id} imageSrc={image} />
        </div>
      ))}
    </div>
  </section>
);
