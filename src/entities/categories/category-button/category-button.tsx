import { FunctionComponent } from 'react';
import { ButtonBase, styled } from "@mui/material";
import { ICategoryButton } from './config/types';
const CatButton = styled(ButtonBase)({
    height: '40px',
    width: '160px',
    /**marginLeft: '50px', **/
    '&:hover': {
        backgroundColor: '#FF1E0C',
        borderRadius: '2px',
        textShadow: 'black 1px 0 3px',
    }
})
const CatLink = styled('a')({
    color: 'white',
    fontSize: '16px',
    textDecorationLine: 'none',
})
const CategoryButton: FunctionComponent<ICategoryButton> = ({ href, text }) => {

  return (
    <>
      <CatButton>
        <CatLink href={href}>{text}</CatLink>
      </CatButton>

    </>
  )
};
export default CategoryButton;