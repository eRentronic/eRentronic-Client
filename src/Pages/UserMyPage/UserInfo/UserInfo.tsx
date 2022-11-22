import { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import '@/styles/test.css';
import { UserInput } from '@/components/common/Input/User';
import { Box } from '@/components/common/Layout/Box';
import { Container } from '@/components/common/Layout/Core';
import { EditableImageContainer } from '@/components/common/Layout/ImageContainer/Editable';

export function UserInfo() {
  const [value, setValue] = useState<string>();

  return (
    <Box
      size="medium"
      borderWeight={3}
      boxColor="white"
      borderColor="primary"
      flexDirection="column"
      styles={{ width: '600px' }}
      gap={10}
    >
      <Container gap={10}>
        <EditableImageContainer size="medium" />
        <Container flexDirection="column" gap={5} justifyContent="center">
          <UserInput iconSrc="EMAIL" />
          <UserInput iconSrc="KEY" />
          <UserInput iconSrc="ADDRESS" />
          <UserInput iconSrc="ADDRESS" />
        </Container>
      </Container>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Box>
  );
}
