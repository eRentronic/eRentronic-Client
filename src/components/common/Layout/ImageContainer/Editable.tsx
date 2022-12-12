import styled from 'styled-components';

import DefaultImage from '@/assets/images/defaultImage.png';
import ErrorImage from '@/assets/images/errorImage.png';
import { Icon } from '@/components/common/Icon';

type EditableContainerProps = {
  size: 'small' | 'medium' | 'large';
  onClickImage?: React.MouseEventHandler;
  onChangeEdit?: React.ChangeEventHandler;
  imageSrc?: string;
  alt: string;
};

const DEFAULT_PROPS: Omit<
  EditableContainerProps,
  'onClickImage' | 'onClickEdit'
> = {
  size: 'medium',
  alt: '수정 가능 이미지',
};

const IMAGE_CONTAINER_SIZE = {
  length: { small: 65, medium: 125, large: 190 },
};

export function EditableImageContainer(props: EditableContainerProps) {
  const imageContainerProps = { ...DEFAULT_PROPS, ...props };
  const { onClickImage, onChangeEdit, imageSrc, alt } = imageContainerProps;

  const onErrorImage: React.ReactEventHandler<HTMLImageElement> = e => {
    e.currentTarget.src = ErrorImage;
  };

  const validImage = imageSrc || DefaultImage;

  return (
    <Figure {...imageContainerProps}>
      <IconWrapper>
        <FileInput type="file" id="imageFile" onChange={onChangeEdit} />
        <StyledLabel htmlFor="imageFile">
          <StyledIcon iconSrc="EDIT" width={12} height={12} />
        </StyledLabel>
      </IconWrapper>
      <Image
        src={validImage}
        alt={alt}
        onError={onErrorImage}
        onClick={onClickImage}
      />
    </Figure>
  );
}

const Figure = styled.figure<Pick<EditableContainerProps, 'size'>>(
  ({ size, theme }) => ({
    position: 'relative',
    width: IMAGE_CONTAINER_SIZE.length[size],
    height: IMAGE_CONTAINER_SIZE.length[size],
    backgroundColor: theme.pallete.grey5,
    borderRadius: '50%',
  }),
);

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: -6px;
  top: -6px;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  fill: ${({ theme }) => theme.pallete.grey4};
`;

const FileInput = styled.input`
  display: none;
`;

//* * 아래는 수정 버튼을 클릭했을때 이미지가 변하는 동작을 테스트겸 간단하게 구현한것 입니다.*/
// const [imageSrc, setImageSrc] = useState<string | ArrayBuffer>();

// const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { target } = e;
//   const data = target.files![0];
//   const reader = new FileReader();
//   reader.onload = inputReader => {
//     const { target: readerTarget } = inputReader;
//     setImageSrc(readerTarget.result);
//   };
//   reader.readAsDataURL(data);
// };
