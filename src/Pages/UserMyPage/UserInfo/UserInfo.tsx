import { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import '@/styles/quillStyle.css';
import { UserInput } from '@/components/common/Input/User';
import { Box } from '@/components/common/Layout/Box';
import { Container } from '@/components/common/Layout/Core';
import { EditableImageContainer } from '@/components/common/Layout/ImageContainer/Editable';

export function UserInfo() {
  const [value, setValue] = useState<string>();
  const imgSrc = 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E';

  return (
    <Box
      size="medium"
      borderWeight={3}
      boxColor="normalBg"
      borderColor="primary"
      flexDirection="column"
      justifyContent="center"
      gap={10}
    >
      <Container gap={10} styles={{ width: '100%' }}>
        <EditableImageContainer
          imageSrc={imgSrc}
          size="medium"
          alt="회원 이미지"
        />
        <Container
          flexDirection="column"
          gap={5}
          justifyContent="center"
          styles={{ width: '80%' }}
        >
          <UserInput iconSrc="EMAIL" size="small" />
          <UserInput iconSrc="KEY" size="small" />
          <UserInput iconSrc="ADDRESS" size="small" />
          <UserInput iconSrc="ADDRESS" size="small" />
        </Container>
      </Container>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Box>
  );
}
