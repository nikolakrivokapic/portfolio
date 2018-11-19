import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootEpic from './epics';

export default class Store {
    static configureStore() {
        const epicMiddleware = createEpicMiddleware();

        Store.redux = createStore(rootReducer, composeWithDevTools(
            applyMiddleware(epicMiddleware)
        ));

        epicMiddleware.run(rootEpic);

        return Store.redux;
    }
}

