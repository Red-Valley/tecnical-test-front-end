import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  FallbackComponent: React.ComponentType<{ onReset: () => void }>;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  handleReset() {
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    const { children, FallbackComponent } = this.props;

    if (error) {
      return <FallbackComponent onReset={this.handleReset} />;
    }

    return children;
  }
}
