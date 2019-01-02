let value = 0;

export default () => {
    let id = value++;
    return id.toString();
};

/* UUID is used to set the ID on the react date picker start and end dates and therefore needs to be mocked for testing*/
