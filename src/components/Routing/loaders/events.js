const fetchEventsData = async () => {
  const response = await fetch('http://localhost:4200/events');

      if (!response.ok) {
        //...
      } else {
        const respData = await response.json();
        return respData.events;
      }
};

export default fetchEventsData;