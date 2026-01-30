export type NavLink = {
  label: string;
  href: string;
  sublabel?: string;
};

export type LanguageOption = {
  code: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About us', href: '#about', sublabel: 'Who we are' },
  { label: 'Get Connected', href: '#gatherings', sublabel: 'Join a service' },
  { label: 'Giving', href: '#mission' },
  { label: 'Sermon', href: '#sermons' },
];

export const languageOptions: LanguageOption[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
