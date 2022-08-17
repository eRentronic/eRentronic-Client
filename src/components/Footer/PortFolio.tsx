import * as S from './index.style';
import { PortfolioProps } from './index.types';

export function PortFolio({ info }: PortfolioProps) {
  function goToPortfolio(url: string) {
    window.open(url, '_blank');
  }
  const { name, url } = info;
  return (
    <S.Link
      onClick={() => {
        goToPortfolio(url);
      }}
    >
      <S.Engineer>{name}</S.Engineer>
    </S.Link>
  );
}
