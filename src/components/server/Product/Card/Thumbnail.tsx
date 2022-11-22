import * as S from '@/components/server/Product/Card/Thumbnail.style';

type ThumbnailProps = {
  imageUrl: string;
};

export function Thumbnail({ imageUrl }: ThumbnailProps) {
  return (
    <S.ThumbnailContainer>
      <S.Thumbnail alt="제품 썸네일" src={imageUrl} />
    </S.ThumbnailContainer>
  );
}
