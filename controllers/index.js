function renderHomePage(req,res) {

  const homePageTitle = 'Home';

  const data = {
    title: homePageTitle
  }

  return res.render('index', {data});

}

module.exports = {renderHomePage};
