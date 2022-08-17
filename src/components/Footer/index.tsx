import * as S from './index.style';
import { portfolioType } from './index.types';
import { Text } from '../common';

const portFolioLink: portfolioType = {
  JS: 'https://github.com/herrakam',
  Dott: 'https://github.com/godhyeongman',
  Jerry: 'https://github.com/jeremy0405',
  Riako: 'https://github.com/naneun',
};

export function Footer() {
  const goToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    let link: string = '';
    switch (e.currentTarget.textContent) {
      case 'Dott':
        link = portFolioLink.Dott;
        break;
      case 'JS':
        link = portFolioLink.JS;
        break;
      default:
        console.log('유효하지 않은 제작자');
    }
    window.open(link, '_blank');
  };
  return (
    <S.FooterWrap>
      <S.Field>
        Front
        <S.Link
          onClick={e => {
            goToPortfolio(e);
          }}
        >
          <S.Engineer>Dott</S.Engineer>
        </S.Link>
        <S.Link
          onClick={e => {
            goToPortfolio(e);
          }}
        >
          <S.Engineer>JS</S.Engineer>
        </S.Link>
      </S.Field>
      <S.Field>
        Back
        <S.Link
          onClick={e => {
            goToPortfolio(e);
          }}
        >
          <S.Engineer>Jerry</S.Engineer>
        </S.Link>
        <S.Link
          onClick={e => {
            goToPortfolio(e);
          }}
        >
          <S.Engineer>Riako</S.Engineer>
        </S.Link>
      </S.Field>
    </S.FooterWrap>
  );
}
