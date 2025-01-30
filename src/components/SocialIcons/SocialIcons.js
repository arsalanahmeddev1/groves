import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
]

export function SocialIcons() {
  return (
    <div className="flex justify-center space-x-4 my-8">
      {socialLinks.map((social) => (
        <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full"
            aria-label={`Visit our ${social.name} page`}
          >
            <social.icon className="w-5 h-5" />
          </Button>
        </Link>
      ))}
    </div>
  )
}
