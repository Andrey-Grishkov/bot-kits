import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import classes from './AddPageField.module.scss';
import { LoadPageButton } from '../LoadPageButton/LoadPageButton';
import { PageButton } from '../PageButton/PageButton';

export interface IPage {
  title: string;
  link?: string;
}

export interface IAddPageFieldProps {
  pages: Array<IPage>;
}

export const AddPageField: FC<IAddPageFieldProps> = ({ pages }) => {

  const [columnSize, setColumnSize] = useState<string>('');

  useEffect(() => {
    if (pages?.length === 0) {
      setColumnSize('xl');
    } else if (pages?.length === 1) {
      setColumnSize('md');
    } else {
      setColumnSize('sm');
    }
  });

  return (
    <div className={cn(classes.container)}>
      <LoadPageButton title='Загрузить' size={columnSize} />
      {pages.map((page, index) => {
        return <PageButton title={page.title} size={columnSize} />
      })}
    </div>
  );
};
