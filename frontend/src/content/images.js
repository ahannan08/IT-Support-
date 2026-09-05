import logo from '../assets/logo-transparent.png'
import partner from '../assets/partner.png'
import connect from '../assets/connect.png'
import strongSystem from '../assets/strong_system.png'
import emailSupport from '../assets/email_sup.png'
import systemRepair from '../assets/system_repair.png'
import web from '../assets/web.png'
import network from '../assets/network.png'
import hero from '../assets/hero.png'
import banner from '../assets/banner.png'
import digitalMarketing from '../assets/digital.png'
import webDesigning from '../assets/web designing.png'
import appDevelopment from '../assets/app dev.png'

const images = {
  logo,
  partner,
  connect,
  strong_system: strongSystem,
  email_sup: emailSupport,
  system_repair: systemRepair,
  web,
  network,
  hero,
  banner,
  digital_marketing: digitalMarketing,
  web_designing: webDesigning,
  app_development: appDevelopment,
}

export function resolveImage(key) {
  if (!key) return ''
  return images[key] || key
}

export default images
