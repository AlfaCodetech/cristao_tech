import AnimatedCard from "@/components/AnimatedCard";
import { Book, Heart, Newspaper, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const features = [
    {
      icon: Book,
      title: "Bíblia Digital",
      description: "Acesse a Palavra de Deus de forma moderna e interativa",
      link: "/biblia",
      delay: 0
    },
    {
      icon: Heart,
      title: "Devocionais Diários",
      description: "Fortaleça sua fé com reflexões inspiradoras todos os dias",
      link: "/devocionais",
      delay: 100
    },
    {
      icon: Newspaper,
      title: "Notícias Cristãs",
      description: "Fique por dentro do que acontece no mundo cristão",
      link: "/noticias",
      delay: 200
    },
    {
      icon: Cpu,
      title: "Tecnologia & Fé",
      description: "Descubra como a tecnologia pode fortalecer sua vida cristã",
      link: "/tecnologia",
      delay: 300
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            CristãoTech
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Unindo fé e tecnologia para transformar vidas
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" variant="secondary" className="group">
              Começar
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Nossas Áreas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra recursos que combinam tecnologia moderna com princípios cristãos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={feature.delay}>
              <a href={feature.link} className="block group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Junte-se à Nossa Comunidade</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Faça parte de uma comunidade que une fé e inovação tecnológica
          </p>
          <Button size="lg" className="group">
            Entre em Contato
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
