import { useEffect, useState } from 'react';

type Props = {
  onInterSect: IntersectionObserverCallback;
} & IntersectionObserverInit;

export function useInterSectionObserver({
  root = null,
  threshold = 1,
  rootMargin = '0px',
  onInterSect,
}: Props) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(onInterSect, {
      root,
      threshold,
      rootMargin,
    });

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [onInterSect, target]);

  return setTarget;
}
