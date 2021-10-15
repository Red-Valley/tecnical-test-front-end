import { useSelector } from "react-redux";
import { selectData } from "../features/characters/api-slice";
import { CharacterCard } from "../molecules/CharacterCard";
import "../styles/scss/organisms/cards-grid.scss";

export const CardsGrid = () => {
  const data = useSelector(selectData);
  return (
    <section className="container" id="main">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map(({ name, image, id }) => (
          <div className="col" key={id}>
            <CharacterCard name={name} id={id} imageSrc={image} showLink />
          </div>
        ))}
      </div>
    </section>
  );
};
