import AnimatedCard from "@/components/AnimatedCard";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Fé em Primeiro Lugar",
      description: "Nossa fé em Cristo é o fundamento de tudo que fazemos"
    },
    {
      icon: Target,
      title: "Propósito Claro",
      description: "Usar a tecnologia para expandir o Reino de Deus na Terra"
    },
    {
      icon: Users,
      title: "Comunidade Forte",
      description: "Construir uma comunidade unida de cristãos conectados"
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Buscar sempre novas formas de servir e inspirar"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Sobre o CristãoTech</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa história, missão e valores
          </p>
        </div>

        {/* Mission Section */}
        <AnimatedCard className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O CristãoTech nasceu do desejo de unir dois mundos aparentemente distintos: 
              a fé cristã e a tecnologia moderna. Acreditamos que a tecnologia, quando usada 
              com sabedoria e propósito, pode ser uma ferramenta poderosa para espalhar o 
              evangelho, fortalecer a fé dos crentes e construir uma comunidade global de 
              cristãos conectados.
            </p>
          </div>
        </AnimatedCard>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 50}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Vision */}
        <AnimatedCard className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-muted-foreground mb-4">
                Visualizamos um futuro onde cada cristão tenha acesso a recursos digitais 
                de qualidade que fortaleçam sua caminhada com Deus. Queremos ser a ponte 
                entre a tradição cristã e a inovação tecnológica.
              </p>
              <p className="text-muted-foreground">
                Através de conteúdo relevante, ferramentas práticas e uma comunidade acolhedora, 
                buscamos equipar a igreja do século XXI para cumprir a Grande Comissão de 
                forma mais efetiva e abrangente.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
              <Target className="w-24 h-24 text-primary opacity-50" />
            </div>
          </div>
        </AnimatedCard>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Nossa Equipe</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Somos um time diverso de cristãos apaixonados por tecnologia e pelo Reino de Deus
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <AnimatedCard key={index} delay={index * 50}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <h3 className="font-bold text-lg mb-1">Membro da Equipe</h3>
                  <p className="text-sm text-muted-foreground mb-2">Função</p>
                  <p className="text-xs text-muted-foreground">
                    Dedicado a usar a tecnologia para glorificar a Deus
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
