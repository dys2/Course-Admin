import React from 'react';

import Routes from './Routes';
import Links from './Links';

export default function () {
  return (
    <>
      <h1>Admin</h1>
      <Content />
    </>
  )
}

const Content = () => (
  <>
    <Links />
    <Routes />
  </>
);