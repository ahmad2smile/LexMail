import * as WeatherForecasts from './WeatherForecasts';
import templatesFetch from "../reducers/templatesFetchReducer";
import templatesDefault from "../reducers/templatesDefaultReducer";
import templatesCreate from "../reducers/templatesCreateReducer";
import singleTemplateFetch from "../reducers/singleTemplateFetchReducer";

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    templatesFetch: templatesFetch,
    templatesDefault: templatesDefault,
    templatesCreate: templatesCreate,
    singleTemplateFetch: singleTemplateFetch,
    weatherForecasts: WeatherForecasts.reducer
};
