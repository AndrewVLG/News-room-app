import { FunctionComponent } from "react";
import { CategoryBtn } from "../../../shared/config/types";
import { useUIComponents } from "../../../shared/hooks/use-ui-components";

const CategoryButton: FunctionComponent<CategoryBtn> = ({ href, text }) => {
  const { CatButton, CatLink } = useUIComponents();
  return (
    <CatButton>
      <CatLink href={href}>{text}</CatLink>
    </CatButton>
  );
};
export default CategoryButton;
