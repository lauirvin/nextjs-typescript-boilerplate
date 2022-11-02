import { useRouter } from 'next/router';
import React from 'react';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Details: {id}</div>;
};

export default Details;
