import AnimatedCard from "@/components/AnimatedCard";
import { Newspaper, Clock, Tag } from "lucide-react";

const Noticias = () => {
  const news = [
    {
      title: "Igreja adota tecnologia para expandir alcance missionário",
      category: "Tecnologia",
      date: "16 de Nov, 2025",
      readTime: "3 min",
      excerpt: "Novas ferramentas digitais permitem que igrejas alcancem mais pessoas com a mensagem do evangelho..."
    },
    {
      title: "Aplicativo de oração conecta milhões de cristãos globalmente",
      category: "Inovação",
      date: "15 de Nov, 2025",
      readTime: "4 min",
      excerpt: "Plataforma digital revoluciona a forma como cristãos compartilham pedidos de oração..."
    },
    {
      title: "Conferência cristã de tecnologia reúne líderes do setor",
      category: "Eventos",
      date: "14 de Nov, 2025",
      readTime: "5 min",
      excerpt: "Evento discute como a fé e a tecnologia podem trabalhar juntas para transformar vidas..."
    },
    {
      title: "Bíblia digital alcança marca de 10 milhões de downloads",
      category: "Tecnologia",
      date: "13 de Nov, 2025",
      readTime: "3 min",
      excerpt: "Aplicativo bíblico se torna uma das ferramentas mais baixadas entre cristãos..."
    },
    {
      title: "Podcast cristão atinge primeiro lugar em rankings",
      category: "Mídia",
      date: "12 de Nov, 2025",
      readTime: "4 min",
      excerpt: "Conteúdo cristão de qualidade ganha espaço nas plataformas de áudio digital..."
    },
    {
      title: "IA é usada para traduzir Bíblia para línguas raras",
      category: "Inovação",
      date: "11 de Nov, 2025",
      readTime: "6 min",
      excerpt: "Inteligência artificial acelera processo de tradução bíblica para comunidades remotas..."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Notícias</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro do que acontece na interseção entre fé e tecnologia
          </p>
        </div>

        {/* Featured News */}
        <AnimatedCard className="mb-12 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-64 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
              <Newspaper className="w-24 h-24 text-white opacity-50" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold mb-4">
                Destaque
              </span>
              <h2 className="text-3xl font-bold mb-4">{news[0].title}</h2>
              <p className="text-muted-foreground mb-4">{news[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{news[0].category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{news[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* News Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(1).map((item, index) => (
              <AnimatedCard key={index} delay={index * 50} className="cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-secondary opacity-50" />
                </div>
                <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary text-xs rounded mb-2">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg mb-2 hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{item.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
