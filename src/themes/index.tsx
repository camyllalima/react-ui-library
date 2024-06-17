const space = {
  x0: '0px',
  x1px: '1px',
  x2px: '2px',
  x3px: '3px',
  'x0.25rem': '0.25rem', // 4px
  x5px: '5px',
  x6px: '6px',
  'x0.5rem': '0.5rem', // 8px
  x10px: '10px',
  'x0.75rem': '0.75rem', // 12px
  x14px: '14px',
  x1rem: '1rem', // 16px
  x18px: '18px',
  'x1.25rem': '1.25rem', // 20px
  x22px: '22px',
  'x1.5rem': '1.5rem', // 24px
  x26px: '26px',
  'x1.75rem': '1.75rem', // 28px
  x30px: '30px',
  x2rem: '2rem', // 32px
  x34px: '34px',
  'x2.25rem': '2.25rem', // 36px
  x38px: '38px',
  'x2.5rem': '2.5rem', // 40px
  x42px: '42px',
  'x2.75rem': '2.75rem', // 44px
  x46px: '46px',
  x3rem: '3rem', // 48px
  x50px: '50px',
  'x3.25rem': '3.25rem', // 52px
  x54px: '54px',
  'x3.5rem': '3.5rem', // 56px
  x58px: '58px',
  'x3.75rem': '3.75rem', // 60px
  x62px: '62px',
  x4rem: '4rem', // 64px
  x66px: '66px',
  'x4.25rem': '4.25rem', // 68px
  x70px: '70px',
  'x4.5rem': '4.5rem', // 72px
  x74px: '74px',
  'x4.75rem': '4.75rem', // 76px
  x78px: '78px',
  x5rem: '5rem', // 80px
  'x5.25rem': '5.25rem', // 84px
  'x5.5rem': '5.5rem', // 88px
  'x5.75rem': '5.75rem', // 92px
  x6rem: '6rem', // 96px
  'x6.25rem': '6.25rem', // 100px
  'x6.5rem': '6.5rem', // 104px
  'x6.75rem': '6.75rem', // 108px
  x7rem: '7rem', // 112px
  'x7.25rem': '7.25rem', // 116px
  'x7.5rem': '7.5rem', // 120px
  'x7.75rem': '7.75rem', // 124px
  x8rem: '8rem', // 128px
  'x8.25rem': '8.25rem', // 132px
  'x8.5rem': '8.5rem', // 136px
  'x8.75rem': '8.75rem', // 140px
  x9rem: '9rem', // 144px
  'x9.25rem': '9.25rem', // 148px
  'x9.5rem': '9.5rem', // 152px
  'x9.75rem': '9.75rem', // 156px
  x10rem: '10rem', // 160px
  x11rem: '11rem', // 176px
  x12rem: '12rem', // 192px
  x200px: '200px',
  x13rem: '13rem', // 208px
  x14rem: '14rem', // 224px
  x15rem: '15rem', // 240px
  x16rem: '16rem', // 256px
  x17rem: '17rem', // 272px
  x18rem: '18rem', // 288px
  x19rem: '19rem', // 304px
  x20rem: '20rem', // 320px
  x21rem: '21rem', // 336px
  x22rem: '22rem', // 352px
  x23rem: '23rem', // 368px
  x24rem: '24rem', // 384px
  x25rem: '25rem', // 400px
  x26rem: '26rem', // 416px
  x27rem: '27rem', // 432px
  x28rem: '28rem', // 448px
  x29rem: '29rem', // 464px
  x30rem: '30rem', // 480px
  x40rem: '40rem', // 640px
  x50rem: '50rem', // 800px
  x60rem: '60rem', // 960px
  x70rem: '70rem', // 1120px
  x80rem: '80rem', // 1280px
} as const;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobile: '400px',
  mobileL: '425px',
  mobileXL: '480px',
  tabletS: '576px',
  tabletM: '600px',
  tabletLM: '650px',
  tabletXM: '700px',
  tablet: '768px',
  tabletL: '826px',
  tabletXL: '850px',
  laptopS: '900px',
  laptop: '1024px',
  laptopM: '1330px',
  laptopL: '1440px',
  laptopXL: '1600px',
  desktopS: '1980px',
  desktop: '2560px',
} as const;

const getDevices = (mobileFirst = false) => {
  const mobileFirstAsString = mobileFirst ? 'min-width' : 'max-width';

  return {
    mobileS: `(${mobileFirstAsString}: ${size.mobileS})`,
    mobileM: `(${mobileFirstAsString}: ${size.mobileM})`,
    mobile: `(${mobileFirstAsString}: ${size.mobile})`,
    mobileL: `(${mobileFirstAsString}: ${size.mobileL})`,
    mobileXL: `(${mobileFirstAsString}: ${size.mobileXL})`,
    tabletS: `(${mobileFirstAsString}: ${size.tabletS})`,
    tabletM: `(${mobileFirstAsString}: ${size.tabletM})`,
    tabletLM: `(${mobileFirstAsString}: ${size.tabletLM})`,
    tabletXM: `(${mobileFirstAsString}: ${size.tabletXM})`,
    tablet: `(${mobileFirstAsString}: ${size.tablet})`,
    tabletL: `(${mobileFirstAsString}: ${size.tabletL})`,
    tabletXL: `(${mobileFirstAsString}: ${size.tabletXL})`,
    laptopS: `(${mobileFirstAsString}: ${size.laptopS})`,
    laptop: `(${mobileFirstAsString}: ${size.laptop})`,
    laptopM: `(${mobileFirstAsString}: ${size.laptopM})`,
    laptopL: `(${mobileFirstAsString}: ${size.laptopL})`,
    laptopXL: `(${mobileFirstAsString}: ${size.laptopXL})`,
    desktopS: `(${mobileFirstAsString}: ${size.desktopS})`,
    desktop: `(${mobileFirstAsString}: ${size.desktop})`,
  };
};

export const theme = {
  colors: {
    red: {
      '10': '#E71C35',
      '20': '#ed5568',
    },
    blue: {
      '10': '#48A4F9',
      '20': '#118DFF',
    },
    yellow: {
      '10': '#FFC700',
    },
    green: {
      '10': '#B7CD2D',
      '20': '#75C26B',
      '30': '#00c639',
      '40': '#7ac143',
    },
    neutral: {
      white: '#FFFFFF',
      transparent: 'transparent',
      black: '#000000',

      '10': '#ddd',
      '20': '#e5e6e6',
      '25': '#e5e5e640',
      '30': '#5c5e62',
      '40': '#53565A',
      '50': '#A5A5A5',
      '60': '#F6F7F7',
      '70': '#D3E7F866',
      '80': '#D4D5D6',
      '90': '#C3C4C5',
      '100': '#8f9194',
      '110': '#F5F5F5',
      '200': '#252728',

      '900-opacity-25': 'rgba(21,22,23,0.25)',
      '999-opacity-10': 'rgba(0,0,0,0.1)',
      '999-opacity-12': 'rgba(0,0,0,0.12)',
      '999-opacity-15': 'rgba(0,0,0,0.15)',
      '999-opacity-19': 'rgba(0,0,0,0.19)',
      '999-opacity-20': 'rgba(0,0,0,0.2)',
      '999-opacity-25': 'rgba(0,0,0,0.25)',
      '999-opacity-50': 'rgba(0,0,0,0.5)',
      '999-opacity-55': 'rgba(0,0,0,.7)',
      '999-opacity-60': 'rgba(0,0,0,.25)',
      '999-opacity-65': 'rgba(0,0,0,0.06)',
      '999-opacity-70': 'rgba(151,151,151,0.47)',
      '999-opacity-75': 'rgba(113,113,113)',
    },
  },

  device: {
    min: getDevices(true),
    max: getDevices(false),
    size,
  },
  
  typography: {
    fontFamily: {
      barlow: 'Barlow',
      openSans: 'Open Sans',
      roboto: 'Roboto',
      chivo: 'Chivo',
      inter: 'Inter',
    },
    fontSize: {
      /**
       * sm - medidas entre 10px e 18px
       */
      sm: {
        x1: '10px',
        x2: '11px',
        x3: '12px',
        x4: '13px',
        x5: '14px',
        x6: '15px',
        x7: '16px',
        x8: '17px',
        x9: '18px',
      },
      /**
       * md - medidas entre 20px e 28px
       */
      md: {
        x1: '20px',
        x2: '22px',
        x3: '24px',
        x4: '26px',
        x5: '28px',
      },
      /**
       * lg - medidas entre 30px e 64px
       */
      lg: {
        x1: '30px',
        x2: '32px',
        x3: '36px',
        x4: '40px',
        x5: '50px',
        x6: '56px',
        x7: '60px',
        x8: '64px',
      },
    },
    fontWeight: {
      '100': 100,
      '200': 200,
      '300': 300,
      '400': 400,
      '500': 500,
      '600': 600,
      '700': 700,
      '800': 800,
      '900': 900,
      bold: 'bold',
      bolder: 'bolder',
      normal: 'normal',
    },
  },
  space,
} as const;

export type ThemeType = typeof theme;
