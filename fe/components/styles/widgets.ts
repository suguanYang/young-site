import styled from "styled-components"

export const HomeTitleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 28px;
  margin-top: 30px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  color: #f9e992;
  line-height: 28px;

  > div {
    display: flex;
  }
`

export const StyledArrow = styled.div<{
  left?: boolean,
  right?: boolean,
}>`
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  ${props => props.left ? "border-left: 24px solid #dabe6b" : ""};
  ${props => props.right ? "border-right: 24px solid #dabe6b" : ""};
`
