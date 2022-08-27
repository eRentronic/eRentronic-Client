import * as S from '@/components/client/Footer/index.style';
import { PortfolioType } from '@/components/client/Footer/index.types';
import { PortFolio } from '@/components/client/Footer/PortFolio';

const portFolioLink: Array<PortfolioType> = [
  {
    name: 'JS',
    url: 'https://github.com/herrakam',
  },
  {
    name: 'Dott',
    url: 'https://github.com/godhyeongman',
  },
  { name: 'Jerry', url: 'https://github.com/jeremy0405' },
  { name: 'Riako', url: 'https://github.com/naneun' },
];

export function Footer() {
  return (
    <S.FooterWrap>
      {portFolioLink.map(el => {
        const key = el.name;
        return <PortFolio key={key} info={el} />;
      })}
    </S.FooterWrap>
  );
}
