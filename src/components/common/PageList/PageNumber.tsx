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
    <Text typography="Bold">{content}</Text>
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
  return (
    <Container>
      <EventContainer>{showingContent}</EventContainer>
    </Container>
  );
}
const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
