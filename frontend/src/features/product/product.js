import List from "./component/List";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Grid} from '@mui/material'

export default function ProductPage() {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')

   useEffect(() => {
     fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(
      result => {
        setIsLoading(false);
        setData(result.results)
      },
      error => {
        setIsLoading(false);
        setError(error)
      }
    )
  },[])

  if(isLoading){
    return<div>Loading....</div>;
  }
  else if(error){
    return <div>There is an error fetching data</div>
  }
  else{

  return (
<Grid container spacing={2}>
  {
    data.map(item => (
      <List
      key = {item.id.value}
      userAvatar = {item.picture.large}
      name = {item.name.first} />
    ))
  }
 </Grid>
  
  );
  }
}
