import Link from 'next/link'

const socialLinks = [
  {
    name: "Discord",
    href: "https://discord.gg/fcQPCsN8EF",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 71 55" fill="currentColor">
  <title>Discord</title>
  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.4154C45.5603 0.3986 45.468 0.4408 45.4204 0.525C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0586 26.1886 1.6353 25.5617 0.525C25.5141 0.4408 25.4218 0.3986 25.3294 0.4154C20.2584 1.2881 15.4057 2.8179 10.8776 4.8978C10.8384 4.9146 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0175 12.3413 52.7249 18.1147 54.5195C18.2071 54.5478 18.305 54.5136 18.3638 54.4379C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.504 16.1781 45.304 16.3088 45.2082C16.679 44.9293 17.0492 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3155C29.2558 49.6202 41.8354 49.6202 53.3179 44.3155C53.3935 44.2789 53.4831 44.2902 53.5509 44.3437C53.9084 44.6366 54.2786 44.9293 54.6517 45.2082C54.7824 45.304 54.7746 45.504 54.6347 45.5858C52.866 46.6197 51.0273 47.4931 49.0921 48.2221C48.9662 48.27 48.9102 48.4172 48.9718 48.5383C50.038 50.603 51.2554 52.5695 52.5959 54.4346C52.6519 54.5136 52.7526 54.5478 52.845 54.5195C58.6464 52.7249 64.529 50.0175 70.6019 45.5576C70.6551 45.5182 70.6887 45.4595 70.6943 45.3947C72.1747 30.0791 68.2147 16.7757 60.1968 4.9829C60.1773 4.9429 60.1437 4.9146 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.937 34.1136 40.937 30.1693C40.937 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6985 30.1693C53.6985 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
</svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/viraledgecol?igsh=MWF6bXc1d214bjg4MQ==",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" fill="currentColor">
        <title>Instagram</title>
        <path d="M12 0c3.293 0 3.697.012 4.988.072 1.291.06 2.177.276 2.965.59a5.93 5.93 0 0 1 2.156 1.4 5.93 5.93 0 0 1 1.4 2.156c.314.788.53 1.674.59 2.965.06 1.291.072 1.695.072 4.988s-.012 3.697-.072 4.988c-.06 1.291-.276 2.177-.59 2.965a5.93 5.93 0 0 1-1.4 2.156 5.93 5.93 0 0 1-2.156 1.4c-.788.314-1.674.53-2.965.59-1.291.06-1.695.072-4.988.072s-3.697-.012-4.988-.072c-1.291-.06-2.177-.276-2.965-.59a5.93 5.93 0 0 1-2.156-1.4 5.93 5.93 0 0 1-1.4-2.156c-.314-.788-.53-1.674-.59-2.965C.012 15.697 0 15.293 0 12s.012-3.697.072-4.988c.06-1.291.276-2.177.59-2.965a5.93 5.93 0 0 1 1.4-2.156A5.93 5.93 0 0 1 4.218.662c.788-.314 1.674-.53 2.965-.59C8.474.012 8.878 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm7.8-1.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@viraledgecol?_t=ZS-90Hb2DTr7h6&_r=1',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 256 256" fill="currentColor">
  <title>TikTok</title>
  <path d="M224.5 89.6a55.9 55.9 0 0 1-33.1-10.9 56.4 56.4 0 0 1-21.6-32.8V40h-34.9v137.2a28.1 28.1 0 1 1-19.7-26.8V115a63 63 0 0 0-9.9-.8 64 64 0 1 0 64 64V93.6a91.2 91.2 0 0 0 54.2 17.8V89.6z"/>
</svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900 to-purple-700 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              ViralEdge Studios
            </Link>
            <p className="text-sm leading-6 text-gray-400 max-w-sm">
              Servicios profesionales de desarrollo de software con más de un año de experiencia. Ofrecemos calidad, transparencia y soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-purple-400 hover:bg-purple-600/20 hover:rotate-12"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 block" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Servicios</h3>
              <ul role="list" className="space-y-4">
                <li>
                  <Link href="/fivem-services" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    Servicios de FiveM/MTA
                  </Link>
                </li>
                <li>
                  <Link href="/general-services" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    Servicios Generales
                  </Link>
                </li>
                <li>
                  <Link href="/marketing-services" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    Servicios de Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white mb-6">Legal</h3>
              <ul role="list" className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm leading-6 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">© 2025 Orizn Studios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
