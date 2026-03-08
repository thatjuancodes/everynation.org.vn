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

export const navLinks: Record<string, NavLink[]> = {
  en: [
    { label: 'Home', href: '/en' },
    {
      label: 'About us',
      href: '/en/about',
      sublabel: 'Who we are',
      items: [
        { label: 'About us', href: '/en/about' },
        { label: 'Our Mission', href: '/en/about/mission' },
        { label: 'Foundational Values', href: '/en/about/values' },
        { label: 'Statement Of Faith', href: '/en/about/faith' },
      ],
    },
    {
      label: 'Connect',
      href: '/en/connect',
      items: [
        { label: 'Join a Life Group', href: '/en/get-connected/join-life-group' },
        { label: 'Prayer Request', href: '/en/get-connected/prayer-request' },
      ],
    },
    { label: 'Giving', href: '/en/giving' },
    { label: 'Sermon', href: '/en/sermon' },
  ],
  vi: [
    { label: 'Trang chủ', href: '/vi' },
    {
      label: 'Về chúng tôi',
      href: '/vi/about',
      sublabel: 'Who we are',
      items: [
        { label: 'Về chúng tôi', href: '/vi/about' },
        { label: 'Sứ mệnh', href: '/vi/about/mission' },
        { label: 'Giá trị nền tảng', href: '/vi/about/values' },
        { label: 'Chúng tôi tin rằng', href: '/vi/about/faith' },
      ],
    },
    {
      label: 'Kết nối',
      href: '/vi/connect',
      items: [
        { label: 'Tham gia cùng nhóm nhỏ', href: '/vi/get-connected/join-life-group' },
        { label: 'Gửi yêu cầu cầu nguyện', href: '/vi/get-connected/prayer-request' },
      ],
    },
    { label: 'Dự phần dâng hiến', href: '/vi/giving' },
    { label: 'Bài giảng', href: '/vi/sermon' },
  ]
};

export const languageOptions: LanguageOption[] = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
];

export const socialLinks: { label: string; href: string; icon: 'facebook' | 'youtube' }[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
