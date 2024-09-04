import React, { useState } from "react";

enum InnerPage {
    HomePage = "Home",
    GamePage = "Games"
}
  
class Constants {
    static homePageDescriptionText = "Here at C4tbot Studios, we are a software first studio accepting those who have the ideas for a user application, but lack the software knowhow. We help to bridge the gap between ideas and reality.";
    static gamesPageDescriptionText = "This is a test!";
}

const ExampleModule = () => {
    const [viewState, setViewState] = useState<InnerPage>(InnerPage.HomePage)

    const getViewText = (): string => {
      switch (viewState) {
        case InnerPage.HomePage:
          return Constants.homePageDescriptionText;
        case InnerPage.GamePage:
          return Constants.gamesPageDescriptionText;
      }
    }
  
    const CreateButton = (page: InnerPage): JSX.Element => {
      return (
        <button onClick={() => setViewState(page)}>
          {page}
        </button>
      )
    }

    return {
        CreateButton,
        getViewText,
        InnerPage
    }
}

export default ExampleModule;