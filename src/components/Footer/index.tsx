import * as S from './index.style';
import { portfolioType } from './index.types';

export function Footer() {
  const portFolioLink: portfolioType = {
    JS: 'https://github.com/herrakam',
    Dott: 'https://github.com/godhyeongman',
  };
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
          Dott
        </S.Link>
        <S.Link
          onClick={e => {
            goToPortfolio(e);
          }}
        >
          JS
        </S.Link>
      </S.Field>
      <S.Field>Back</S.Field>
    </S.FooterWrap>
  );
}
