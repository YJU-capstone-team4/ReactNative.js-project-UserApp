import { scaleFont } from './mixins'

// FONT FAMILY
export const FONT_FAMILY_BOLD = 'NanumSquare_acBold'
export const FONT_FAMILY_EXTRA_BOLD = 'NanumSquare_acExtraBold'
export const FONT_FAMILY_LIGHT = 'NanumSquare_acLight'
export const FONT_FAMILY_REGULAR = 'NanumSquare_acRegular'

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400'
export const FONT_WEIGHT_BOLD = '700'

// FONT SIZE
export const FONT_SIZE_22 = scaleFont(22)
export const FONT_SIZE_20 = scaleFont(20)
export const FONT_SIZE_18 = scaleFont(18)
export const FONT_SIZE_16 = scaleFont(16)
export const FONT_SIZE_14 = scaleFont(14)
export const FONT_SIZE_12 = scaleFont(12)
// export const FONT_SIZE_22 = scaleFont(20)
// export const FONT_SIZE_20 = scaleFont(18)
// export const FONT_SIZE_18 = scaleFont(16)
// export const FONT_SIZE_16 = scaleFont(14)
// export const FONT_SIZE_14 = scaleFont(12)
// export const FONT_SIZE_12 = scaleFont(10)

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24)
export const LINE_HEIGHT_20 = scaleFont(20)
export const LINE_HEIGHT_16 = scaleFont(16)

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
}

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
}
