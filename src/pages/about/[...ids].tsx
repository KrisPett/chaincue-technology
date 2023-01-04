import React from 'react';
import {useRouter} from "next/router";

const Ids = () => {
  const router = useRouter()

  const ids = (router.query.ids as string[]) || []
  const name = (router.query.name as string)

  return (
    <div>
      {ids.map(i => {
        return <div key={i}>{i}</div>
      })}
      Slug
      name: {name}
    </div>
  )
}

export default Ids;
