import Image from "next/image";

export const projects = [
  {
    id: 1,
    name: "Atenda+",
    logo: "/cesar.svg",
    description: "Platform for managing psychopedagogical services.",
    type: "Managing Psychopedagogical",
    website: "https://github.com/caioamaral-io/AtendaMais",
    showcase: false,
    content: false,
  },
  {
    id: 2,
    name: "Uber Analytics",
    logo: "/uber.svg",
    description: "Uber ride analysis dashboard in NYC.",
    type: "Brand Design",
    content: false,
    showcase: false,
    website: "https://github.com/caioamaral-io/Uber-Analytics",
  },
];

export function Project({
  project,
}: {
  project: {
    id: number;
    name: string;
    logo: string;
    description: string;
    type: string;
    content?: React.ReactNode;
    website?: string;
  };
}) {
  return (
    <div className="hover:bg-foreground/5 -mx-3 flex flex-col gap-4 rounded-2xl bg-transparent px-3 py-2.5 transition-all duration-200">
      <div className="flex items-center gap-4">
        <Image
          src={project.logo}
          alt={project.name}
          className="mb-0.5 inline-flex rounded-xl shadow-lg shadow-black/10"
          width={32}
          height={32}
        />
        <div className="flex flex-col">
          <h1 className="w-fit text-sm leading-tight font-semibold">
            {project.name}
          </h1>
          <p className="w-fit text-sm opacity-50">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
