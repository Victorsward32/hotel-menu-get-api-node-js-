const { MenueItem } = require('../menu');

exports.handler = async (event, context) => {
    const { categoryId } = event.queryStringParameters;

    if (MenueItem[categoryId]) {
        return {
            statusCode: 200,
            body: JSON.stringify(MenueItem[categoryId]),
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Category not found' }),
        };
    }
};
