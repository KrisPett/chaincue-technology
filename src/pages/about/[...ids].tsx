import React from 'react';
import {useRouter} from "next/router";

const Ids = () => {
  const router = useRouter()
  const slug = (router.query.ids as string[]) || []

  return (
    <div>
      {slug.map(i => {
        return <div key={i}>{i}</div>
      })}
      Slug
    </div>
  );
};

export default Ids;
