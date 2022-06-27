import React, {useEffect, useState} from 'react';
import './App.scss';
import {orderAPI, TableItemsResponseType} from "./api/table-api";

function App() {
  const [data, setData] = useState<TableItemsResponseType[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    orderAPI.getOrder()
        .then((res) => {
          setTimeout(() => {
            setData(res.data)
            setLoading(false)
          }, 1000)
        })
  },[])
  if (loading) {
    return <div>
      LOADING....
    </div>
  }
  return (
    <div>
      {data.map(d => {
        return <div key={d.id}>
          {d.created_user.name}
          {d.created_user.surname}
        </div>
      })}
    </div>
  );
}

export default App;
