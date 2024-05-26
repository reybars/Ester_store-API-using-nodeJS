import client from "./db.js"


export async function getProductController() {
    try {
        const product = await client.query('SELECT * FROM products');
        return product.rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    } finally {
        client.end();
    }
}

