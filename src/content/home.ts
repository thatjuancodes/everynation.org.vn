export const siteMeta = {
  title: 'Every Nation Vietnam | Honor God. Make Disciples.',
  description:
    'Every Nation Vietnam is a Christ-centered, Spirit-empowered, socially responsible church family in Ho Chi Minh City. Join us weekly, connect to a life group, and be part of our mission.',
  canonical: 'https://everynationvietnam.org.vn',
  ogImage: '/images/hero-crowd.jpg',
};

export const weeklyGatherings = {
  title: 'Join Us Every Week',
  description:
    'Experience worship, community, and the presence of God across our services. We love meeting you and your family.',
  services: [
    { label: 'International Service', time: 'Sunday 9am' },
    { label: 'Vietnamese Service', time: 'Sunday 11am' },
  ],
  location: 'No 12, 1008 Street, Thanh My Loi Ward',
  mapImage: '/images/map.jpg',
  ctaLabel: 'Get Connected',
};

export const aboutSection = {
  title: 'About Us',
  body:
    'We exist to honor God by\nestablishing Christ-centered,\nSpirit-empowered, socially\nresponsible churches and campus\nministries in every nation',
  ctaLabel: 'See More',
  image: '/images/map.jpg',
};

export const lifeGroups = {
  title: 'Be Part With Our Life Groups',
  body:
    'Grow deeper in community through small groups that meet across the city. Share life, faith, and friendship together.',
  image: '/images/life-group.jpg',
  ctaLabel: 'Get Connected',
};

export const heroContent = {
  eyebrow: 'Every Nation Vietnam',
  headline: 'Honor God.\nMake Disciples.',
  actions: [
    { label: 'Get Connected', href: '#connect' },
    { label: 'Our Schedules', href: '#gatherings' },
  ],
  background: '/images/hero-crowd.jpg',
};

export const missionStats = {
  title: 'Mission 2029',
  subtitle: 'Sứ mệnh 2029',
  highlight: '84 nations with an Every Nation church*',
  stats: [
    { label: 'Outreaches to new nations', value: '19' },
    { label: 'Churches', value: '711' },
    { label: 'University campuses reached by EN Campus Ministry', value: '1,405' },
  ],
  note: '*Numbers as of September 2023.',
  ctaLabel: 'See More',
  background: '/images/stats-bg.jpg',
};

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Mission', href: '/about' },
  { label: 'Foundational Values', href: '/about' },
  { label: 'Statement Of Faith', href: '/about' },
  { label: 'Sermon', href: '#sermons' },
];

export type HeroContent = typeof heroContent;
export type WeeklyGatheringsContent = typeof weeklyGatherings;
export type AboutSectionContent = typeof aboutSection;
export type LifeGroupContent = typeof lifeGroups;
export type MissionStatsContent = typeof missionStats;
