import { Container } from '../Layout/Core';
import { Text } from '../Text';

type PageNumberProps = {
  content: number | '...';
};

export function PageNumber({ content }: PageNumberProps) {
  return (
    <Container justifyContent="center" alignItem="center">
      <Text>{content}</Text>
    </Container>
  );
}
