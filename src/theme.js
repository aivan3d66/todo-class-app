const font = 'Gill Sans, sans-serif'

// Color palette
const black = '#000000'
const darkGray = 'rgba(34, 60, 80, 0.2)'
const lightGray = '#707070'
const extraLightGray = '#F2F2F2'
const white = '#ffffff'
const error = '#c86464'
const lightOrange = '#EECFBA'
const extraLightBlue = '#C5DDE8'
const lightBlue = 'rgba(100, 149, 237, 100)'
const blue = 'rgba(100, 149, 237, 0.5)'
const secondaryLight = '#b2b2b2b2'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xxs: 400,
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
  max: 100,
  btn: 140,
  todo: 20,
}

export default {
  size,
  boxShadows,
  font,
  height: {
    full: 100,
    h28: 7,  // 112px
    h32: 8,  // 130px
    h38: 12,  // 200px
    h96: 32, // 500px
  },
  radius: {
    roundedSm: 0.5,  // 8px
    roundedMd: 1.5,  // 24px
    roundedFull: 9999,
  },
  paddings: {
    p2: 0.75, // 10px
    p5: 1.25, // 20px
    p10: 2.5, // 40px
    p15: 4.0, // 60px
  },
  margins: {
    m5: 1.25, // 20px
    m10: 2.5, // 40px
    m20: 4.5, // 40px
  },
  spaces: [
    0,
    1,
    2,
    4,
    8,
    10,
    15,
    16,
    19,
    20,
    25,
    32,
    35,
    40,
    60,
    64,
    70,
    100,
    128,
  ],
  textStyle: {
    base: {
      fontSize: 1.25,
      lineHeight: 1.75,
    },
    lg: {
      fontSize: 1.875,
      lineHeight: 2.25,
    },
    xl: {
      fontSize: 2.25,
      lineHeight: 2.5,
    },
  },
  colors: {
    black,
    darkGray,
    lightGray,
    extraLightGray,
    white,
    lightOrange,
    extraLightBlue,
    lightBlue,
    blue,
    secondaryLight,
  },
}
