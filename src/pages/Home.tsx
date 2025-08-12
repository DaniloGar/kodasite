import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  FileText,
  Calculator,
  Briefcase,
  Building
} from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Consultoria Administrativa",
      description: "Otimização de processos e gestão eficiente para seu negócio crescer"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Licitações",
      description: "Mapeamento e participação estratégica em licitações públicas"
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Gestão Financeira",
      description: "Controle de fluxo de caixa, contas a pagar e receber"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Projetos Públicos",
      description: "Elaboração e prestação de contas para órgãos públicos"
    }
  ];

  const differentials = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Experiência",
      description: "Mais de 20 anos ajudando empresas e órgãos públicos a crescerem"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Soluções Personalizadas",
      description: "Cada cliente recebe estratégias adaptadas às suas necessidades específicas"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em melhorar a gestão e aumentar a eficiência"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-background/10 text-primary-foreground border-primary-foreground/20">
            Mais de 20 anos de experiência
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Koda & Branca Assessoria e Consultoria
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Sua Parceira para o Sucesso
          </h2>
          <blockquote className="text-lg md:text-xl italic mb-8 max-w-4xl mx-auto text-primary-foreground/80">
            "O caminho para o desenvolvimento social e econômico – seja de um país ou de uma organização – passa necessariamente pela administração."
            <footer className="text-base mt-2 font-medium">— Idalberto Chiavenato</footer>
          </blockquote>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate("contact")}
            className="text-lg px-8 py-3"
          >
            Solicite uma Consultoria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em consultoria administrativa para empresas e órgãos públicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a Koda & Branca?</h2>
            <p className="text-xl text-muted-foreground">
              Diferenciais que fazem a diferença no seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-secondary rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases CTA */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <Card className="bg-gradient-subtle border-border shadow-elegant">
            <CardContent className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Cases de Sucesso</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubra como ajudamos empresas e órgãos públicos a transformarem sua gestão 
                e alcançarem resultados extraordinários
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate("about")}
                  className="px-8"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Conheça Nossa História
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => onNavigate("contact")}
                  className="px-8"
                >
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua gestão?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa ou órgão público 
            a alcançar novos patamares de eficiência e sucesso.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate("contact")}
            className="text-lg px-8 py-3"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Fale com um Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};