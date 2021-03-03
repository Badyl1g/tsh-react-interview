export interface IErrorMessageProps {
  //   icon?: SVGSVGElement;
  icon?: React.SVGProps<SVGSVGElement>;
  error: {
    title: string;
    description?: string;
  };
}
