import authReducer from '../../reducers/auth'

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should set login state', () => {
    const uid = 'asdf124'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({ uid })
})

test('should set logout state', () => {
    const action = {
        type: 'LOGOUT'
    }
    const prevState = {
        uid: '431345adf'
    }
    const state = authReducer(prevState, action)
    expect(state).toEqual({})
})