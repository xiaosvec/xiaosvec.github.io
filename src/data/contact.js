import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faStrava } from '@fortawesome/free-brands-svg-icons/faStrava';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/xiaomeow',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://orcid.org/0000-0001-5700-9055',
    label: 'Orcid',
    icon: faOrcid,
  },
  {
    link: 'https://www.linkedin.com/in/xiaomeow/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://facebook.com/xiao.svec',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.strava.com/athletes/74674977',
    label: 'Strava',
    icon: faStrava,
  },
  {
    link: 'mailto:xiao.svec@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
