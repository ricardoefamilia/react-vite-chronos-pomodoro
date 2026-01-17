import type React from 'react';
import style from './style.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
  placeHolder?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelText,
  placeHolder,
  type,
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor='meuInput' className={style.labelText}>
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={style.input}
        placeholder={placeHolder}
      />
    </>
  );
}
