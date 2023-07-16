import React, { useEffect } from "react";
import Layout from "../../../Layouts";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../Features/products/productSlice";

const Screen: React.FC = () => {
  const dispatch: ThunkDispatch<{}, unknown, any> = useDispatch();

   const { data, error } = useSelector((state:any) => state.products);
  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[dispatch])

    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    
    <>
    <p>hi foola </p>
        {data.map((el:any,i:number)=>{
          return <div key={i}>{el.title}</div>
        })}
    </>
  );
};

const HomePage = () => {

  const { loading } = useSelector((store: any) => store.products);
  const layout = "full";
  return <Layout layout={layout} component={Screen} state={loading} />;
};

export default HomePage;
