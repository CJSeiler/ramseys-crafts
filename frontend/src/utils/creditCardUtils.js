const formatCCExpiry = str => {
    return str.replace(
        /[^0-9]/g, '' // To allow only numbers
    ).replace(
        /^([2-9])$/g, '0$1' // To handle 3 > 03
    ).replace(
        /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^0{1,}/g, '0' // To handle 00 > 0
    ).replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
    );
}

const checkExpiration = date => {
    const dateArr = date.split('/');
    const exYear = +dateArr[1] + 2000;
    const exMonth = +dateArr[0] - 1; // JS months start with 0

    const exDay = new Date(exYear,exMonth + 1,0).getDate();
    const dateObj = new Date(exYear,exMonth,exDay - 2); // Timezones fix.
    const dateNow = new Date();
    return dateNow > dateObj;
};

export { formatCCExpiry, checkExpiration }; 