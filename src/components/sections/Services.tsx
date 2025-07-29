import { services } from "../../utils/services-data.tsx";
import { Service } from "../cards/Service.tsx";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  return (
    <section id="services">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our TCG Tracker</Title>
          <Paragraph>
            Unlock the full potential of your trading card game experience with our
            comprehensive TCG tracker. Whether you're a casual player or a competitive
            enthusiast, our platform offers a suite of tools to help you manage your
            collection, track your gameplay, and connect with other players. From
            detailed card databases to real-time match tracking, we provide everything you
            need to enhance your TCG journey. Join our community today and take your
            trading card game experience to the next level!
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};