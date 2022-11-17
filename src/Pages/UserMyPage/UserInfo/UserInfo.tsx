import { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import '@/styles/test.css';
import { UserInput } from '@/components/common/Input/User';
import { Box } from '@/components/common/Layout/Box';
import { Container } from '@/components/common/Layout/Core';
import { EditableImageContainer } from '@/components/common/Layout/ImageContainer/Editable';

export function UserInfo() {
  const [value, setValue] = useState();

  console.log(value, typeof value);
  return (
    <Box
      size="medium"
      borderWeight="3px"
      boxColor="white"
      borderColor="primary"
      flexDirection="column"
    >
      <EditableImageContainer size="medium" />
      <Container style={{ width: '500px' }} flexDirection="column" gap={5}>
        <UserInput />
        <UserInput />
        <UserInput />
        <UserInput />
      </Container>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Box>
  );
}
