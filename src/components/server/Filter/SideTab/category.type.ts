export type CategoryProps = {
  categoryLists: { id: number; name: string }[];
  onClickTitle: () => void;
  onClickViewMoreButton: () => void;
  view: { viewMore: boolean; popUp: boolean };
  title: string;
};

export type CategoryListProps = {
  isDisplay: boolean;
};

export type ViewMoreBtnProps = {
  isDisplay: boolean;
};
