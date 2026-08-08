import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <footer className="border-t border-emerald-100 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">आरोग्य समुदाय महाराष्ट्र</h3>
          <p className="mt-3 text-sm leading-7">मराठी भाषेत विश्वसनीय आरोग्य माहिती, पोषण आणि समुदायात्मक साह्य.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">द्रुत दुवे</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-emerald-400">आमच्याबद्दल</Link></li>
            <li><Link href="/articles" className="hover:text-emerald-400">आरोग्य लेख</Link></li>
            <li><Link href="/forum" className="hover:text-emerald-400">चर्चा मंच</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">कायदेशीर</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-emerald-400">गोपनीयता धोरण</Link></li>
            <li><Link href="/terms" className="hover:text-emerald-400">अटी व शर्ती</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-emerald-400">कुकी धोरण</Link></li>
            <li><Link href="/disclaimer" className="hover:text-emerald-400">अस्वीकृती</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400">संपर्क</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">सोशल मीडिया</h4>
          {socialLinks.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-7 text-slate-400">अधिकृत सोशल मीडिया प्रोफाइल्स लवकरच उपलब्ध होतील.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
