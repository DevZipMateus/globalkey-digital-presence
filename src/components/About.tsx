import { Building2, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa história
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde 2009 conectando o Brasil ao mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fundação</h3>
                  <p className="text-muted-foreground">
                    A empresa foi fundada em 2009, motivada pelo conhecimento herdado da família
                    no comércio exterior e o espírito empreendedor presente em gerações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expansão global</h3>
                  <p className="text-muted-foreground">
                    Em 2009, buscando novas oportunidades, nosso fundador foi à China explorar o
                    mercado asiático, rompendo com o eixo tradicional Brasil-EUA-Europa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Especialização</h3>
                  <p className="text-muted-foreground">
                    Com o tempo, nos especializamos em materiais isolantes para alto-falantes,
                    consolidando nossa posição como referência no setor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <p className="text-foreground leading-relaxed mb-6">
                Formado em Comércio Exterior pela Universidade Presbiteriana Mackenzie, com
                experiências acadêmicas nos Estados Unidos, Canadá e Reino Unido, nosso fundador
                carrega consigo profundo conhecimento sobre culturas e mercados internacionais.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Foram quase dois meses na China em uma jornada movida por curiosidade e
                determinação, em busca de um segmento para atuar. Após explorar diferentes
                nichos, encontramos nossa vocação nos materiais para alto-falantes.
              </p>
              <p className="text-foreground leading-relaxed">
                Hoje, a Global Key atende clientes em todo o Brasil e em diversos países como
                Arábia Saudita, Argentina e China, oferecendo serviços completos de importação,
                exportação e assessoria internacional.
              </p>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nossos próximos objetivos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🇨🇳</div>
                <p className="text-white/90">
                  Aperfeiçoar domínio da língua chinesa e consolidar exportações para a China
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">📦</div>
                <p className="text-white/90">
                  Ampliar linha de produtos voltados a reparos de alto-falantes
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🌎</div>
                <p className="text-white/90">
                  Expandir serviços de comércio exterior no mercado nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
