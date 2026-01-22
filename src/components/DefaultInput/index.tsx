import { forwardRef } from 'react';
import type React from 'react';
import style from './style.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
  placeHolder?: string;
} & React.ComponentProps<'input'>;

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ id, labelText, placeHolder, type, ...rest }, ref) => {
    return (
      <>
        {labelText && (
          <label htmlFor={id} className={style.labelText}>
            {labelText}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          className={style.input}
          placeholder={placeHolder}
          {...rest}
        />
      </>
    );
  },
);

DefaultInput.displayName = 'DefaultInput';
