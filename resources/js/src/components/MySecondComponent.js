import React from 'react';

export default function MySecondComponent(props) {
  const title = props.title ?? 'Title prop was left blank'

  return (
    <>
        <h2>{title}</h2>
    </>
  );
}
