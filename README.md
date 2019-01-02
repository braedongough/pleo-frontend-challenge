# pleo-frontend-challenge

##description
This is a single page application fetching a list of expenses provided by a an API where a user can add a note and a receipt to the expense. [Pleo frontend-challene](https://github.com/pleo-io/frontend-challenge)

##installation
from the root of the project run:

```sh
yarn install
yarn dev-server
```

App is now running at `http://localhost:8080`

##requirements
I have chosen to build this app in React v16.0 using SASS and Redux. For testing, I'm using Jest with Enzyme. Overall, I'm just happy that I was able to get a functioning app that meets all of the general requirements. It took me about a week to complete and it's definitely still rough around the edges. I think this provides a solid bench-mark of my current understanding of React and Javascript.

The two parts of the project that I found hardest to implement were the infinite scrolling and the file uploading. For the file uploading, I opted for a library called FilePond which offered nice visual experience and also allows for drag and drop of files.

##future improvements & Nice to haves
The app is responsive for medium size screens but starts to look crazy on smaller size screens. Overall, I think my biggest weakness in web development is CSS and that shows throughout the app. Becoming more comfortable with styling apps

As mentioned, this app has been implemented with Redux but unfortunately not in Typescript. I'm keen to switch to Typescript over the next couple of months for future projects. It also doesn't support any localization.
