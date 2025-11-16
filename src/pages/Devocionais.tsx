import AnimatedCard from "@/components/AnimatedCard";
import { Calendar, Clock, Heart, Book } from "lucide-react";

const Devocionais = () => {
  const devotionals = [
    {
      title: "A Importância da Fé em Tempos Difíceis",
      date: "16 de Novembro, 2025",
      readTime: "5 min",
      excerpt: "Descubra como fortalecer sua fé mesmo nos momentos mais desafiadores da vida...",
      verse: "Hebreus 11:1"
    },
    {
      title: "Tecnologia como Ferramenta de Evangelização",
      date: "15 de Novembro, 2025",
      readTime: "7 min",
      excerpt: "Como podemos usar as ferramentas digitais para compartilhar o amor de Cristo...",
      verse: "Mateus 28:19"
    },
    {
      title: "Gratidão: O Caminho para a Paz Interior",
      date: "14 de Novembro, 2025",
      readTime: "4 min",
      excerpt: "Aprenda a cultivar um coração grato em todas as circunstâncias da vida...",
      verse: "1 Tessalonicenses 5:18"
    },
    {
      title: "O Poder da Oração na Era Digital",
      date: "13 de Novembro, 2025",
      readTime: "6 min",
      excerpt: "Mantendo uma vida de oração significativa em meio às distrações tecnológicas...",
      verse: "1 Tessalonicenses 5:17"
    },
    {
      title: "Discipulado no Mundo Moderno",
      date: "12 de Novembro, 2025",
      readTime: "8 min",
      excerpt: "Como ser um discípulo autêntico de Cristo em uma sociedade cada vez mais conectada...",
      verse: "João 13:35"
    },
    {
      title: "Sabedoria Digital: Usando a Internet com Propósito",
      date: "11 de Novembro, 2025",
      readTime: "5 min",
      excerpt: "Navegue no mundo digital com sabedoria e propósito, honrando a Deus em tudo...",
      verse: "Provérbios 4:7"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Devocionais Diários</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fortaleça sua fé com reflexões inspiradoras todos os dias
          </p>
        </div>

        {/* Featured Devotional */}
        <AnimatedCard className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-4">
                Devocional de Hoje
              </span>
              <h2 className="text-3xl font-bold mb-4">{devotionals[0].title}</h2>
              <p className="text-muted-foreground mb-4">{devotionals[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{devotionals[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{devotionals[0].readTime}</span>
                </div>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-sm font-semibold text-accent mb-1">Versículo base:</p>
                <p className="text-sm">{devotionals[0].verse}</p>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Heart className="w-24 h-24 text-white opacity-50" />
            </div>
          </div>
        </AnimatedCard>

        {/* Devotionals List */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Devocionais Anteriores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotionals.slice(1).map((devotional, index) => (
              <AnimatedCard key={index} delay={index * 50} className="cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Book className="w-12 h-12 text-primary opacity-50" />
                </div>
                <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                  {devotional.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{devotional.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{devotional.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{devotional.readTime}</span>
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

export default Devocionais;
