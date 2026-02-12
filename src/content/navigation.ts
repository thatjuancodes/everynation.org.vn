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
      { label: 'About Us', href: '/about' },
      { label: 'Mission', href: '/about/mission' },
      { label: 'Foundational Value', href: '/about/values' },
      { label: 'Statement Of Faith', href: '/about/faith' },
    ],
  },
  {
    label: 'Get Connected',
    href: 'javascript:void(0)',
    sublabel: 'Join us',
    items: [
      { label: 'Join A Life Group', href: '/get-connected/join-life-group' },
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
