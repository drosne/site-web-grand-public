import { Section } from "@/components/ui/section";

const Logos1 = () => {
  const partners = [
    {
      name: "Le Figaro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Le_Figaro_logo.svg/200px-Le_Figaro_logo.svg.png",
    },
    {
      name: "Les Échos",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Les_Echos_logo.svg/200px-Les_Echos_logo.svg.png",
    },
    {
      name: "Le Monde",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Le_Monde_logo.svg/200px-Le_Monde_logo.svg.png",
    },
    {
      name: "France Info",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Franceinfo_logo.svg/200px-Franceinfo_logo.svg.png",
    },
    {
      name: "BFM Business",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BFM_Business_logo.svg/200px-BFM_Business_logo.svg.png",
    },
  ];

  return (
    <Section backgroundColor="white" padding="lg" containerSize="lg">
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-12">
      <p className="text-primary text-lg leading-[140%] tracking-[-0.32px]">
        Mentionné dans les médias
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-70 grayscale lg:gap-[60px]">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={109}
            height={48}
            className="object-contain"
          />
        ))}
      </div>
      </div>
    </Section>
  );
};

export { Logos1 };
