import React from 'react';
import { motion } from 'motion/react';
import { Clock, Diamond, Shield, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-extrabold text-2xl tracking-tight flex items-center gap-2">
            TryIt <span className="text-cyan-400">Express</span>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-colors cursor-default">
            By TryIt
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Disponibilidade Limitada
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
              O Seu Novo Site Premium.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                No Ar em 48 Horas.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-medium leading-relaxed">
              Não perca mais clientes para a concorrência. Desenvolvemos landing pages de alta conversão, com design de elite, entregues em 1 a 2 dias. Sem dores de cabeça, sem esperas infinitas.
            </motion.p>
            
            <motion.button 
              variants={fadeInUp}
              onClick={scrollToContact}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-[#0A0A0A] font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Quero o Meu Site Agora</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <FeatureCard 
                icon={<Clock className="w-8 h-8 text-cyan-400" />}
                title="Velocidade Absoluta"
                description="Esqueça os meses de espera. O seu negócio online a faturar em 1 a 2 dias."
              />
              <FeatureCard 
                icon={<Diamond className="w-8 h-8 text-cyan-400" />}
                title="Design de Elite"
                description="Não usamos templates baratos. Criamos experiências visuais que convertem visitantes em clientes."
              />
              <FeatureCard 
                icon={<Shield className="w-8 h-8 text-cyan-400" />}
                title="Zero Chatices"
                description="Tratamos da tecnologia, do alojamento e do design. Você foca-se apenas em gerir o seu negócio."
              />
            </motion.div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6">O Nosso Padrão de Qualidade</h2>
                <div className="w-12 h-1 bg-cyan-500 mb-8" />
                <h3 className="text-2xl font-bold mb-4">PF Detail Studio</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  Transformámos a presença digital desta marca de estética automóvel de luxo com um site focado em conversão direta. Design imaculado, navegação instantânea e foco total na captação de clientes.
                </p>
                <ul className="space-y-4">
                  {['Design Premium Customizado', 'Otimização Mobile-First', 'Copywriting Persuasivo'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="order-1 lg:order-2 relative">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-2 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full rounded-xl bg-[#111] border border-white/5 shadow-2xl overflow-hidden flex flex-col relative z-10">
                    {/* Fake Browser Header */}
                    <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    {/* Fake Website Content */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative overflow-hidden bg-[#050505]">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full" />
                      <div className="w-3/4 h-10 bg-white/10 rounded-lg mb-6" />
                      <div className="w-1/2 h-4 bg-white/5 rounded mb-10" />
                      <div className="w-40 h-12 bg-cyan-500/20 rounded-full border border-cyan-500/30" />
                      
                      {/* Fake Grid */}
                      <div className="mt-12 grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white/5 rounded-lg" />
                        <div className="h-24 bg-white/5 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-20">
                Do Zero ao Lançamento em 3 Passos
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                
                <ProcessStep 
                  number="01"
                  title="Contacto"
                  description="Diz-nos o que precisa. Alinhamos objetivos, referências e a mensagem a transmitir."
                />
                <ProcessStep 
                  number="02"
                  title="Execução"
                  description="A nossa equipa trabalha a uma velocidade ímpar. Design, copy e desenvolvimento em simultâneo."
                />
                <ProcessStep 
                  number="03"
                  title="Lançamento"
                  description="Site no ar, otimizado e pronto para receber tráfego e converter visitantes em clientes."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Pronto para dominar o seu mercado?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-white/60 mb-12 font-medium">
                O seu negócio não pode esperar. Fale connosco hoje.
              </motion.p>
              
              <motion.a 
                variants={fadeInUp}
                href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
                className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-white text-[#0A0A0A] font-black text-xl rounded-full hover:bg-cyan-400 transition-colors duration-300 hover:scale-105 active:scale-95"
              >
                Contactar Especialista
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center relative z-10 bg-[#0A0A0A]">
        <p className="text-sm text-white/40 font-medium">
          ✉️ tomas.mosqueiro@tryit.pt | Uma marca do grupo TryIt.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
}

function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <motion.div variants={fadeInUp} className="relative flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-8 relative z-10 group hover:border-cyan-500 transition-colors duration-300">
        <span className="font-display text-3xl font-extrabold text-cyan-400">{number}</span>
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 leading-relaxed font-medium max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
