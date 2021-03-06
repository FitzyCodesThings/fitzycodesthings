// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  socialImage?: string
};

const Content = ({ body, title, socialImage }: Props) => (
  <div className={styles['content']}>
    {(typeof socialImage === 'string' && socialImage.trim() !== '') ? <img src={socialImage} /> : null}
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
