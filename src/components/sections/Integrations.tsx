import Tag from "../elements/Tag";
import IntegrationColumn from "../ui/IntegrationColumn";

const integrations = [
  {
    name: "Figma",
    icon: "/components/integrations/figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "/components/integrations/notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "/components/integrations/slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "/components/integrations/relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: "/components/integrations/framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: "/components/integrations/github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export default function Integrations() {
  return (
    <section className="py-24 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <Tag>Integration</Tag>
            <h2 className="text-5xl sm:text-6xl font-medium mt-6 leading-tight">
              Plays well with <br />
              <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-base sm:text-lg">
              Layers seamlessly connects with your favourite tools and
              platforms. It&apos;s easy to plug into any workflow and collaborate
              platforms.
            </p>
          </div>

          {/* Integration Columns */}
          <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationColumn integrations={integrations} />
            <IntegrationColumn
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
