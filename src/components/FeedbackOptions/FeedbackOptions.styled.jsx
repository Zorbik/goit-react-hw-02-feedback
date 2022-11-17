import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${p => p.theme.colors.lightBlue};
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.button};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.blue};
  margin: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.none};
`;
