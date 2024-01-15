import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions';
import '../../assets/stylesheets/greeting.css';

const Greeting = ({ randomMessage, fetchRandomMessage }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const fetchMessage = async () => {
      try {
        await fetchRandomMessage();
        setIsLoading(false);
      } catch (error) {
        throw new Error('Error fetching data:', error);
      }
    };

    fetchMessage();
  }, [fetchRandomMessage]);

  if (isLoading) {
    return <div class="loading">Loading...</div>;
  }

    return (
       <div class="greeting-content">
         <h1>Greeting of the day</h1>
         <p>"{randomMessage}"</p>
         <h2>Greeting changes in: 0</h2>
       </div>
     );
   };

   const mapStateToProps = (state) => {
     return {
       randomMessage: state.randomMessage,
     };
   };

   export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);
