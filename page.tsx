"use client";

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import React from 'react'
import {
    Gamepad2, Globe, Smartphone, Bot, TrendingUp, Cpu,
    Users, Lock, DollarSign, Rocket, Shield, ShieldCheck, ArrowRight
} from "lucide-react"

// ***********************************************
// TIPADO APLICADO: Soluciona todos los errores TS7031 en los stubs Link e Image
// ***********************************************

interface CommonProps {
    className?: string;
    [key: string]: any; // Permite pasar props adicionales (como 'aria-label', etc.)
}

interface LinkProps extends CommonProps {
    href: string;
    children: React.ReactNode;
}

interface ImageProps extends CommonProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    // Tipado correcto para onError
    onError?: React.ReactEventHandler<HTMLImageElement>;
}

// STUB: Simulamos Link y Image para que el componente sea autocontenido fuera de Next.js
// Tipado aplicado a los parámetros (props)
const Link = ({ href, children, className, ...props }: LinkProps) => (
    <a href={href} className={className} {...props}>
        {children}
    </a>
);

// Tipado aplicado a los parámetros (props)
const Image = ({ src, alt, width, height, className, fill, onError, ...props }: ImageProps) => {
    // Si se usa 'fill', usamos un contenedor absoluto y una imagen con w-full h-full para simular el comportamiento.
    if (fill) {
        return (
            // Se debe asegurar que el contenedor tenga dimensiones si la imagen tiene 'fill'
            <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
                <img
                    src={src}
                    alt={alt}
                    // className es null o undefined aquí, pero las variables no tipadas del destructuring fallan.
                    // Si el usuario pasó className con 'fill', se aplica al <div>. La imagen interna no lo necesita.
                    className="object-cover w-full h-full"
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/1280x720/1a1a1a/9ca3af?text=Imagen+No+Cargada"
                        if (onError) onError(e as any); // Asumo 'any' para onError en el stub para no forzar el tipo en el if
                    }}
                    {...props}
                />
            </div>
        );
    }

    // Renderizado estándar para imágenes con dimensiones fijas
    return (
        <img
            src={src}
            alt={alt}
            width={width} // TS ahora sabe que width es number | undefined
            height={height} // TS ahora sabe que height es number | undefined
            className={className}
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/${width}x${height}/1a1a1a/ffffff?text=I`
                if (onError) onError(e as any); // Asumo 'any' para onError en el stub para no forzar el tipo
            }}
            {...props}
        />
    );
};

// ***********************************************
// TIPADO APLICADO: Componentes de Animación (FadeIn, etc.)
// Soluciona los errores TS7031, TS2741 y TS2739 al dar tipos precisos
// ***********************************************

interface MotionComponentProps extends CommonProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

const FadeIn: React.FC<MotionComponentProps> = ({ children, className = "", delay = 0, ...props }) => (
    <motion.div
        {...props}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay }}
        className={className} // Se asegura que className esté presente
    >
        {children}
    </motion.div>
);

const SectionInView: React.FC<MotionComponentProps> = ({ children, className = "", delay = 0.1, duration = 0.8, ...props }) => (
    <motion.div
        {...props}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: duration, delay: delay }}
        className={className}
    >
        {children}
    </motion.div>
);

interface ScaleOnHoverProps extends CommonProps { children: React.ReactNode; }
const ScaleOnHover: React.FC<ScaleOnHoverProps> = ({ children, className = "", ...props }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={className}
    >
        {children}
    </motion.div>
);

interface MagneticProps extends CommonProps { children: React.ReactNode; }
const Magnetic: React.FC<MagneticProps> = ({ children, className = "", ...props }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
        className={className}
    >
        {children}
    </motion.div>
);

interface AnimatedGradientTextProps extends CommonProps { children: React.ReactNode; }
const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ children, className = "", ...props }) => {
    const GRADIENT_FROM = "#720d8bff";
    const GRADIENT_TO = "#b306dfff";

    return (
        <div
            className={`text-transparent bg-clip-text ${className}`}
            style={{ backgroundImage: `linear-gradient(to right, ${GRADIENT_FROM}, ${GRADIENT_TO})` }}
        >
            {children}
        </div>
    );
};

interface FloatingProps extends CommonProps { children: React.ReactNode; }
const Floating: React.FC<FloatingProps> = ({ children, className = "", ...props }) => (
    <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

// ***********************************************

// Icon componente profesional
const iconMap = {
    Gamepad2, Globe, Smartphone, Bot, TrendingUp, Cpu, Users, Lock, DollarSign, Rocket, Shield, ShieldCheck, ArrowRight
}
// Tipado existente (está bien)
interface IconProps { name: keyof typeof iconMap | string; className?: string; }
const Icon: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
    const LucideIcon = iconMap[name as keyof typeof iconMap]
    return LucideIcon
        ? <LucideIcon className={`text-white ${className}`} />
        : <span className={`text-white ${className}`}>{name}</span>
}

// --- Datos (sin cambios) ---

const services = [
    { iconName: "Gamepad2", title: "Desarrollo de FiveM/MTA", description: "Scripts personalizados, recursos y soluciones completas para servidores de FiveM/MTA con alto rendimiento y características únicas.", link: "/fivem-services" },
    { iconName: "Globe", title: "Desarrollo Web", description: "Sitios web y aplicaciones web modernas y responsivas construidas con React, Next.js y tecnologías de vanguardia.", link: "/web-development" },
    { iconName: "Smartphone", title: "Desarrollo de Aplicaciones Móviles", description: "Aplicaciones nativas para iOS y Android, soluciones multiplataforma con React Native y Flutter.", link: "/app-development" },
    { iconName: "Bot", title: "Desarrollo de Bots", description: "Bots personalizados para Discord, Telegram y soluciones de automatización para negocios y juegos.", link: "/bot-development" },
    { iconName: "TrendingUp", title: "Soluciones de Marketing", description: "Estrategias de marketing digital, optimización SEO y gestión de redes sociales.", link: "/marketing-services" },
    { iconName: "Cpu", title: "Software Personalizado", description: "Aplicaciones empresariales a medida, sistemas CRM y soluciones empresariales para sus necesidades específicas.", link: "/software-development" },
]

const features = [
    { iconName: "Users", title: "Equipo con experiencia", description: "Más de 1 año de experiencia en Marketing Digital y Desarrollo de Software con un historial comprobado de proyectos exitosos." },
    { iconName: "Lock", title: "Calidad y transparencia", description: "Mantenemos los más altos estándares de calidad y total transparencia en todos nuestros procesos y comunicaciones." },
    { iconName: "DollarSign", title: "Precios Competitivos", description: "Ofrecemos la mejor calidad a precios competitivos, garantizando el máximo valor para su inversión." },
    { iconName: "Rocket", title: "Soluciones innovadoras", description: "Soluciones tecnológicas de vanguardia diseñadas para satisfacer las necesidades y objetivos específicos de su negocio." },
    { iconName: "Shield", title: "Servicios Integrales", description: "Desde hosting y ciberseguridad hasta marketing y mucho más: cubrimos todas sus necesidades digitales." },
    { iconName: "ShieldCheck", title: "Cyberseguridad y Protección", description: "Medidas de seguridad avanzadas y protocolos de protección para mantener sus aplicaciones y datos seguros." },
]

const teamMembers = [
    { name: "Sr_NB | Nicolas Torres", role: "CEO & Business Leader", description: "Líder estratégico que impulsa el desarrollo de negocios y soluciones innovadoras para los clientes con experiencia en diversas tecnologias.", skills: ["Estrategia empresarial", "Gestión de proyectos", "Relaciones con el cliente"], initials: "NB", image: "/images/team/nicolas.png" },
    { name: "safra0329 | Diego Perez", role: "Co-Founder", description: "Co-Fundador estrategico y desarrollador digital con innovacion.", skills: ["Estratega de Marketing", "Editor Profesional", "Diseñador Digital", "Innovación"], initials: "SA", image: "/images/team/safra.png" },
    { name: "?", role: "?", description: "?", skills: ["?", "?", "?", "?"], initials: "?", image: "/images/team/default.jpg" },
    { name: '?"', role: "?", description: "?", skills: ["?", "?", "?"], initials: "??", image: "/images/team/default2.jpg" },
]

const testimonials = [
    { text: "Conseguí buenos resultados en mi servidor de roleplay con su servicio de Marketing Digital. Muy recomendable", author: "Los Santos Roleplay ERLC", role: "Cliente", image: "/images/lsrp.png" },
    { text: "Excelente servicio de marketing. Mi servidor de ERLC creció rápidamente gracias a su video de 1,6M de vistas en TikTok.", author: "City Life RP", role: "Cliente", image: "/images/citylife.jfif" },
    { text: "Su bot para Discord ha mejorado enormemente la gestión de nuestra comunidad. ¡Servicio al cliente de primera!", author: "Kulki Bot", role: "Cliente", image: "/images/kulki.svg" },
]

// Tipado aplicado a las props de este componente
interface GlobalNeonStylesProps {
    PRIMARY: string;
    SECONDARY: string;
    BORDER_COLOR: string;
    CARD_BG: string;
    SHADOW_COLOR_ALPHA: string;
}

const GlobalNeonStyles: React.FC<GlobalNeonStylesProps> = ({ PRIMARY, SECONDARY, BORDER_COLOR, CARD_BG, SHADOW_COLOR_ALPHA }) => {
    // Definición de variables CSS
    const NEON_PRIMARY = PRIMARY;
    const NEON_SECONDARY = SECONDARY;
    const NEON_PRIMARY_ALPHA = SHADOW_COLOR_ALPHA;
    const NEON_SECONDARY_ALPHA = 'rgba(114, 13, 139, 0.5)';

    const cssContent = `
        :root {
            --neon-primary: ${NEON_PRIMARY};
            --neon-secondary: ${NEON_SECONDARY};
            --neon-primary-alpha: ${NEON_PRIMARY_ALPHA};
            --neon-secondary-alpha: ${NEON_SECONDARY_ALPHA};
            --border-color: ${BORDER_COLOR};
            --card-bg: ${CARD_BG};
        }

        @keyframes pulse-neon {
            0%, 100% { 
                box-shadow: 0 0 10px 0px var(--neon-primary-alpha), 0 0 20px 0px var(--neon-primary-alpha) inset;
                border-color: var(--neon-secondary);
            }
            50% { 
                box-shadow: 0 0 20px 3px var(--neon-primary-alpha), 0 0 35px 3px var(--neon-primary-alpha) inset;
                border-color: var(--neon-primary);
            }
        }

        .button-pulse {
            animation: pulse-neon 2s infinite ease-in-out;
        }
        
        .card-glow {
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
            background-color: var(--card-bg);
        }

        .card-glow:hover {
            border-color: var(--neon-secondary);
            box-shadow: 0 0 15px var(--neon-primary-alpha);
            transform: translateY(-3px);
        }
    `;

    return <style dangerouslySetInnerHTML={{ __html: cssContent }} />;
};


// --- Componente Principal ---

export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [currentTeamMember, setCurrentTeamMember] = useState(0)

    // =========================
    // PALETA DE COLORES
    // =========================
    const PRIMARY = "#b306dfff";     // MORADO/PÚRPURA vibrante
    const SECONDARY = "#720d8bff";   // MORADO oscuro/brillante
    const BG_MAIN = "#000000";       // NEGRO PURO
    const CARD_BG = "#0d0d0d";       // GRIS MÁS OSCURO (casi negro para tarjetas sólidas)
    const BORDER_COLOR = "#1f1f1f";  // Gris para bordes sutiles
    const TXT_MED = "#9ca3af";       // Gris medio

    // Versión transparente del color primario para sombras
    const SHADOW_COLOR_ALPHA = 'rgba(179, 6, 223, 0.5)';

    // Lógica del slider automático para testimonios
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 8000)
        return () => clearInterval(interval)
    }, [])

    // Lógica del slider automático para el equipo
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTeamMember((prevIndex) =>
                prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
            )
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {/* Estilos CSS personalizados para los efectos de neón */}
            <GlobalNeonStyles 
                PRIMARY={PRIMARY} 
                SECONDARY={SECONDARY} 
                BORDER_COLOR={BORDER_COLOR} 
                CARD_BG={CARD_BG} 
                SHADOW_COLOR_ALPHA={SHADOW_COLOR_ALPHA}
            />

            {/* Fondo principal negro puro */}
            <div className="relative pt-32 pb-16 min-h-screen text-white" style={{ backgroundColor: BG_MAIN, fontFamily: 'Inter, sans-serif' }}>
                {/* Hero Section */}
                <div className="relative pb-16 sm:pb-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <FadeIn delay={0.2} className="w-full"> {/* className añadido */}
                                {/* Texto degradado morado */}
                                <AnimatedGradientText>
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                        Servicios de Marketing y Desarrollo de Software
                                    </h1>
                                </AnimatedGradientText>
                            </FadeIn>

                            <FadeIn delay={0.4} className="w-full"> {/* className añadido */}
                                {/* Texto secundario gris medio */}
                                <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                                    Ofrecemos todo tipo de servicios de Marketing y Software. Desde aplicaciones web hasta soluciones empresariales personalizadas, nuestro equipo está listo para hacer realidad su visión.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.6} className="w-full"> {/* className añadido */}
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Magnetic className="w-auto"> {/* className añadido */}
                                        <Link
                                            href="/contact"
                                            className="rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-80 transition-all transform hover:scale-105 active:scale-95 button-pulse"
                                            style={{ backgroundColor: PRIMARY, boxShadow: `0 4px 15px ${SECONDARY}` }}
                                        >
                                            Empezar Hoy Mismo
                                        </Link>
                                    </Magnetic>

                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-auto" // className añadido
                                    >
                                        <Link
                                            href="/contact"
                                            className="text-sm font-semibold leading-6 hover:text-white transition-colors flex items-center"
                                            style={{ color: TXT_MED }}
                                        >
                                            Contáctenos ahora <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                      {/* Hero Image */}
                <FadeIn delay={0.8} className="w-full">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
                        <ScaleOnHover className="group relative w-full h-96 rounded-lg shadow-2xl overflow-hidden border cursor-pointer" style={{ borderColor: SECONDARY }}>
                            {/* IMAGEN CAMBIADA AQUÍ */}
                            <Image
                                src="/images/dashboard.png" // <--- RUTA DE IMAGEN ACTUALIZADA
                                alt="Vista previa del panel de control - Visualización moderna del flujo de trabajo de desarrollo"
                                fill
                            />
                            {/* ... el resto del div ... */}
                        </ScaleOnHover>
                    </div>
                </FadeIn>
            </div>

            {/* Client Testimonials */}
            <SectionInView className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Lo que dicen nuestros clientes
                        </h2>
                        <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                            Confiado por empresas de todo el mundo para ofrecer resultados excepcionales
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl mt-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative p-8 text-center min-h-[250px] flex flex-col justify-center rounded-lg shadow-xl overflow-hidden card-glow"
                                style={{
                                    backgroundColor: CARD_BG,
                                    boxShadow: `0 0 15px ${SHADOW_COLOR_ALPHA}`
                                }}
                            >
                                <blockquote className="text-xl font-semibold text-white mb-6">
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>
                                <div className="flex flex-col items-center">
                                    <div className="mb-3">
                                        {/* Image con width y height */}
                                        <Image
                                            src={testimonials[currentTestimonial].image || "https://placehold.co/50x50/720d8b/ffffff?text=C"}
                                            alt={`Imagen de perfil de ${testimonials[currentTestimonial].author}`}
                                            width={50}
                                            height={50}
                                            className="rounded-full object-cover border-2 shadow-lg"
                                            style={{ borderColor: PRIMARY }}
                                        />
                                    </div>
                                    <div className="font-semibold text-white">
                                        {testimonials[currentTestimonial].author}
                                    </div>
                                    <div style={{ color: TXT_MED }}>
                                        {testimonials[currentTestimonial].role}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navegación del Slider Manual */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all transform hover:scale-150 ${
                                        index === currentTestimonial
                                            ? "w-6"
                                            : "bg-gray-600 hover:opacity-80"
                                    }`}
                                    style={{ backgroundColor: index === currentTestimonial ? PRIMARY : BORDER_COLOR }}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Ver testimonio ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SectionInView>

            {/* Featured Services */}
            <SectionInView className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Servicios Destacados
                        </h2>
                        <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                            Nuestros servicios más populares y demandados en los que los clientes confían para obtener resultados excepcionales.
                        </p>
                    </div>

                    <div className="mx-auto max-w-7xl mt-16">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <FadeIn key={index} delay={0.1 + index * 0.1} className="w-full"> {/* className añadido */}
                                    <div
                                        className="service-card text-center group p-6 rounded-lg shadow-xl overflow-hidden card-glow cursor-pointer"
                                    >
                                        <Floating className="inline-block">
                                            <div
                                                className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform"
                                                style={{
                                                    animationDelay: `${index * 0.1}s`,
                                                    backgroundColor: PRIMARY,
                                                    boxShadow: `0 0 15px ${SHADOW_COLOR_ALPHA}`
                                                }}
                                            >
                                                <Icon name={service.iconName} className="w-8 h-8" />
                                            </div>
                                        </Floating>
                                        <h3
                                            className="text-xl font-semibold text-white mb-4 transition-colors"
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="mb-6" style={{ color: TXT_MED }}>{service.description}</p>
                                        <Link
                                            href={service.link}
                                            className="font-semibold transition-all hover:translate-x-2 inline-block px-4 py-2 rounded"
                                            style={{ color: PRIMARY }}
                                        >
                                            Obtener cotización <Icon name="ArrowRight" className="w-4 h-4 inline-block ml-1 align-middle" />
                                        </Link>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionInView>

            {/* Why Choose Us */}
            <SectionInView className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                            Somos una agencia de marketing con más de un año de experiencia, que atiende a una amplia gama de clientes, desde particulares hasta grandes empresas. Nuestro compromiso es ofrecer una calidad excepcional, una comunicación transparente y precios competitivos, a la vez que ofrecemos las mejores soluciones para sus necesidades.
                        </p>
                        <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                            Además del marketing, ofrecemos una gama completa de servicios de crecimiento digital. Desde alojamiento confiable y protección avanzada de ciberseguridad hasta desarrollo de software personalizadas, Diseño Gráfico, le ayudamos a construir, proteger y escalar su presencia online.
                        </p>
                    </div>

                    <div className="mx-auto max-w-7xl mt-16">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => (
                                <FadeIn key={index} delay={0.1 + index * 0.1} className="w-full"> {/* className añadido */}
                                    <div
                                        key={index}
                                        className="relative p-6 group rounded-lg shadow-xl overflow-hidden card-glow cursor-default"
                                    >
                                        <div
                                            className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-xl text-white group-hover:rotate-12 transition-transform"
                                            style={{ backgroundColor: PRIMARY, boxShadow: `0 0 10px ${SHADOW_COLOR_ALPHA}` }}
                                        >
                                            <Icon name={feature.iconName} className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-4 transition-colors" style={{ color: PRIMARY }}>
                                            {feature.title}
                                        </h3>
                                        <p className="group-hover:text-gray-300 transition-colors" style={{ color: TXT_MED }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionInView>

            {/* Meet Our Team */}
            <SectionInView className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Conozca a nuestro Equipo
                        </h2>
                        <p className="mt-6 text-lg leading-8" style={{ color: TXT_MED }}>
                            Conozca a los líderes visionarios que hacen realidad el "si lo puedes imaginar, lo podemos codificar". Si bien todo nuestro equipo aporta un valor único, estos son los cerebros detrás de cada proyecto, convirtiendo los sueños en excelencia digital.
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl mt-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTeamMember}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="relative p-8 rounded-lg shadow-xl overflow-hidden card-glow"
                                style={{
                                    backgroundColor: CARD_BG,
                                    boxShadow: `0 0 15px ${SHADOW_COLOR_ALPHA}`
                                }}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden"
                                            style={{ backgroundImage: `linear-gradient(to bottom right, ${SECONDARY}, ${PRIMARY})` }}
                                        >
                                            {teamMembers[currentTeamMember].image && teamMembers[currentTeamMember].image.includes("/images/team/") && teamMembers[currentTeamMember].initials !== "?" && teamMembers[currentTeamMember].initials !== "??" ? (
                                                <Image
                                                    src={teamMembers[currentTeamMember].image}
                                                    alt={teamMembers[currentTeamMember].name}
                                                    width={192}
                                                    height={192}
                                                    className="object-cover w-full h-full"
                                                    // Ya no necesitamos onError aquí si Image está bien tipado, pero lo mantenemos como fallback seguro
                                                />
                                            ) : (
                                                <span className="text-4xl font-bold text-white">
                                                    {teamMembers[currentTeamMember].initials}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-white">
                                            {teamMembers[currentTeamMember].name}
                                        </h3>
                                        <p className="font-semibold mb-4" style={{ color: PRIMARY }}>
                                            {teamMembers[currentTeamMember].role}
                                        </p>
                                        <p className="mb-6" style={{ color: TXT_MED }}>
                                            {teamMembers[currentTeamMember].description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                            {teamMembers[currentTeamMember].skills.map((skill, index) => (
                                                <motion.span
                                                    key={index}
                                                    whileHover={{ scale: 1.1, backgroundColor: SECONDARY, color: 'white' }}
                                                    transition={{ duration: 0.2 }}
                                                    className="px-3 py-1 rounded-full text-sm transition-all cursor-default"
                                                    style={{ backgroundColor: BORDER_COLOR, color: PRIMARY, border: `1px solid ${SECONDARY}` }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navegación entre miembros */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {teamMembers.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all transform hover:scale-125 ${
                                        index === currentTeamMember
                                            ? "" 
                                            : "bg-gray-600 hover:opacity-80"
                                    }`}
                                    style={{ backgroundColor: index === currentTeamMember ? PRIMARY : BORDER_COLOR }}
                                    onClick={() => setCurrentTeamMember(index)}
                                    aria-label={`Ver miembro del equipo ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SectionInView>
        </>
    )
}