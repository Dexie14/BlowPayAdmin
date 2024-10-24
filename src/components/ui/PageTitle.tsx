import { TitleProps } from "../auth/AuthTitle";

const PageTitle = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <h5 className="text-xl font-semibold mb-3">{title}</h5>
      <p className="text-sm text-blueGray">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
