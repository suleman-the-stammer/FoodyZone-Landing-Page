import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'

export const BASE_URL = "http://localhost:9000";



const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [FilterData, setFilterData] = useState(null);
  const [SelectBtn , setSelectBtn] = useState();

 
 
  useEffect(() => {
    const FetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilterData(json);
        setData(json);
        setLoading(false);

      } catch (error) {
        setError("Unable to Fetch Data Please Try Again");
      }

    }
    FetchFoodData();
  }, []) // Throw [] this brackets your useEffect will run one time 
 
  const searchData = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "null") {
      setFilterData = "null";
    }

    const filter = data?.filter((data) => data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) =>{
   
    if (type == "all") {
      setFilterData(data);
      setSelectBtn("all");
      return;
      
    }
    const filter = data?.filter((data) => data.type.toLowerCase().includes(type.toLowerCase()));
    setFilterData(filter);
    setSelectBtn(type);  

  }
  

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading......</div>

  return (
    <div>
      <Navbar searchData={searchData} filterFood={filterFood} />
      <Content data={FilterData}  />
    </div>
  )
}

export default App
