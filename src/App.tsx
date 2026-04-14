import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Diamond, Shield, ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Phone, Mail, MapPin, X, Instagram, Linkedin, Lock, ShieldCheck, Clock4 } from 'lucide-react';

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

const clientLogos = [
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-ALGARTEMPO-e1707347911346-300x60.png", alt: "Algartempo" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/ami_logo_tryit.png", alt: "AMI" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/logo-apm-e1634845010811-300x123.png", alt: "Associação Democrática da Madeira" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-BERGCOM.png", alt: "Bercom" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/bt-partner-registered-BBT-300x77.png", alt: "Bindtuning" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/bmw_logo_tryit-300x118.png", alt: "BMW Group" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-CEREALIS.png", alt: "Cerealis" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/cv_logo_tryit-e1707347971936-300x55.png", alt: "Costa Verde" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/cp_logo_tryit-e1613916499223-1024x330-1-300x97.png", alt: "CP Comboios de Portugal" },
  { src: "https://tryit.pt/wp-content/uploads/2022/07/dhi-1.png", alt: "DHI" },
  { src: "https://tryit.pt/wp-content/uploads/2022/07/digitalgroup.png", alt: "Digital Group" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-DIMSCALE.png", alt: "Dimscale" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/eco_logo_tryit-300x83.png", alt: "Ecosaúde" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-ENDIPREV-300x86.png", alt: "Endiprev" },
  { src: "https://tryit.pt/wp-content/uploads/2022/07/expressglass-300x75.png", alt: "Express Glass" },
  { src: "https://tryit.pt/wp-content/uploads/2025/01/Futurdata-Logo-Preto-300x150.png", alt: "Futurdata" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/grp_logo_tryit-e1613915831664-300x118.png", alt: "Grupotico" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/hid_logo-tryit-1-e1613915529355-300x34.png", alt: "Hidromaia" },
  { src: "https://tryit.pt/wp-content/uploads/2024/08/homa_logo_tryit-1-300x113.png", alt: "Hôma" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/imf_logo_novo.png", alt: "IMF" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/lab_fantasma_logo_tryit-300x123.png", alt: "Lab Fantasma" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-LIFTECH-300x56.png", alt: "Liftech" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/lg_logo_tryit-300x63.png", alt: "Link&Grow" },
  { src: "https://tryit.pt/wp-content/uploads/2023/10/LOGO-MEDIAGATE-300x110.png", alt: "Media Gate" },
  { src: "https://tryit.pt/wp-content/uploads/2024/02/msftpartner_logo_tryit-e1707347727927-300x78.png", alt: "Microsoft Partner" },
  { src: "https://tryit.pt/wp-content/uploads/2024/08/myos_logo_tryit-300x90.png", alt: "Myos" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/omatapalo_logo_tryit-e1707348021109.png", alt: "Omatapalo" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/pchiado_logo_tryit-e1707348147981-300x85.png", alt: "Palácio do Chiado" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/propet_logo_tryit-e1613914623826-300x102.png", alt: "Pro Pet" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/space_place_logo_tryit-300x55.png", alt: "Space & Place" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/stay_logo_tryit-1024x403-1-300x118.png", alt: "Stay Hotels" },
  { src: "https://tryit.pt/wp-content/uploads/2022/02/Logo-Sunviauto-Vetorial-300x84.png", alt: "Sunviauto" },
  { src: "https://tryit.pt/wp-content/uploads/2022/07/ualg-e1707348052759-300x97.png", alt: "UALG" },
  { src: "https://tryit.pt/wp-content/uploads/2023/12/valerius_logo_tryit-300x93.png", alt: "Valérius Hub" }
];

export default function App() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'dce64022-6036-4094-968d-e864b3226ecd');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        setFormStatus('success');
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

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
            href="#contactos"
            className="group px-6 py-3 bg-[#222222] text-white font-bold text-sm rounded-sm hover:bg-[#E85D04] hover:-translate-y-[2px] transition-all duration-300 flex items-center gap-2"
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
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full text-sm font-bold text-[#444444]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85D04] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E85D04]"></span>
              </span>
              Disponibilidade Express: Vagas semanais limitadas
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8 text-[#222222]">
              O Seu Novo Site Premium.<br />
              No Ar em <span className="highlight">48 Horas.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#444444] max-w-4xl mb-12 font-medium leading-relaxed">
              Não perca mais clientes para a concorrência. Desenvolvemos landing pages de alta conversão, com design de elite corporativa, entregues em 1 a 2 dias. Sem dores de cabeça.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="#contactos"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#E85D04] text-white font-bold text-lg rounded-sm hover:bg-[#CC5204] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
              >
                Quero o Meu Site Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Garantia de Qualidade TryIt
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Trusted By / Social Proof Carousel */}
        <section className="border-y border-gray-100 bg-white py-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-[20px] mb-16">
            <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold text-[#222222]">
              O <span className="highlight">Padrão de Excelência</span> do Grupo TryIt
            </h2>
          </div>
          
          <div className="relative w-full flex items-center">
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="carousel-track">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx} className="relative flex items-center justify-center px-12 md:px-20 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="carousel-logo shrink-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                      e.currentTarget.style.visibility = 'hidden';
                    }}
                  />
                </div>
              ))}
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
              <p className="text-lg text-[#444444] font-medium">Porque é que as empresas de topo escolhem a TryIt Express.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]"
            >
              <FeatureCard 
                icon={<Zap className="w-10 h-10 md:w-12 md:h-12 text-[#E85D04]" />}
                title="Velocidade Absoluta"
                desc="Processos otimizados que nos permitem desenhar, programar e lançar o seu site numa fração do tempo normal."
              />
              <FeatureCard 
                icon={<Diamond className="w-10 h-10 md:w-12 md:h-12 text-[#E85D04]" />}
                title="Design de Elite"
                desc="A estética corporativa perfeita. Transmita confiança imediata aos seus clientes com um visual imaculado."
              />
              <FeatureCard 
                icon={<Shield className="w-10 h-10 md:w-12 md:h-12 text-[#E85D04]" />}
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
                <p className="text-xl text-[#444444] leading-relaxed font-medium mb-10">
                  Transformámos a presença digital desta marca de estética automóvel de luxo com um site focado exclusivamente em conversão e agendamentos.
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 mb-10">
                  <div>
                    <div className="text-4xl font-black text-[#222222] mb-1">+210%</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Aumento de Leads</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#222222] mb-1">48h</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Tempo de Entrega</div>
                  </div>
                </div>
                
                <a 
                  href="https://pf-detailstudio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E85D04] text-white font-bold text-lg rounded-[4px] hover:bg-[#CC5204] hover:-translate-y-[2px] transition-all duration-300 shadow-sm"
                >
                  Visitar Site do Cliente <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-[#E85D04] translate-x-4 translate-y-4 rounded-[12px] transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop" 
                  alt="Desenvolvimento de site premium para estética automóvel" 
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
                href="#contactos"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-[#222222] font-bold text-xl rounded-sm hover:bg-gray-100 hover:-translate-y-[2px] transition-all duration-300 shadow-lg"
              >
                Contactar Especialista <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* NEW SECTION: Contactos */}
        <section id="contactos" className="py-[80px] px-[20px] bg-[#F8F9FA]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">
              
              {/* Left Column: Contact Info */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="font-display text-3xl font-extrabold text-[#222222] mb-8">Informações de Contacto</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#E85D04] shrink-0 mt-1" />
                    <div className="flex flex-col">
                      <span className="text-[#444444] font-medium text-lg">+351 222 450 000 *</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">* Chamada para a rede fixa nacional</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#E85D04] shrink-0 mt-1" />
                    <span className="text-[#444444] font-medium text-lg">info@tryit.pt</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#E85D04] shrink-0 mt-1" />
                    <span className="text-[#444444] font-medium text-lg">Rua da Boavista 291 3º, 4050-102 Porto, Portugal</span>
                  </div>
                </div>

                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.286884617307!2d-8.621535484581533!3d41.15011797928683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24650143896593%3A0x8b1e4a07ce18400!2sR.%20da%20Boavista%20291%2C%204050-102%20Porto!5e0!3m2!1sen!2spt!4v1680000000000!5m2!1sen!2spt" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TryIt Location"
                  className="shadow-sm"
                ></iframe>
              </motion.div>

              {/* Right Column: Form */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-8 md:p-10 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#EAEAEA]"
              >
                <h3 className="font-display text-3xl font-extrabold text-[#222222] mb-8">Envie-nos uma mensagem</h3>
                
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#222222] mb-2">Nome<span className="text-[#E85D04] ml-1">*</span></label>
                      <input type="text" name="nome" required className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors" placeholder="O seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#222222] mb-2">Email<span className="text-[#E85D04] ml-1">*</span></label>
                      <input type="email" name="email" required className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors" placeholder="O seu email" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#222222] mb-2">Telefone</label>
                      <input type="tel" name="telefone" className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors" placeholder="O seu telefone" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#222222] mb-2">Empresa</label>
                      <input type="text" name="empresa" className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors" placeholder="A sua empresa" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#222222] mb-2">Assunto</label>
                    <select name="assunto" className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors bg-white cursor-pointer">
                      <option value="Desenvolvimento de Site Express" className="cursor-pointer">Desenvolvimento de Site Express</option>
                      <option value="Consultoria UI/UX" className="cursor-pointer">Consultoria UI/UX</option>
                      <option value="Outro Assunto" className="cursor-pointer">Outro Assunto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#222222] mb-2">Mensagem<span className="text-[#E85D04] ml-1">*</span></label>
                    <textarea name="mensagem" required rows={4} className="w-full px-4 py-3 rounded-[4px] border border-[#EAEAEA] focus:border-[#E85D04] focus:ring-1 focus:ring-[#E85D04] outline-none transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="aceita_privacidade" required className="mt-1 w-4 h-4 accent-[#E85D04] border-gray-300 rounded cursor-pointer" />
                      <span className="text-sm text-[#444444]">Li e aceito a <button type="button" onClick={() => setIsPrivacyOpen(true)} className="text-[#E85D04] hover:underline cursor-pointer">Política de Privacidade</button><span className="text-[#E85D04] ml-1">*</span></span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="aceita_comunicacoes" required className="mt-1 w-4 h-4 accent-[#E85D04] border-gray-300 rounded cursor-pointer" />
                      <span className="text-sm text-[#444444]">Autorizo o tratamento de dados para o envio de comunicações.<span className="text-[#E85D04] ml-1">*</span></span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 font-bold text-lg rounded-[4px] transition-all duration-300 shadow-sm flex justify-center items-center ${
                      formStatus === 'success' 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : formStatus === 'error'
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-[#E85D04] text-white hover:bg-[#CC5204] hover:-translate-y-[2px]'
                    } ${formStatus === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'idle' && 'ENVIAR'}
                    {formStatus === 'submitting' && 'A ENVIAR...'}
                    {formStatus === 'success' && 'ENVIADO COM SUCESSO'}
                    {formStatus === 'error' && 'ERRO AO ENVIAR'}
                  </button>
                  
                  {formStatus === 'success' && (
                    <motion.p initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="text-green-600 text-sm font-bold text-center mt-4">
                      Mensagem enviada! Entraremos em contacto em menos de 4 horas.
                    </motion.p>
                  )}
                  {formStatus === 'error' && (
                    <motion.p initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="text-red-600 text-sm font-bold text-center mt-4">
                      Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                    </motion.p>
                  )}
                </form>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-[#EAEAEA] flex justify-center gap-6 md:gap-10 text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-center">RGPD COMPLIANT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock4 className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-center">SUPORTE 24/7</span>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>
      </main>

      {/* Footer Institucional */}
      <footer className="py-[40px] px-[20px] bg-[#111111] text-[#CCCCCC]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</button>
            <span className="text-gray-600">|</span>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Livro de Reclamações</a>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-gray-800 pr-6">
              <a href="https://www.linkedin.com/company/tryit-lda/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <div className="text-sm font-medium">
              <a href="https://tryit.pt/" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] font-bold hover:underline">TryIt</a> © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsPrivacyOpen(false)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[12px] shadow-2xl p-8 md:p-12 relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#E85D04] transition-colors bg-gray-100 hover:bg-orange-50 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#222222] mb-8">Política de Privacidade e Proteção de Dados Pessoais</h2>
              
              <div className="space-y-4 text-gray-700 font-medium leading-relaxed text-sm md:text-base">
                <p><strong className="text-[#E85D04] font-bold">Responsável:</strong> Tryit, Lda, com sede na Rua da Boavista 291 3º, 4050-102 Porto, matriculada sob o número único de matrícula e NIPC 515815144.</p>
                <p><strong className="text-[#E85D04] font-bold">Âmbito:</strong> A presente Política destina-se a regular o tratamento de dados pessoais a realizar pela Tryit no âmbito da utilização do serviço e website TryIt Express.</p>
                <p><strong className="text-[#E85D04] font-bold">Dados Recolhidos e Objeto:</strong> O tratamento inclui o registo, recolha, utilização e armazenamento de dados fornecidos diretamente pelo titular através de formulário de contacto ou no âmbito da relação comercial constituída.</p>
                <p><strong className="text-[#E85D04] font-bold">Finalidade:</strong> Os dados são utilizados para a prestação dos serviços de desenvolvimento web solicitados e para fornecer informação sobre serviços ou campanhas, mediante consentimento prévio.</p>
                <p><strong className="text-[#E85D04] font-bold">Dados Não Tratados:</strong> A Tryit não efetuará o tratamento de dados sensíveis (origem racial ou étnica, opiniões políticas, convicções religiosas, dados genéticos, biométricos ou relativos à saúde).</p>
                <p><strong className="text-[#E85D04] font-bold">Transmissão e Segurança:</strong> A Tryit não partilhará dados com terceiros (exceto empresas do grupo ou imposição legal) e possui meios técnicos adequados para proteger os dados contra acessos não autorizados.</p>
                <p><strong className="text-[#E85D04] font-bold">Duração da Manutenção:</strong> Os dados são conservados apenas durante o tempo necessário para a finalidade para a qual foram recolhidos, num prazo máximo de 5 (cinco) anos.</p>
                <p><strong className="text-[#E85D04] font-bold">Acesso, Alteração e Esquecimento:</strong> É conferido ao titular o direito de aceder, retificar ou pedir o apagamento dos seus dados a qualquer momento. A Tryit não toma decisões comerciais com base em perfis automatizados.</p>
                <p><strong className="text-[#E85D04] font-bold">Comunicações:</strong> Qualquer questão relativa ao tratamento de dados deverá ser dirigida através do e-mail: info@tryit.pt.</p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-8 py-3 bg-[#222222] text-white font-bold rounded-[4px] hover:bg-[#E85D04] transition-colors"
                >
                  Compreendi e Aceito
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/351937777677?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20sites%20TryIt%20Express."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[150] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white fill-current">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.246-.705.246-1.31.173-1.426-.075-.116-.273-.181-.574-.331z"></path>
          <path d="M12.004 22c-1.618 0-3.174-.415-4.555-1.204l-5.04 1.32 1.34-4.912A9.94 9.94 0 0 1 2.004 12C2.004 6.477 6.481 2 12.004 2c5.522 0 9.996 4.477 9.996 10s-4.474 10-9.996 10z"></path>
        </svg>
      </a>
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
      <p className="text-[#444444] font-medium leading-relaxed">{desc}</p>
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
      <p className="text-[#444444] font-medium leading-relaxed max-w-xs">{desc}</p>
    </motion.div>
  );
}
