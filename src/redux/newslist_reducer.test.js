import newsListReducer, {toggleIsLoading} from './newslist_reducer'

const state = {
    isLoading: false,
};

test('isLoading correct', () => {
    let action = toggleIsLoading(true);
    let newsState = newsListReducer(state, action)
    expect(newsState.isLoading).toBe(true);
});

