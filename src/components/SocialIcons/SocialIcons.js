import { FaTiktok, FaInstagram, FaTwitter, FaSnapchatGhost } from "react-icons/fa"
import { SiX } from "react-icons/si"
import Link from "next/link"

const socialIcons = [
  { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { name: "X", icon: SiX, url: "https://x.com" },
  { name: "Snapchat", icon: FaSnapchatGhost, url: "https://snapchat.com" },
]

export function SocialIconsList() {
  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {socialIcons.map((social) => (
        <li key={social.name}>
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-gray-400  transition-colors"
            aria-label={`Visit our ${social.name} page`}
          >
            <social.icon className="w-[21px] h-[21px]" />
            <span className="sr-only">{social.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}