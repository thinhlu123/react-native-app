const FontBold = {
    fontFamily: 'Roboto-Bold'
}

const FontMedium = {
    fontFamily: 'Roboto-Medium'
}

const FontRegular = {
    fontFamily: 'Roboto-Regular'
}

const FontRegularItalic = {
    fontFamily: 'Roboto-RegularItalic'
}

const FontBoldItalic = {
    fontFamily: 'Roboto-BoldItalic'
}

let Styles = {
}

Styles.Fonts= {
    fontBold: {
        ...FontBold
    },
    fontMedium: {
        ...FontMedium
    },
    fontRegular: {
        ...FontRegular
    },
    fontRegularItalic: {
        ...FontRegularItalic
    },
    fontBoldItalic: {
        ...FontBoldItalic
    }
}

Styles.fontStyle = {
  normal: 'normal',
  medium: 'medium',
  large: 'large'
}
Styles.scale = {
  [Styles.fontStyle.normal]: (size) => size,
  [Styles.fontStyle.medium]: (size) => size +2,
  [Styles.fontStyle.large]: (size) => size + 4
}

export default Styles;
