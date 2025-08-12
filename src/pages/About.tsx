import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Building2
} from "lucide-react";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Missão",
      description: "Oferecer soluções em consultoria e assessoria administrativa que promovam o crescimento sustentável e a eficiência operacional de nossos clientes, contribuindo para o desenvolvimento econômico e social."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Visão",
      description: "Ser reconhecida como a principal referência em consultoria administrativa na região, expandindo nossa atuação para todo o Brasil, sempre pautados pela excelência e inovação."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Valores",
      description: "Ética, transparência, compromisso com resultados, inovação, responsabilidade social e busca contínua pela excelência em todos os nossos serviços."
    }
  ];

  const achievements = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "500+", label: "Clientes Atendidos" },
    { number: "100%", label: "Foco no Cliente" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-background/10 text-primary-foreground border-primary-foreground/20">
              Quem Somos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Parceira de Confiança em Gestão Administrativa
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Há mais de 20 anos, a Koda & Branca se destaca no mercado de consultoria administrativa, 
              ajudando empresas e órgãos públicos a alcançarem uma gestão sólida e eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transformando Gestão em Resultados
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Nossa empresa nasceu da visão de que uma <strong className="text-foreground">gestão administrativa eficiente</strong> é 
                  fundamental para o sucesso de qualquer organização. Ao longo de mais de duas décadas, 
                  desenvolvemos metodologias próprias e soluções personalizadas.
                </p>
                <p>
                  Atendemos desde <strong className="text-foreground">MEIs e microempresas</strong> até grandes corporações e órgãos públicos, 
                  sempre com o mesmo compromisso: entregar resultados que fazem a diferença no dia a dia 
                  de nossos clientes.
                </p>
                <p>
                  Nossa expertise abrange <strong className="text-foreground">licitações públicas, gestão financeira, prestação de contas</strong> 
                  e assessoria empresarial, sempre alinhada às melhores práticas do mercado e às 
                  regulamentações vigentes.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center shadow-card border-border">
                  <CardContent className="py-8">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader className="text-center bg-gradient-subtle">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-12 w-12 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Osnei Luiz Vieira Vianna</CardTitle>
              <p className="text-lg text-muted-foreground">
                Administrador e Consultor Especialista
              </p>
              <Badge variant="outline" className="mt-2">
                CRA-SP nº 6-009033
              </Badge>
            </CardHeader>
            <CardContent className="py-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Especialização
                  </h3>
                  <p className="text-muted-foreground">
                    Especialista em <strong className="text-foreground">Gestão Pública</strong> com vasta experiência em 
                    consultoria administrativa para empresas privadas e órgãos públicos. Formação sólida 
                    em Administração e registro profissional ativo no CRA-SP.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    Experiência
                  </h3>
                  <p className="text-muted-foreground">
                    Mais de 20 anos atuando no mercado de consultoria, com expertise em processos 
                    licitatórios, gestão financeira, prestação de contas e desenvolvimento de projetos 
                    para captação de recursos públicos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary mr-2" />
                    Resultados
                  </h3>
                  <p className="text-muted-foreground">
                    Histórico comprovado de sucesso em melhorar a eficiência operacional de centenas 
                    de organizações, implementando sistemas de gestão que geram resultados sustentáveis 
                    e crescimento consistente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os valores que norteiam nossa atuação e garantem a excelência dos nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em contato e descubra como podemos transformar sua gestão
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nossa experiência e dedicação estão à disposição para levar sua empresa ou órgão público 
            ao próximo nível de eficiência e sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate("contact")}
              className="px-8"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Fale com um Especialista
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("services")}
              className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};