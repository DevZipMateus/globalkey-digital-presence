import { FileText, Package2, Ship, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em comércio internacional e produtos premium
            </p>
          </div>

          <Tabs defaultValue="assessoria" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="assessoria">Assessoria internacional</TabsTrigger>
              <TabsTrigger value="produtos">Produtos</TabsTrigger>
            </TabsList>

            <TabsContent value="assessoria" className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Ship className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Importação e exportação</h3>
                    <p className="text-muted-foreground">Gestão completa do seu comércio exterior</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  O Brasil é um país notório por ser complexo e caro do ponto de vista tributário e
                  burocrático. Fazer negócios com outras culturas, fusos horários e procedimentos
                  também não é simples. A Global Key oferece solução completa na gestão dos seus
                  processos de importação e exportação, com acompanhamento desde a origem até a
                  entrega final.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Planejamento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Busca de fornecedores</li>
                        <li>✓ Negociação internacional</li>
                        <li>✓ Análise tributária prévia</li>
                        <li>✓ Classificação fiscal (NCM)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Operacional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Fechamento de câmbio</li>
                        <li>✓ Despacho aduaneiro</li>
                        <li>✓ Gestão logística completa</li>
                        <li>✓ Emissão de notas fiscais</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm text-foreground font-medium mb-2">
                    Atendimento especializado em:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary">
                      🇧🇷 Português
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary">
                      🇺🇸 Inglês
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary">
                      🇪🇸 Espanhol
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="produtos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Filme de Polimida (equivalente ao Kapton®)</CardTitle>
                  <CardDescription>Alta resistência térmica até 400°C</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Utilizado na fabricação e reparo de bobinas de alto-falantes devido à sua
                    excelente resistência térmica, estabilidade dimensional e isolamento elétrico
                    superior.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      0,075 mm
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      0,10 mm
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      0,125 mm
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      0,15 mm
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      0,18 mm
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Altura: 520 mm</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filme de Polimida com Adesivo (equivalente ao Kapton® SV)</CardTitle>
                  <CardDescription>Com adesivo de alta resistência</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Combina o desempenho térmico da polimida com a praticidade de um adesivo de
                    alta resistência. Ideal para aplicações que exigem isolamento e fixação
                    simultânea.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Espessuras: 0,075 mm a 0,18 mm | Altura: 270 mm
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fibra Fenólica</CardTitle>
                  <CardDescription>As melhores fibras do Brasil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Materiais de alta rigidez e resistência térmica, amplamente utilizados como
                    suporte e reforço em bobinas de alto-falantes. Reconhecidas pela qualidade
                    superior.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      Preta
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      Laranja
                    </span>
                    <span className="px-3 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                      Marrom
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Espessura: 0,15 mm</p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fio CCAW</CardTitle>
                    <CardDescription>Cobre revestido de alumínio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Combina leveza e alta condutividade elétrica. 60% Alumínio / 40% Cobre.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Bitolas: 21 AWG a 30 AWG | Temperatura: 200°C
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Papéis de Acabamento</CardTitle>
                    <CardDescription>Acabamento profissional</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Papel branco (0,13 mm)</li>
                      <li>• Papel kraft preto (0,175 mm)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
                <Package2 className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Em breve</h4>
                <p className="text-sm text-muted-foreground">
                  Cones e kits de reparo completos para alto-falantes, mantendo o mesmo padrão de
                  qualidade e precisão.
                </p>
              </div>

              <div className="text-xs text-muted-foreground text-center p-4 bg-muted/50 rounded-lg">
                ⚖️ <strong>Aviso Legal:</strong> Kapton® é uma marca registrada da DuPont. Os
                produtos descritos são materiais equivalentes, não fabricados nem afiliados à
                DuPont.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
