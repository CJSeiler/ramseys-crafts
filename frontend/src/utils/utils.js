const formatDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export { formatDate };  