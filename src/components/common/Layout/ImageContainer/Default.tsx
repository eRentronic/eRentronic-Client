import styled from 'styled-components';

import DefaultImage from '@/assets/images/defaultImage.png';
import ErrorImage from '@/assets/images/errorImage.png';

type ImageContainerProps = {
  size: 'small' | 'medium' | 'large';
  onClickImage?: React.MouseEventHandler;
  imageSrc?: string;
  alt: string;
};

const DEFAULT_PROPS: Omit<ImageContainerProps, 'onClickImage'> = {
  size: 'medium',
  alt: '이미지 설명 미설정',
};

const IMAGE_CONTAINER_SIZE = {
  length: { small: 65, medium: 125, large: 190 },
};

export function ImageContainer(props: ImageContainerProps) {
  const imageContainerProps = { ...DEFAULT_PROPS, ...props };
  const { onClickImage, imageSrc, alt } = imageContainerProps;

  const onErrorImage: React.ReactEventHandler<HTMLImageElement> = e => {
    e.currentTarget.src = ErrorImage;
  };

  const validImage = imageSrc || DefaultImage;

  return (
    <Figure {...imageContainerProps}>
      <Image
        src={validImage}
        alt={alt}
        onError={onErrorImage}
        onClick={onClickImage}
      />
    </Figure>
  );
}

const Figure = styled.figure<Pick<ImageContainerProps, 'size'>>(
  ({ size, theme }) => ({
    position: 'relative',
    width: IMAGE_CONTAINER_SIZE.length[size],
    height: IMAGE_CONTAINER_SIZE.length[size],
    backgroundColor: theme.pallete.grey5,
    borderRadius: '50%',
    margin: 0,
  }),
);

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
