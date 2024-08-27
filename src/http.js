export async function populateRestaurantData() {
    const response = await fetch('http://localhost:32769/Restaurants', { mode: 'cors', });

    if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();
    return data;
}

export async function insertNewRestaurant(resturant) {
    const response = await fetch('http://localhost:32769/Restaurants/InsertRestaurant', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(resturant),
        headers: {
            'Content-Type': 'application/json',

        },
    });



    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }
    const resData = await response.json();
    return resData.message;
}