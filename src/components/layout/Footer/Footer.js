import Image from 'next/image'
import SocialLinks from './components/SocialLinks'
import FooterLinks from './components/FooterLinks'
import LanguageSelector from './components/LanguageSelector'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-white px-6 py-8 bottom-0 w-full">
        {/* Logo */}
        <div className="flex justify-center">
        <Image 
        src="/images/logo.webp"
        alt="S-Property"
        width={150}
        height={40}
        className="w-auto h-auto"
        priority
        />
        </div>
        
      <SocialLinks />
      <FooterLinks />
      <LanguageSelector />
      
      {/* Copyright */}
      <div className="text-center text-sm text-white">
        © 2025 S-Property. Hak cipta dilindungi.
      </div>
    </footer>
  )
}