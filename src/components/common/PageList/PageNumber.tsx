import { Container } from '../Layout/Core';
import { Text } from '../Text';

type PageNumberProps = {
  content: number | '...';
  isFocus?: boolean;
};

export function PageNumber({ content, isFocus }: PageNumberProps) {
  const showingContent = isFocus ? (
    <Text
      style={{
        borderRadius: '999px',
        backgroundColor: 'black',
        color: 'white',
        aspectRatio: '1 / 1',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {content}
    </Text>
  ) : (
    <Text>{content}</Text>
  );
  return (
    <Container justifyContent="center" alignItem="center">
      {showingContent}
    </Container>
  );
}
