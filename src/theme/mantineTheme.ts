import { MantineThemeOverride } from '@mantine/core';
import variable from "./variables";

const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: variable.primaryColor,
  headings: {
    fontFamily: variable.fontFamily,
    fontWeight: variable.fontWeightLight,
    sizes: {
      h1: {
        fontSize: variable.fontSizeH1,
        lineHeight: "1.21428571",
      },
      h2: {
        fontSize: variable.fontSizeH2,
        lineHeight: "1.21153846",
      },
      h3: {
        fontSize: variable.fontSizeH3,
        lineHeight: "1.20833333",
      },
      h4: {
        fontSize: variable.fontSizeH4,
        lineHeight: variable.lineHeightLarge,
      },
      h5: {
        fontSize: variable.fontSizeH5,
        lineHeight: variable.lineHeightLarge,
      },
      h6: {
        fontSize: variable.fontSizeH6,
        lineHeight: variable.lineHeightLarge,
      },
    },
  },
  fontFamily: variable.fontFamily,
  fontSizes: {
    xs: variable.fontSizeXs,
    sm: variable.fontSizeSm,
    md: variable.fontSizeMd,
    lg: variable.fontSizeLg,
    xl: variable.fontSizeXl,
  },
  spacing: {
    xs: variable.spacingXs,
    sm: variable.spacingSm,
    md: variable.spacingMd,
    lg: variable.spacingLg,
    xl: variable.spacingXl,
  },
  breakpoints: {
    xs: variable.breakpointXs,
    sm: variable.breakpointSm,
    md: variable.breakpointMd,
    lg: variable.breakpointLg,
    xl: variable.breakpointXl,
  },
  other:{
    checkBoxScale:variable.checkBoxScale,
    checkBoxLabelLeft:variable.checkBoxLabelLeft
  },
  globalStyles:(theme)=>({
    body:{
      '.mantine-Checkbox-label':{
        paddingLeft:`${variable.lablePaddingLeft}px`
      },
      '.mantine-Checkbox-inner':{
        transform:`scale(${variable.scaleNum})`,
        transformOrigin:'left'
      },
      '.mantine-Radio-label':{
        paddingLeft:`${variable.lablePaddingLeft}px`
      },
      '.mantine-Radio-inner':{
        transform:`scale(${variable.scaleNum})`,
        transformOrigin:'left'
      },
      '.mantine-Tooltip-tooltip': {
        padding: '20px',
        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.08), 0 4px 4px 0 rgba(0,0,0,0.02)",
        backgroundColor: variable.white,
        color: variable.black,
        letterSpacing: "0.15px",
        fontSize: variable.fontSizeBase,
      },
      '.horizontal': {
        zIndex: 1,
        display: "flex",
        alignItems: "flex-start",
        ".horizontal-center": {
          flex: 1,
        },
        '.horizontal-right': {
          width: "50%",
        },
        '.mantine-InputWrapper-root': {
          marginTop: 0,
        }
      }
    }
  })
  
};

export default mantineTheme;