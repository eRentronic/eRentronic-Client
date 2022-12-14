export type CategoryProps = {
  categoryLists: { id: number; name: string }[];
  onClickCategory: () => void;
  isDisplay: boolean;
  title: string;
};

export type CategoryListProps = {
  isDisplay: boolean;
};

export type ViewMoreBtnProps = {
  isDisplay: boolean;
};
