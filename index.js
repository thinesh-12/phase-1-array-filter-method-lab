function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
  }
  
  function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
  }
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  
  
  const driverObjects = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Sarah", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Tampa Bay" },
  ];
  
  console.log(findMatching(drivers, "Sa"));
  console.log(fuzzyMatch(drivers, "Sa")); 
  console.log(matchName(driverObjects, "Bobby")); 
  
  
