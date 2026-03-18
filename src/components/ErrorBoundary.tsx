import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from "./SpinnerFullPage.module.css";
import Button from "./Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.spinnerFullpage} style={{ flexDirection: "column", gap: "2rem" }}>
          <h1 style={{ color: "#fff" }}>Something went wrong.</h1>
          <Button type="primary" onClick={() => window.location.assign("/")}>
            Return Home
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
