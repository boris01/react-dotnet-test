import { populateRestaurantData } from "../http.js";
import { useHttp } from "../hooks/UseHttp.jsx";
import ErrorComponent from "./ErrorComponent.jsx";

export default function RestaurantsList({ loadingText, fallbackText }) {
  const {
    isLoading,
    httpData: restaurants,
    httpError:error,
  } = useHttp(populateRestaurantData, [], "Failed to fetch/post data");

  return (
    <div className="table-container">
      {error && <ErrorComponent title="An error occurred!" message={error.message} />}
      {!error && isLoading && <p className="fallback-text">{loadingText}</p>}
      {!error && !isLoading && restaurants.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!error && !isLoading && restaurants.length > 0 && (
        <table className="table" aria-labelledby="tableLabel">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Ads</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant,index) => (
              <tr key={index}>
                <td>{restaurant.name}</td>
                <td>{restaurant.email}</td>
                <td>{restaurant.ads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

}
