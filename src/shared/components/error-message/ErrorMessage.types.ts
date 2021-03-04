export interface IErrorMessageProps {
  icon?: React.SVGProps<SVGSVGElement>;
  error: {
    title: string;
    description?: string;
  };
}
