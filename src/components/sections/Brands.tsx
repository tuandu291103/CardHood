import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

// explicit imports 
import pokemon from "../../assets/logos/pokemon.png";
import onepiece from "../../assets/logos/onepiece.png";
import wixoss from "../../assets/logos/wixoss.png";
import yugioh from "../../assets/logos/yugioh.png";
import dragonball from "../../assets/logos/dragonball.png";
import magic from "../../assets/logos/magic.png";

// Array of logos with their names and images
const logos = [
  { name: "pokemon", image: pokemon },
  { name: "onepiece", image: onepiece },
  { name: "wixoss", image: wixoss },
  { name: "yugioh", image: yugioh },
  { name: "dragonball", image: dragonball },
  { name: "magic", image: magic },
];

// Brands component
export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Supporting Trading Card Games </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={logo.image}
                width="100"
                height="60"
                alt={logo.name}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};