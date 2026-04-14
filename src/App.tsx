import React from 'react';
import { Clock, Diamond, Shield, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#E85D04]/20 selection:text-[#E85D04] overflow-x-hidden">
      
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-black text-2xl tracking-tight">
            <span className="text-[#222222]">Try</span>
            <span className="text-[#E85D04]">It Express</span>
          </div>
          <a 
            href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
            className="px-6 py-3 bg-[#222222] text-white font-bold text-sm rounded-sm hover:bg-[#E85D04] transition-colors duration-300 flex items-center gap-2"
          >
            LET'S TRYIT <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* Section 1: Hero */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-[#222222]">
              O Seu Novo Site Premium.<br />
              <span className="inline-block shadow-[inset_0_-14px_0_rgba(232,93,4,0.8)] mt-2">
                No Ar em 48 Horas.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#555555] max-w-2xl mb-12 font-medium leading-relaxed">
              Não perca mais clientes. Desenvolvemos landing pages de alta conversão, com design de elite, entregues em 1 a 2 dias. Sem dores de cabeça.
            </p>
            
            <a 
              href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#E85D04] text-white font-bold text-lg rounded-sm hover:bg-[#D05003] transition-colors duration-300"
            >
              Quero o Meu Site Agora <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Section 2: Features */}
        <section className="py-24 px-6 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Clock className="w-10 h-10 text-[#E85D04]" />}
                title="Velocidade Absoluta"
              />
              <FeatureCard 
                icon={<Diamond className="w-10 h-10 text-[#E85D04]" />}
                title="Design de Elite"
              />
              <FeatureCard 
                icon={<Shield className="w-10 h-10 text-[#E85D04]" />}
                title="Zero Chatices"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Case Study */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-[#222222] leading-tight">
                  PF Detail Studio.<br />
                  <span className="inline-block shadow-[inset_0_-10px_0_rgba(232,93,4,0.8)]">
                    O Padrão de Qualidade.
                  </span>
                </h2>
                <p className="text-xl text-[#555555] leading-relaxed font-medium">
                  Transformámos a presença digital desta marca de luxo com um site focado em conversão.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                  alt="PF Detail Studio Portfolio" 
                  className="w-full aspect-[4/3] object-cover rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Final CTA */}
        <section className="py-32 px-6 bg-[#1A1A1A] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight">
              Gostamos de ser desafiados!<br />
              Pronto para dominar o seu mercado?
            </h2>
            
            <a 
              href="mailto:tomas.mosqueiro@tryit.pt?subject=Novo%20Site%20-%20TryIt%20Express"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-[#222222] font-bold text-xl rounded-sm hover:bg-gray-100 transition-colors duration-300"
            >
              Contactar Especialista <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#111111] text-center">
        <p className="text-sm text-gray-400 font-medium">
          ✉️ tomas.mosqueiro@tryit.pt | Uma marca do grupo TryIt.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="bg-white p-10 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold text-[#222222]">{title}</h3>
    </div>
  );
}
