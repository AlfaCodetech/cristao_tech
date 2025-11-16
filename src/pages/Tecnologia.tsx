import AnimatedCard from "@/components/AnimatedCard";
import { Cpu, Smartphone, Globe, Code, Database, Cloud } from "lucide-react";

const Tecnologia = () => {
  const topics = [
    {
      icon: Smartphone,
      title: "Aplicativos Cristãos",
      description: "Descubra os melhores apps para fortalecer sua vida espiritual",
      color: "from-primary to-primary/70"
    },
    {
      icon: Globe,
      title: "Evangelização Digital",
      description: "Como usar a internet para compartilhar o evangelho de forma efetiva",
      color: "from-secondary to-secondary/70"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Crie sites e plataformas que glorificam a Deus",
      color: "from-accent to-accent/70"
    },
    {
      icon: Database,
      title: "Gestão de Igrejas",
      description: "Sistemas e ferramentas para administração eclesiástica moderna",
      color: "from-primary to-primary/70"
    },
    {
      icon: Cloud,
      title: "Streaming de Cultos",
      description: "Tecnologias para transmissão ao vivo de eventos religiosos",
      color: "from-secondary to-secondary/70"
    },
    {
      icon: Cpu,
      title: "IA e Fé",
      description: "Como a inteligência artificial pode auxiliar no ministério cristão",
      color: "from-accent to-accent/70"
    }
  ];

  const articles = [
    {
      title: "Como Criar um Site para Sua Igreja",
      excerpt: "Passo a passo completo para desenvolver uma presença online efetiva...",
      category: "Tutorial"
    },
    {
      title: "Melhores Práticas de Segurança Digital",
      excerpt: "Proteja sua comunidade online com estas dicas essenciais...",
      category: "Segurança"
    },
    {
      title: "Ferramentas de Edição de Vídeo para Igrejas",
      excerpt: "Softwares gratuitos e pagos para produzir conteúdo de qualidade...",
      category: "Recursos"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Tecnologia & Fé</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como a tecnologia pode fortalecer sua vida cristã e seu ministério
          </p>
        </div>

        {/* Topics Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Áreas de Interesse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <AnimatedCard key={index} delay={index * 50} className="cursor-pointer group">
                <div className={`h-32 bg-gradient-to-br ${topic.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <topic.icon className="w-16 h-16 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <AnimatedCard key={index} delay={index * 50} className="cursor-pointer">
                <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded mb-3">
                  {article.category}
                </span>
                <h3 className="font-bold text-xl mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedCard className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="text-center py-8">
            <Cpu className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Quer Contribuir?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Compartilhe seu conhecimento em tecnologia e ajude outros cristãos a usar ferramentas digitais para o Reino
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Enviar Artigo
            </button>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Tecnologia;
