import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  fallback: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('에러 바운더리 에서 에러발생!:', error.name);
    console.log(info);
  }

  render() {
    const {
      state: { hasError },
      props: { fallback, children },
    } = this;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}
