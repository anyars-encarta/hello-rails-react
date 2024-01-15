import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions';

const Greeting = ({ randomMessage, fetchRandomMessage }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Greeting component mounted. Fetching random message...');
    
     const fetchMessage = async () => {
      try {
        await fetchRandomMessage();
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching random message:', error);
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, [fetchRandomMessage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

    return (
       <div>
         <h1>API Responded</h1>
         <p>{randomMessage}</p>
       </div>
     );
   };

   const mapStateToProps = (state) => {
     return {
       randomMessage: state.randomMessage,
     };
   };

   export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);
