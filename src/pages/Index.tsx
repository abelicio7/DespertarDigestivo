import { Check, ArrowDown, Shield, Clock, Leaf, Heart, Sparkles, ChevronDown } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";
import intestinoComparacao from "@/assets/intestino-comparacao.webp";
import heroPain from "@/assets/hero-pain.jpg";
import { useState } from "react";

// Link do seu checkout
const CHECKOUT_URL = "https://pay.zenofy.io/p/despertardigestivo";

const CTAButton = ({
  children,
  className = "",
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-cta inline-block px-8 py-5 rounded-xl text-lg md:text-xl font-bold text-accent-foreground uppercase tracking-wide text-center ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`btn-cta px-8 py-5 rounded-xl text-lg md:text-xl font-bold text-accent-foreground uppercase tracking-wide ${className}`}
    >
      {children}
    </button>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors">
      <Check className="w-5 h-5 text-primary" />
    </div>
    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">{children}</p>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-glass rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
      >
        <span className="text-lg font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed animate-fade-in">{answer}</div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={heroPain} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                🌿 Solução 100% Natural
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Há dias que não consegue evacuar?{" "}
              <span className="text-gradient">Sente o corpo pesado, inchado e sem alívio?</span>
            </h1>

           <p
  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up"
  style={{ animationDelay: "0.3s" }}
>
  Descubra a receita natural que está ajudando centenas de pessoas a{" "}
  <span className="text-foreground font-medium">libertar o intestino</span> — sem laxantes, sem cólicas, sem sofrimento.
</p>

          </div>
        </div>
      </section>

      {/* Pain Identification Section */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Você se identifica com isso?</h2>

            <div className="card-glass rounded-2xl p-8 md:p-12 space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Dias e mais dias passam... e <span className="text-foreground font-medium">nada de ir ao banheiro</span>.
                Você acorda com a barriga pesada, se sente estufado o dia todo, e aquele desconforto parece não ter fim.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Já tentou chás, laxantes, remédios... mas quando funcionam, causam cólicas horríveis. E quando não
                funcionam, você se sente ainda mais frustrado.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">A irritação aumenta</span>, a autoestima cai, e você começa a
                evitar situações sociais por vergonha ou medo de passar mal.
              </p>

              <div className="flex justify-center pt-6">
                <img
                  src={intestinoComparacao}
                  alt="Comparação entre intestino saudável e intestino preso"
                  className="max-w-md w-full rounded-xl shadow-lg"
                />
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center pt-4 font-medium">
                Se você vive assim, saiba que <span className="text-primary">não precisa mais ser desse jeito</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                A Solução Natural
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Conheça o <span className="text-gradient">Despertar Digestivo</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Uma <strong className="text-foreground">bebida natural simples</strong>, desenvolvida para ajudar seu
                intestino a funcionar de forma mais regular, sem agressividade e sem dependência de medicamentos.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Feita com ingredientes acessíveis que você encontra em qualquer mercado, fácil de preparar e pensada para
                estimular seu sistema digestivo com suavidade.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">100% Natural</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Preparo Rápido</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Suave ao Corpo</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={productMockup}
                  alt="Despertar Digestivo - Drink Evacuador"
                  className="relative max-w-md w-full animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Benefícios
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">O que você pode esperar</h2>
            </div>

            <div className="card-glass rounded-2xl p-8 md:p-12 space-y-6">
              <BenefitItem>
                <strong>Auxilia no funcionamento do intestino</strong> de forma natural e gradual
              </BenefitItem>
              <BenefitItem>
                Pode ajudar a <strong>reduzir a sensação de inchaço</strong> e desconforto abdominal
              </BenefitItem>
              <BenefitItem>
                Contribui para uma <strong>rotina intestinal mais regular</strong>
              </BenefitItem>
              <BenefitItem>
                Alternativa natural aos laxantes — <strong>sem agressividade</strong>
              </BenefitItem>
              <BenefitItem>
                Ingredientes simples e <strong>fácil de incluir na rotina</strong> diária
              </BenefitItem>
              <BenefitItem>
                Receita <strong>acessível</strong> — sem necessidade de ingredientes caros
              </BenefitItem>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Proof Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              História Real
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Por que criei essa receita</h2>

            <div className="card-glass rounded-2xl p-8 md:p-12">
              <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4 text-left">
                <p>
                  "Durante anos, eu mesmo sofri com o intestino preso. Conhecia aquela sensação de acordar pesado, de
                  passar dias sem conseguir evacuar, de tentar de tudo e nada funcionar de verdade."
                </p>
                <p>
                  "Depois de muita pesquisa e tentativas, encontrei uma combinação de ingredientes naturais que, pra mim,
                  fez toda a diferença. Minha rotina intestinal melhorou, e decidi organizar tudo em um passo a passo
                  simples."
                </p>
                <p className="text-foreground font-medium">
                  "Agora, quero compartilhar essa receita com quem também passa por isso. Sem exageros, sem promessas
                  milagrosas — apenas algo que me ajudou e pode ajudar você também."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4 inline mr-2" />
                Dúvidas Frequentes
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Respondendo suas dúvidas</h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="E se não funcionar pra mim?"
                answer="Cada organismo reage de forma diferente. Essa receita é uma alternativa natural que pode auxiliar no funcionamento do intestino, mas não é uma garantia. O importante é experimentar com consciência e observar como seu corpo responde."
              />
              <FAQItem
                question="Isso é remédio?"
                answer="Não. O Despertar Digestivo é uma receita natural feita com ingredientes comuns. Não é um medicamento e não substitui orientação médica. Se você tem condições de saúde específicas, consulte um profissional."
              />
              <FAQItem
                question="É complicado de preparar?"
                answer="De jeito nenhum! A receita foi pensada para ser simples e rápida. Em poucos minutos você consegue preparar, usando ingredientes que provavelmente já tem em casa."
              />
              <FAQItem
                question="Tem ingredientes caros?"
                answer="Não. Todos os ingredientes são acessíveis e você encontra em qualquer supermercado. A ideia é que qualquer pessoa possa fazer sem pesar no bolso."
              />
              <FAQItem
                question="Em quanto tempo posso sentir diferença?"
                answer="Isso varia de pessoa para pessoa. Algumas pessoas relatam melhoras em poucos dias, outras levam mais tempo. O ideal é incluir na rotina e observar seu corpo com paciência."
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">O que você vai receber</h2>
              <p className="text-lg text-muted-foreground">Acesso imediato ao material digital completo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-glass rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Receita Completa</h3>
                  <p className="text-muted-foreground">
                    Todos os ingredientes e quantidades exatas para preparar o Drink Evacuador
                  </p>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modo de Preparo</h3>
                  <p className="text-muted-foreground">Passo a passo simples e ilustrado para você não errar</p>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dicas de Uso</h3>
                  <p className="text-muted-foreground">
                    Orientações de quando e como consumir para melhores resultados
                  </p>
                </div>
              </div>

              <div className="card-glass rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Bônus Especial</h3>
                  <p className="text-muted-foreground">
                    Orientações complementares para potencializar sua saúde digestiva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para dar o primeiro passo para um{" "}
              <span className="text-gradient">intestino mais saudável</span>?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Comece hoje a cuidar da sua saúde digestiva de forma natural. Acesso imediato após a confirmação do
              pagamento.
            </p>

            <div className="card-glass rounded-2xl p-8 md:p-10 max-w-xl mx-auto section-glow">
              <div className="mb-6 flex justify-center">
                <img src={productMockup} alt="Despertar Digestivo" className="w-48 md:w-64 lg:max-w-xs mx-auto object-contain" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-2">Despertar Digestivo – Drink Evacuador</h3>
              <p className="text-muted-foreground mb-4">Receita natural + Modo de preparo + Dicas de uso + Bônus</p>

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="text-xl text-muted-foreground line-through">497MZN</span>
                <span className="text-3xl md:text-4xl font-bold text-accent">247MZN</span>
              </div>

              <CTAButton className="w-full" href={CHECKOUT_URL}>
                Quero Experimentar o Despertar Digestivo
              </CTAButton>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Compra Segura
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Acesso Imediato
                </span>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground max-w-lg mx-auto">
              Este produto não substitui orientação médica. Consulte um profissional de saúde se você tiver condições
              específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Despertar Digestivo. Todos os direitos reservados.</p>
            <p className="mt-2">Este produto não é um medicamento e não substitui acompanhamento médico.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
