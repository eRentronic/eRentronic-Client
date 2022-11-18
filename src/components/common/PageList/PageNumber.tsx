import styled from 'styled-components';

import { Container } from '../Layout/Core';
import { Text } from '../Text';

type PageNumberProps = {
  content: number | '...';
  isFocus?: boolean;
  onClickPageNumber?: (num: number) => () => void;
};

export function PageNumber({
  content,
  isFocus,
  onClickPageNumber,
}: PageNumberProps) {
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
  if (onClickPageNumber && content !== '...')
    return (
      <Container justifyContent="center" alignItem="center">
        <EventContainer onClick={onClickPageNumber(content)}>
          {showingContent}
        </EventContainer>
      </Container>
    );
  return <Container>{showingContent}</Container>;
}
const EventContainer = styled.div`
  width: 100%;
  height: 100%;
`;
