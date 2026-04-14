import React from 'react';
import { motion } from 'motion/react';
import { Clock, Diamond, Shield, ArrowRight, CheckCircle2, TrendingUp, Zap, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#E85D04]/20 selection:text-[#E85D04] overflow-x-hidden">
      
      {/* Sticky Header */}
      <nav className="sticky top-0 z-[100] bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-[20px] h-20 flex justify-between items-center">
          <div className="font-display font-black text-2xl tracking-tight">
            <span className="text-[#222222]">Try</span>
            <span className="text-[#E85D04]">It Express</span>
          </div>
          <a 
            href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
            className="group px-6 py-3 bg-[#222222] text-white font-bold text-sm rounded-sm hover:bg-[#E85D04] transition-all duration-300 flex items-center gap-2"
          >
            LET'S TRYIT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-[80px] px-[20px] text-center bg-white overflow-hidden">
          {/* Subtle Tech Pattern Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[1200px] mx-auto flex flex-col items-center justify-center relative z-10"
          >
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full text-sm font-bold text-[#555555]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85D04] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E85D04]"></span>
              </span>
              Capacidade Limitada: Aceitamos 2 projetos/semana
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8 text-[#222222]">
              O Seu Novo Site Premium.<br />
              No Ar em <span className="highlight">48 Horas.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#555555] max-w-4xl mb-12 font-medium leading-relaxed">
              Não perca mais clientes para a concorrência. Desenvolvemos landing pages de alta conversão, com design de elite corporativa, entregues em 1 a 2 dias. Sem dores de cabeça.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#E85D04] text-white font-bold text-lg rounded-sm hover:bg-[#D05003] hover:shadow-lg transition-all duration-300"
              >
                Quero o Meu Site Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Garantia de Qualidade TryIt
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Trusted By / Social Proof */}
        <section className="border-y border-gray-100 bg-white py-[80px] px-[20px]">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
              O Padrão de Excelência do Grupo TryIt
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
              <div className="font-display font-bold text-xl flex items-center gap-2"><Globe className="w-6 h-6"/> GLOBAL CORP</div>
              <div className="font-display font-bold text-xl flex items-center gap-2"><TrendingUp className="w-6 h-6"/> NEXT LEVEL</div>
              <div className="font-display font-bold text-xl flex items-center gap-2"><Zap className="w-6 h-6"/> FAST TECH</div>
            </div>
          </div>
        </section>

        {/* Section 2: Features */}
        <section className="py-[80px] px-[20px] bg-[#F8F9FA]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">A Vantagem Injusta</h2>
              <p className="text-lg text-[#555555] font-medium">Porque é que as empresas de topo escolhem a TryIt Express.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]"
            >
              <FeatureCard 
                icon={<Zap className="w-10 h-10 text-[#E85D04]" />}
                title="Velocidade Absoluta"
                desc="Processos otimizados que nos permitem desenhar, programar e lançar o seu site numa fração do tempo normal."
              />
              <FeatureCard 
                icon={<Diamond className="w-10 h-10 text-[#E85D04]" />}
                title="Design de Elite"
                desc="A estética corporativa perfeita. Transmita confiança imediata aos seus clientes com um visual imaculado."
              />
              <FeatureCard 
                icon={<Shield className="w-10 h-10 text-[#E85D04]" />}
                title="Zero Chatices"
                desc="Chave na mão. Tratamos da infraestrutura, do alojamento e do código. O seu foco fica apenas nas vendas."
              />
            </motion.div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="py-[80px] px-[20px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mb-20 text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#222222]">
                Como funciona o <span className="highlight">Processo Express?</span>
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
            >
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gray-100 z-0" />
              
              <ProcessStep 
                num="01"
                title="Briefing Rápido"
                desc="Uma chamada de 30 minutos para alinhar objetivos, referências visuais e a mensagem principal."
              />
              <ProcessStep 
                num="02"
                title="Execução Intensiva"
                desc="A nossa equipa entra em 'deep work'. Design, copywriting e desenvolvimento acontecem em simultâneo."
              />
              <ProcessStep 
                num="03"
                title="Lançamento"
                desc="Revisão final e colocação online. O seu site fica imediatamente pronto para receber e converter tráfego."
              />
            </motion.div>
          </div>
        </section>

        {/* Section 4: Case Study */}
        <section className="py-[80px] px-[20px] bg-[#F8F9FA]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="flex flex-col lg:flex-row items-center gap-[4rem]"
            >
              <motion.div variants={fadeUp} className="flex-1">
                <div className="text-sm font-bold text-[#E85D04] tracking-widest uppercase mb-4">Caso de Estudo</div>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-[#222222] leading-tight">
                  PF Detail Studio.<br />
                  <span className="highlight">O Padrão de Qualidade.</span>
                </h2>
                <p className="text-xl text-[#555555] leading-relaxed font-medium mb-10">
                  Transformámos a presença digital desta marca de estética automóvel de luxo com um site focado exclusivamente em conversão e agendamentos.
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-4xl font-black text-[#222222] mb-1">+210%</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Aumento de Leads</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#222222] mb-1">48h</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Tempo de Entrega</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-[#E85D04] translate-x-4 translate-y-4 rounded-[12px] transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                  alt="PF Detail Studio Portfolio" 
                  className="relative z-10 w-full aspect-[4/3] object-cover rounded-[12px] shadow-lg border border-gray-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Banner */}
        <section className="py-[80px] px-[20px] bg-[#E85D04] text-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              <CheckCircle2 className="w-16 h-16 mb-6 opacity-90" />
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Garantia de Excelência TryIt</h2>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl">
                Se o design final não refletir o profissionalismo e a ambição da sua marca, trabalhamos até estar perfeito. O nosso nome está em jogo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="py-[80px] px-[20px] bg-[#1A1A1A] text-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight">
                Gostamos de ser desafiados!<br />
                Pronto para dominar o seu mercado?
              </motion.h2>
              
              <motion.a 
                variants={fadeUp}
                href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-[#222222] font-bold text-xl rounded-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Contactar Especialista <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-[80px] px-[20px] bg-[#111111] text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-black text-xl tracking-tight">
            <span className="text-white">Try</span>
            <span className="text-[#E85D04]">It Express</span>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            ✉️ tomas.mosqueiro@tryit.pt | Uma marca do grupo TryIt.
          </p>
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} TryIt. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="bg-white p-[2rem] rounded-[8px] border border-[#EAEAEA] flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold text-[#222222] mb-4">{title}</h3>
      <p className="text-[#555555] font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#E85D04] group-hover:text-[#E85D04] transition-colors duration-300">
        <span className="font-display font-black text-xl text-gray-300 group-hover:text-[#E85D04] transition-colors duration-300">{num}</span>
      </div>
      <h3 className="font-display text-2xl font-bold text-[#222222] mb-3">{title}</h3>
      <p className="text-[#555555] font-medium leading-relaxed max-w-xs">{desc}</p>
    </motion.div>
  );
}
