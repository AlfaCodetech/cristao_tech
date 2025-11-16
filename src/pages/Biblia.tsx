import AnimatedCard from "@/components/AnimatedCard";
import { Book, Search, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";

const Biblia = () => {
  const books = [
    { name: "Gênesis", testament: "Antigo Testamento", chapters: 50 },
    { name: "Êxodo", testament: "Antigo Testamento", chapters: 40 },
    { name: "Levítico", testament: "Antigo Testamento", chapters: 27 },
    { name: "Mateus", testament: "Novo Testamento", chapters: 28 },
    { name: "João", testament: "Novo Testamento", chapters: 21 },
    { name: "Atos", testament: "Novo Testamento", chapters: 28 },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Bíblia Sagrada</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesse a Palavra de Deus de forma moderna e prática
          </p>
        </div>

        {/* Search */}
        <AnimatedCard className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-4">
            <Search className="text-muted-foreground" />
            <Input 
              placeholder="Buscar versículos, livros ou palavras-chave..." 
              className="flex-1 border-0 focus-visible:ring-0"
            />
          </div>
        </AnimatedCard>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatedCard delay={0}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Versículo do Dia</h3>
                <p className="text-sm text-muted-foreground">
                  "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito..."
                </p>
                <p className="text-xs text-primary mt-2">João 3:16</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Bookmark className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Salvos Recentemente</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse seus versículos e capítulos favoritos
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Plano de Leitura</h3>
                <p className="text-sm text-muted-foreground">
                  Continue seu plano de leitura da Bíblia
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Books List */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Livros da Bíblia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book, index) => (
              <AnimatedCard key={index} delay={index * 50} className="cursor-pointer hover:border-primary">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{book.name}</h3>
                    <p className="text-sm text-muted-foreground">{book.testament}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{book.chapters}</p>
                    <p className="text-xs text-muted-foreground">capítulos</p>
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

export default Biblia;
