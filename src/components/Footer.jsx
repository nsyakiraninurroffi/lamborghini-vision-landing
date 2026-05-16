import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-midnight-violet border-t border-rose-gold/10">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4 tracking-wider">LAMBORGHINI</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Where elegance meets raw power. A legacy of Italian excellence, 
              reimagined for those who dare to be extraordinary.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/specs', label: 'Specifications' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'VIP Contact' },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-white/40 hover:text-rose-gold text-sm transition-colors duration-300"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <span>concierge@lamborghini.com</span>
              <span>+39 051 681 7611</span>
              <span>Via Modena 12, Sant'Agata Bolognese</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} LAMBORGHINI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            Made by Nesya Kirani Nurroffi
          </p>
        </div>
      </div>
    </footer>
  );
}
