import moment from 'moment';

function greet() {
    const day = moment().format('dddd');
    console.log('Have a great ' + day + '!');
};

export default greet;
