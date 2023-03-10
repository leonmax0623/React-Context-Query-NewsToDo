import React, { memo } from 'react';
import cn from 'classnames';

import { ButtonContainer } from './styles';

const Button = memo(({ children, ...rest }) => {
  return (
    <ButtonContainer disableRipple className={cn('button')} {...rest}>
      {children}
    </ButtonContainer>
  );
});

export default Button;
