import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAppSelector } from '../../hooks/useTypedSelector';

type CalcButtonProps = {
  action: string;
  onClick?: () => void;
  classes?: string;
};

const CalcButton: FC<CalcButtonProps> = ({ action, onClick, classes }) => {
  const { isRunning } = useAppSelector((state) => state.calc);
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(`max-w-[72px] min-w-[52px] min-h-[48px] w-full flex items-center justify-center
                 border border-gray-200 rounded-md hover:border-blue-500 active:bg-blue-500 active:text-white transition-all duration-500 ${
                   classes ?? ``
                 } ${isRunning ? '' : 'pointer-events-none'}`)}
    >
      {action}
    </button>
  );
};

export default CalcButton;
