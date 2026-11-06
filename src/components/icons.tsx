import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { IconType } from "react-icons/lib";

function createiconComponent(component: IconType) {
  return (...props: Parameters<IconType>) => {
    return component(...props);
  };
}

export const InstagramIcon = createiconComponent(FiInstagram);
export const TwitterIcon = createiconComponent(FiTwitter);
export const MailIcon = createiconComponent(FiMail);
