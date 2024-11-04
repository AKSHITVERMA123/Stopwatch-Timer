import React, { useState } from "react";
import SUZUKIComp from "./SUZUKIComp";
const ParentComponent = ({ component }) => {
    // Dynamically call the component based on the 'component' prop
    const onSearch = () =>{
        document.write(query.replace( <SUZUKIComp/>));

    }
    const DynamicComponent = component;
    const [query,setQuery] = useState('');
    const handleInputChange= (event)=>{
      setQuery(event.target.value);
    };
    const handleSubmit = (event) =>{
      event.preventDefault();
      onSearch(query);
    };
    return (
        
        <div style={{ display: "inline-flex" }}>
          {/* <input type='text' width={"400px"} height={"200px"} placeholder='Enter Your best cars name'></input> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>  <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="CarInfo"
              placeholder="Search your car name here"
              name="search"
              value={query}
              style={{ width: "560px", height: "45px", marginTop: "50px" }}
              onChange={handleInputChange}
            ></input>{" "}
            <div className="search-container">
            
              <button
                id="Search"
                style={{ height: "45px" }}
                title="Search"
                type="submit"
                value="Search"
                classname="o-bXKmQE o-cWRslo o-eZTujG o-bkmzIL o-dqrENu o-duzCJV o-bWgajq">
                <svg
                  class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bfWOPh o-bJvRsk o-fznJFh o-cpnuEd o-cpNAVm"
                  viewBox="0 -1 16 16"
                  fill="currentcolor"
                  tabindex="-1"
                  focusable="false"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M6.55 13.05a6.5 6.5 0 116.5-6.5 6.42 6.42 0 01-6.5 6.5zm0-12a5.5 5.5 0 000 11 5.43 5.43 0 005.5-5.5 5.51 5.51 0 00-5.5-5.5zm9.13 14.64a.54.54 0 000-.78l-4.14-4.14s-.19.22-.41.43-.37.35-.37.35l4.14 4.14a.56.56 0 00.78 0z"></path>
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              {/* <i class='bx bx-search' ></i> */}
            </div>
            <h2>Parent Component</h2>
          {/* Render the dynamically called component */}
          <DynamicComponent />
            </form>
          </div>
          </div>
    );
}

export const ComponentA = () => <div>Component A</div>;
export const ComponentB = () => <div>Component B</div>;
export default  ParentComponent;