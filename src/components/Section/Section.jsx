import { Box } from '../Box';

export function Section({ title, children }) {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
}
