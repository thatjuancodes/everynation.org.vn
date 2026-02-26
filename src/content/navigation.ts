export type NavLink = {
  label: string;
  href: string;
  sublabel?: string;
  items?: NavLink[];
};

export type LanguageOption = {
  code: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About us',
    href: '/about',
    sublabel: 'Who we are',
    items: [
      { label: 'About us', href: '/about' },
      { label: 'Our Mission', href: '/about/mission' },
      { label: 'Foundational Values', href: '/about/values' },
      { label: 'Statement Of Faith', href: '/about/faith' },
    ],
  },
  {
    label: 'Connect',
    href: '/connect',
    items: [
      { label: 'Join a Life Group', href: '/get-connected/join-life-group' },
      { label: 'Prayer Request', href: '/get-connected/prayer-request' },
    ],
  },
  { label: 'Giving', href: '/giving' },
  { label: 'Sermon', href: '/sermon' },
];

export const languageOptions: LanguageOption[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
];

export const socialLinks: { label: string; href: string; icon: 'facebook' | 'youtube' }[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
