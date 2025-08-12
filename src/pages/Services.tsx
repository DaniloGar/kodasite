import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileText, 
  Calculator, 
  School,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Briefcase,
  ClipboardCheck,
  PieChart,
  Building,
  UserCheck,
  BookOpen
} from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services = ({ onNavigate }: ServicesProps) => {
  const privateServices = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Assessoria e Consultoria Administrativa",
      description: "Otimização completa de rotinas administrativas, incluindo elaboração de orçamentos, emissão de notas fiscais e estruturação de processos internos para máxima eficiência.",
      benefits: [
        "Redução de custos operacionais",
        "Melhoria na organização interna",
        "Aumento da produtividade",
        "Compliance com regulamentações"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Licitação e Contratos",
      description: "Serviço completo de mapeamento de licitações, manutenção de documentações e estratégias para participação eficaz em processos licitatórios.",
      benefits: [
        "Identificação de oportunidades",
        "Documentação sempre atualizada",
        "Estratégias de participação",
        "Acompanhamento de processos"
      ]
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Gestão Financeira",
      description: "Controle eficiente do fluxo de caixa, gestão de contas a pagar e receber, análises financeiras e planejamento estratégico para crescimento sustentável.",
      benefits: [
        "Controle de fluxo de caixa",
        "Análises financeiras detalhadas",
        "Planejamento estratégico",
        "Otimização de recursos"
      ]
    }
  ];

  const publicServices = [
    {
      icon: <School className="h-8 w-8 text-primary" />,
      title: "Escolas",
      description: "Gestão completa e manutenção da APM (Associação de Pais e Mestres), prestação de contas de verbas públicas e otimização de recursos educacionais.",
      benefits: [
        "Gestão transparente da APM",
        "Prestação de contas eficiente",
        "Otimização de recursos",
        "Compliance educacional"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Vereadores e Prefeituras",
      description: "Elaboração de projetos para captação de recursos, prestação de contas detalhada, análise crítica de projetos e assessoria em gestão pública.",
      benefits: [
        "Captação de recursos públicos",
        "Projetos bem estruturados",
        "Prestação de contas transparente",
        "Assessoria especializada"
      ]
    }
  ];

  const targetAudience = [
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: "MEI (Microempreendedor Individual)",
      description: "Soluções específicas para pequenos negócios"
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Microempresas",
      description: "Gestão administrativa para empresas em crescimento"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Empresas de Pequeno Porte",
      description: "Consultoria estratégica para expansão sustentável"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Órgãos Públicos",
      description: "Assessoria especializada em gestão pública"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-background/10 text-primary-foreground border-primary-foreground/20">
            Nossos Serviços
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas em Consultoria Administrativa
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Oferecemos serviços especializados para empresas privadas e órgãos públicos, 
            sempre focados em resultados que transformam a gestão e impulsionam o crescimento.
          </p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Para Quem Trabalhamos</h2>
            <p className="text-xl text-muted-foreground">
              Atendemos diferentes tipos de organizações com soluções personalizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="shadow-card border-border text-center">
                <CardContent className="py-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary rounded-full">
                      {audience.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sector Services */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para Empresas Privadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MEIs, Micro e Pequeno Porte - Soluções que impulsionam seu crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {privateServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Benefícios:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Public Sector Services */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para Órgãos Públicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especialização em gestão pública com transparência e eficiência
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publicServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Benefícios:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Trabalhamos</h2>
            <p className="text-xl text-muted-foreground">
              Metodologia comprovada para garantir os melhores resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnóstico", description: "Análise completa da situação atual", icon: <ClipboardCheck className="h-6 w-6" /> },
              { step: "02", title: "Planejamento", description: "Estratégia personalizada para suas necessidades", icon: <PieChart className="h-6 w-6" /> },
              { step: "03", title: "Implementação", description: "Execução das soluções com acompanhamento", icon: <TrendingUp className="h-6 w-6" /> },
              { step: "04", title: "Resultados", description: "Monitoramento e otimização contínua", icon: <CheckCircle className="h-6 w-6" /> }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    {process.icon}
                  </div>
                  <Badge variant="secondary" className="absolute -top-2 -right-2">
                    {process.step}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solicite um orçamento agora mesmo
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar suas necessidades e apresentar 
            soluções personalizadas para transformar sua gestão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate("contact")}
              className="px-8"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("about")}
              className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Conheça Nossa Empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};