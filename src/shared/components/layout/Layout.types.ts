import { ReactChildren } from 'react';

export interface ILayoutProps {
  noHeader?: boolean;
  renderHeaderContent?: () => JSX.Element;
}
