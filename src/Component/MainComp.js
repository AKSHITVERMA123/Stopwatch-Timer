
// import { css } from '@emotion/react';
import { useState } from 'react';

const MainComp = (props) =>{
  <img src="C:/Users/restart/Downloads/Logo.jpg"></img>
  const [showType,setType] =useState(false);
    const changeType = () => {
    setType(!showType);
    // setType(!showCategory);
    // setType(!showName);
    // setType(!showSize);
    };

    const [showCategory,setCategory] =useState(false);
    const changeCategory = () => {
    setCategory(!showCategory);
    };
      
    const [showName,setName] =useState(false);
    const changeName = () => {
    setName(!showName);
    };

    const [showSize,setSize] =useState(false);
    const changeSize = () => {
    setSize(!showSize);
    };

    return (<div>
      
    <h2>This is Function Component</h2>
      <p> My Name is : <strong>{props.name}</strong></p>
      <p>My Post is : <strong>{props.post}</strong></p>
      <nav>
      <label>Please select Cars ..</label>
    <div class = "Type">
        <a href="#" onClick={changeType}>By Type</a>
        <a href="#" onClick={changeCategory}>By Category</a>
        <a href="#" onClick={changeName}>By Name</a>
        <a href="#" onClick={changeSize}>By Size</a>
    </div></nav>
    {showType ? (<div><br></br><select id="i1" type="text">
      <option selected="selected">Select One Option</option>
      <option>XUV</option>
      <option>SUV</option>
      <option>Range Rover</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
    </select></div>) : (<script>document.getElementById("i1").innerHTML.isVisible=false</script>)}
    {showCategory ? (<div><br></br><select id="i2" type="text">
      <option selected="selected">Select One Option</option>
      <option>Petrol</option>
      <option>Diesel</option>
      <option>Hybrid</option>
      <option>CNG</option>
      <option>Electric</option>
    </select><script>document.getElementById("i1").innerHTML.isVisible=false</script></div>) :(<br></br>
    )}
    {showName ? (<div><br></br><select id="3" type="text">
      <option selected="selected">Select One Option</option>
      <option>XUV</option>
      <option>SUV</option>
      <option>Range Rover</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
      <option>XUV</option>
    </select></div>) : (<script>document.getElementById("i2").innerHTML=""</script>)}
    {showSize ? (<div><br></br><select id="4" type="text">
      <option selected="selected">Select One Option</option>
      <option>1 - 3 meter</option>
      <option>4 - 6 meter</option>
      <option>7 - 9 meter</option>
      <option>10 or above </option>
    </select></div>) : (<script>document.getElementById("i2").innerHTML=""</script>)}
    </div>)   
   }
   
export default MainComp;