import React from 'react';
import '../App.css';


function InfoSnippet() {
  return (
       <div id="info" className="centered">
       <h2>Hi! I'm Nathan. Right now I'm in: <a href="https://www.a2gov.org/Pages/default.aspx" target="_blank" color="green" className="link">Ann Arbor</a></h2> 
       <h3> I'm a senior at the <a href="https://www.eecs.umich.edu/" target="_blank" className="link">University of Michigan and soon to be graduate student</a> </h3>
        <h3>Say hello at: <a href="mailto:nychong@umich.edu" className="link">nychong@umich.edu</a>!</h3>
      
       </div>
  )
}

export default InfoSnippet;