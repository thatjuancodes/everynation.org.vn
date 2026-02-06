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
  { label: 'Get Connected', href: '#gatherings', sublabel: 'Join a service' },
  { label: 'Giving', href: '#mission' },
  { label: 'Sermon', href: '#sermons' },
];

export const languageOptions: LanguageOption[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
];

export const socialLinks: { label: string; href: string; icon: 'facebook' | 'youtube' }[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
