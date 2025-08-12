import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Mail, 
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Building2
} from "lucide-react";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export const Contact = ({ onNavigate }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappMessage = `Olá! Gostaria de solicitar uma consultoria.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Serviço de interesse: ${formData.service}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5514988359798?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa via WhatsApp.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mails",
      details: [
        { label: "Geral", value: "contato@kodaebrancaassessoria.com.br", link: "mailto:contato@kodaebrancaassessoria.com.br" },
        { label: "Financeiro", value: "financeiro@kodaebrancaassessoria.com.br", link: "mailto:financeiro@kodaebrancaassessoria.com.br" },
        { label: "Osnei Luiz", value: "osnei.luiz@kodaebrancaassessoria.com.br", link: "mailto:osnei.luiz@kodaebrancaassessoria.com.br" }
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      details: [
        { label: "WhatsApp", value: "(14) 98835-9798", link: "https://wa.me/5514988359798" }
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Endereço",
      details: [
        { label: "Rua", value: "Rua João Ferreira, 599 – Cs-5" },
        { label: "Bairro", value: "Vila São Luiz – Ourinhos (SP)" },
        { label: "CEP", value: "19911-240" }
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Atendimento",
      details: [
        { label: "Segunda a Sexta", value: "08:00 às 18:00" },
        { label: "Sábado", value: "08:00 às 12:00" },
        { label: "Emergências", value: "24/7 via WhatsApp" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-background/10 text-primary-foreground border-primary-foreground/20">
            Entre em Contato
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fale com um Especialista
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades e transformar a gestão da sua empresa ou órgão público. 
            Entre em contato e descubra como podemos ajudar.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 text-primary mr-2" />
                  Solicite uma Consultoria
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário e entraremos em contato para entender suas necessidades.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(14) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa/Órgão</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="consultoria-administrativa">Consultoria Administrativa</option>
                      <option value="licitacoes">Licitações e Contratos</option>
                      <option value="gestao-financeira">Gestão Financeira</option>
                      <option value="gestao-escolar">Gestão Escolar (APM)</option>
                      <option value="projetos-publicos">Projetos Públicos</option>
                      <option value="prestacao-contas">Prestação de Contas</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva suas necessidades ou dúvidas..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      {info.icon}
                      <span className="ml-2">{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            {detail.label}:
                          </span>
                          {detail.link ? (
                            <a 
                              href={detail.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium">
                              {detail.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick WhatsApp */}
              <Card className="shadow-card border-border bg-gradient-subtle">
                <CardContent className="py-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Atendimento Imediato</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Precisa falar conosco agora? Clique no botão abaixo.
                    </p>
                    <Button 
                      onClick={() => window.open('https://wa.me/5514988359798', '_blank')}
                      className="w-full"
                      variant="default"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-xl text-muted-foreground">
              Venha nos visitar em Ourinhos, São Paulo
            </p>
          </div>
          
          <Card className="shadow-elegant border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-49.8726!3d-22.9757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c75e6b0c6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sRua%20Jo%C3%A3o%20Ferreira%2C%20599%20-%20Vila%20S%C3%A3o%20Luiz%2C%20Ourinhos%20-%20SP%2C%2019911-240!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Koda & Branca"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua gestão hoje mesmo
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Mais de 20 anos de experiência estão à sua disposição. 
            Entre em contato e descubra como podemos ajudar sua organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://wa.me/5514988359798', '_blank')}
              className="px-8"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("services")}
              className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};