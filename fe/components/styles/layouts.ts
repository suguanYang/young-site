import styled from "styled-components"

const baseBg = `
  background-color: #f3ef98;
`

const size = (w: string, h: string) => `
  width: ${w};
  height: ${h};
`

const shadowBorder = `
  border-top: 2px solid #98791f;
  border-bottom: 2px solid #98791f;
`

const fontCentered = (lineHeight: number) => `
  text-align: center;
  line-height: ${lineHeight}px;
`

export const StyledHeader = styled.div`
  width: 100%;
  height: 40px;
  ${fontCentered(40)};
  ${baseBg};
  border-top: 2px solid #99b455;
  border-bottom: 2px solid #af8344;

  > .title {
    font-size: 18px;
    color: #bfb754;
  }
`

export const StyledHeadLine = styled.div`
  ${size("100%", "4px")};
  margin: 8px 0 12px;
  background-color: #b3ae53;
  ${shadowBorder};
`

export const StyledNavigation = styled.div`
  display: flex;
  ${size("100%", "40px")};

  > .nav-item {
    display: block;
    box-sizing: border-box;
    ${size("25%", "100%")};
    font-size: 18px;
    font-weight: 600;
    text-indent: 16px;
    text-decoration: none;
    line-height: 40px;
    color: #d6f78c;
    border-right: 8px solid #d6f78c;
    ${shadowBorder};
  }

  > .active {
    color: #bfb754;
    background-color: #d6f78c;
  }
`

export const FooterLine = styled.div`
  display: flex;
  margin-top: 30px;
  ${size("100%", "4px")};
  justify-content: space-between;

  > .footerline-item {
    ${size("1.3%", "4px")};
    background-color: #d6db8b;
  }
`
