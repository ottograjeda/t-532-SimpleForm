import React from 'react';

import './style.css';
import Newsletter from '../../components/Newsletter';
 
const ValueProp = (props) => (
  <section className="vp" style={{alignItems:"center", justifyContent:"center"}} >
        <h1>  I want it !</h1>
        <h2>Give me access<br />to exclusive deals !!</h2> <br />
        <Newsletter />
    {/* if needed for form feedback, overlay div goes here */}
  </section>
///
)

export default ValueProp
