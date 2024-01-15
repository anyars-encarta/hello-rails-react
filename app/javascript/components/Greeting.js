import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions';
import '../../assets/stylesheets/greeting.css';

const Greeting = ({ randomMessage, fetchRandomMessage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(10);

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

  useEffect(() => {
    if (countdown === 0) {
      // Fetch new random message and reset countdown
      fetchRandomMessage();
      setCountdown(10);
    } else {
      // Decrease countdown every second
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);

      // Clear the timer when component unmounts
      return () => clearTimeout(timer);
    }
  }, [countdown, fetchRandomMessage]);

  if (isLoading) {
    return <div class="loading">Loading...</div>;
  }

    return (
       <div class="greeting-content">
         <h1>Greeting of the day</h1>
         <p>"{randomMessage}"</p>
         <h2>Greeting changes in: {countdown}</h2>
       </div>
     );
   };

   const mapStateToProps = (state) => {
     return {
       randomMessage: state.randomMessage,
     };
   };

   export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);
