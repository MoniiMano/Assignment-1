 All the coding will be Uploaded in the src folder. I will explain one by one,
 
1. App.js:
            This component will be imported into the <PlanetsDirectory/> .

2. PlanetsDirectory.js:

      !IMPORTS!

              In  React, useState, and useEffect are imported from the 'react' library. Additionally, the PlanetCard component is imported from a local file named 'PlanetCard'.

      !State Management!
                      Two state variables are initialized using the useState hook. planets will hold an array of planet data fetched from the API, and nextPage will hold the URL for the 
       next page of planet data.

     !Fetching Data with useEffect!
            The useEffect hook is used here to perform side effects. In this case, it fetches the list of planets from the SWAPI when the component mounts. It only runs once 
       because of the empty dependency array ([]) as the second argument.

    !Fetching Next Page!
              This function(fetchNextPage) fetches the next page of planet data when called. It appends the new results to the existing planets array.

    !Rendering!
              1. Use maps through the planets array and renders a PlanetCard component for each planet.
              2. If nextPage exists (indicating there are more pages of data available), a button is rendered. When clicked, it calls fetchNextPage to fetch and display the next page of planet data.

      !Exporting Component!
                 The PlanetsDirectory component is exported as the default export of this module, making it available for use elsewhere in the application.

3.PlanetCard.js:
     This code defines a React functional component named PlanetCard that represents a card displaying information about a planet, including its name, climate, population, terrain, and a list of residents. Let's break down the code:
    
    *IMPORTS*
                This imports the useState and useEffect hooks from the React library. These hooks are used for managing state and performing side effects within functional components.

     *Component Definition*
            This declares the PlanetCard component, which takes a planet object as a prop. This object contains information about a specific planet.

    *State Management*
            This useState line initializes a state variable residents using the useState hook. It will hold an array of resident data for the current planet.

    *Fetching Resident Data with useEffect*
             The useEffect hook is used here to fetch data about the residents of the current planet when the component mounts or when the planet.residents prop changes. It 
    uses Promise.all to fetch resident data for each resident URL concurrently.

     *Rendering*
              1. This part of the code returns JSX elements representing the planet card.
             2. It displays the planet's name, climate, population, and terrain.
             3. It renders a list of residents fetched from the API, displaying their name, height, mass, and gender.

    *Exporting Component*
           This exports the PlanetCard component as the default export of the module, making it available for use elsewhere in the application.
4.App.css:
          Now we use the style format for all the components that displayed on  App.css .
                                    *******************************************
     Now this project will be run successfully.
