const dummyResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyResponse) setTimeout(() => resolve(dummyResponse), 500);
    else reject("Some error occured! Please try again");
  });
}

export default featureFlagsDataServiceCall;
