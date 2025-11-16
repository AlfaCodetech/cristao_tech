import AnimatedCard from "@/components/AnimatedCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contato = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@cristaotech.com",
      link: "mailto:contato@cristaotech.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      link: null
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ouvir você. Envie sua mensagem, sugestão ou dúvida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedCard>
            <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input 
                  id="subject" 
                  placeholder="Como podemos ajudar?" 
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Digite sua mensagem aqui..." 
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button className="w-full group">
                Enviar Mensagem
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </AnimatedCard>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <AnimatedCard key={index} delay={index * 50}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Additional Info */}
            <AnimatedCard delay={150} className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200} className="bg-gradient-to-br from-secondary/5 to-accent/5">
              <h3 className="font-bold text-lg mb-4">Perguntas Frequentes?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Antes de entrar em contato, confira nossa seção de perguntas frequentes. 
                Talvez sua dúvida já esteja respondida lá!
              </p>
              <Button variant="outline" size="sm">
                Ver FAQ
              </Button>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
