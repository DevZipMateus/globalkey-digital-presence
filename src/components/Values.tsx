import { Target, Eye, Heart } from "lucide-react";

const Values = () => {
  return (
    <section id="valores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos valores
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/30 rounded-2xl p-8 hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos uma organização global em busca de oferecer produtos e serviços excepcionais,
                de forma descomplicada, ágil e moderna, com a finalidade de criar vínculos fortes e
                duradouros com nossos clientes, fornecedores e colaboradores.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sermos referência na comercialização de produtos nacionais ou importados, bem como
                na prestação de serviços no Brasil ou no exterior.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Respeitar o indivíduo, independentemente de suas características</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Buscar superar as expectativas de nossos clientes, fornecedores e parceiros
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
