import { MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/602626ed-04d1-48ee-9c5c-ca84d7a0c038.png" 
              alt="Koda & Branca" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4">
              Sua parceira para o sucesso empresarial com mais de 20 anos de experiência em consultoria administrativa.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CRA-SP nº 6-009033
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contato@kodaebrancaassessoria.com.br" className="text-sm hover:text-primary-foreground/80 transition-colors">
                  contato@kodaebrancaassessoria.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/5514988359798" className="text-sm hover:text-primary-foreground/80 transition-colors">
                  (14) 98835-9798
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <div className="text-sm">
                  <p>Rua João Ferreira, 599 – Cs-5</p>
                  <p>Vila São Luiz – Ourinhos (SP)</p>
                  <p>CEP 19911-240</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Consultoria Administrativa</li>
              <li>Licitações e Contratos</li>
              <li>Gestão Financeira</li>
              <li>Prestação de Contas</li>
              <li>Projetos Públicos</li>
              <li>Assessoria para MEI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2024 Koda & Branca Assessoria e Consultoria. Todos os direitos reservados.</p>
            <p>CRA-SP nº 6-009033 | Desenvolvido com excelência</p>
          </div>
        </div>
      </div>
    </footer>
  );
};