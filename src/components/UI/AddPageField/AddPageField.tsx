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
  handleClick?: () => void;
}

// export const AddPageField: FC<IAddPageFieldProps> = ({ pages }) => {
export const AddPageField: FC<IAddPageFieldProps> = () => {
  const [pages, setPages] = useState(Array<IPage>);

  // const page = {
  //   title: 'Страница 1',
  //   link: 'Ссылка 1',
  // };

  const [columnSize, setColumnSize] = useState<string>('');

  useEffect(() => {
    if (pages?.length === 0) {
      setColumnSize('xl');
    } else if (pages?.length === 1) {
      setColumnSize('md');
    } else {
      setColumnSize('sm');
    }
  }, [pages, columnSize]);

  const handleClick = (/*page: IPage*/) => {
    // console.log(page);
    const newPage: IPage = {
      title: 'Страница 1',
      link: 'Ссылка 1',
    };
    setPages((prevPages) => [...prevPages, newPage]);
  };

  return (
    <div className={cn(classes.container)}>
      <LoadPageButton
        title='Загрузить'
        size={columnSize}
        // page={page}
        // onClick={() => handleClick(page)}
        onClick={() => handleClick()}
      />
      {pages.map((page, index) => {
        return <PageButton title={page.title} size={columnSize} key={index} />;
      })}
    </div>
  );
};
