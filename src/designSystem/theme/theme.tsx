import { theme } from 'antd'
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin'],
})

export const Theme = {
  algorithm: theme.darkAlgorithm,
  token: {
    // Colors
    colorPrimary: '#3366ff',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorTextBase: '#f5f5f5',
    colorLink: '#3366ff',
    colorBgBase: '#141414',
    colorBgContainer: '#1f1f1f',
    colorBorder: '#303030',
    colorBorderSecondary: '#404040',
    colorSplit: 'rgba(255, 255, 255, 0.12)',

    // Typography
    fontFamily: `${interFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
    fontSize: 16,
    fontSizeHeading1: 40,
    fontSizeHeading2: 32,
    fontSizeHeading3: 26,
    fontSizeHeading4: 22,
    fontSizeHeading5: 18,
    linkDecoration: 'none',

    //Form
    controlItemBgActive: '#303030',
    controlOutline: 'rgba(255, 255, 255, 0.2)',
    controlHeight: 40,
    controlHeightSM: 36,

    // Layout
    padding: 20,
    boxShadow:
      '0 8px 24px 0 rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.15), 0 12px 32px 12px rgba(0, 0, 0, 0.08)',

    borderRadius: 8,
    lineType: 'solid',
    lineWidth: 1,
    motion: true,
  },
  components: {
    Form: {
      itemMarginBottom: '24px',
    },
    Layout: {
      headerBg: '#141414',
      footerBg: '#141414',
      bodyBg: '#141414',
      siderBg: '#1f1f1f',
    },
    Menu: {
      activeBarBorderWidth: 2,
      itemHeight: 36,
      //topbar menu items
      horizontalItemSelectedColor: '#3366ff',
      horizontalItemSelectedBg: 'rgba(51, 102, 255, 0.1)',
      //leftbar menu items
      itemSelectedColor: '#3366ff',
      itemSelectedBg: 'rgba(51, 102, 255, 0.1)',
      itemActiveBg: 'rgba(51, 102, 255, 0.05)',
      //topbar and leftbar menu items
      itemHoverColor: '#3366ff',
      itemHoverBg: 'rgba(51, 102, 255, 0.05)',
      itemColor: '#a0a0a0',
      itemBg: 'transparent',
      iconMarginInlineEnd: 10,
      iconSize: 18,
    },
    Button: {
      paddingInlineSM: 12,
      colorTextLightSolid: '#141414',
      primaryColor: '#3366ff',
      fontWeight: 600,
      borderRadius: 6,
      boxShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
    },
    Card: {
      borderRadius: 8,
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
  },
}
