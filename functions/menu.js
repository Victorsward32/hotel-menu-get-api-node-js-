const { MenueItem } = require('../menu');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(MenueItem),
    };
};
