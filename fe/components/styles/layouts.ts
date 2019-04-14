import styled from "styled-components"

const baseBg = `
  background-color: #f3ef98;
`

const size = (w: string, h: string) => `
  width: ${w};
  height: ${h};
`

const pixeledFont = `
  font-family: 'Pixeled-1';
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
    ${pixeledFont};
  }
`

export const StyledHeadLine = styled.div`
  ${size("100%", "4px")};
  margin: 8px 0 12px;
  background-color: #b3ae53;
  border-top: 2px solid #98791f;
  border-bottom: 2px solid #98791f;
`

export const StyledNavigation = styled.div`
  display: flex;
  ${size("100%", "40px")};

  > .nav-item {
    display: block;
    box-sizing: border-box;
    ${size("25%", "100%")};
    font-size: 18px;
    text-indent: 16px;
    text-decoration: none;
    line-height: 40px;
    color: #d6f78c;
    border-right: 8px solid #d6f78c;
  }

  > .active {
    color: #dabe6b;
    background-color: #d6f78c;
  }
`
