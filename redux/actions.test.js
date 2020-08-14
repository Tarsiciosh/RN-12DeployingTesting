import * as actions from './actions'
// import everything as an abject called actions
/* global test, expect */

/*
test('updateUser returns an action', () => {
  expect(actions.updateUser({name: 'test name'})).toStrictEqual({
    type: actions.UPDATE_USER, 
    payload: {name: 'test name'}, 
  })
  expect(actions.updateUser({phone: '1234567890'})).toStrictEqual({
    type: actions.UPDATE_USER,
    payload: {phone: '1234567890'}
  })
})
*/

/*
   test('updateUser returns an action', () => {
    expect(actions.updateUser({name: 'test name'})).toMatchSnapshot()
  })
*/

describe('updateUser returns actions', () => {
  it('returns an action', () => {
    expect(actions.updateUser({name: 'test name'})).toMatchSnapshot()
  })

  it('handles an empty object', () => {
    expect(actions.updateUser({})).toMatchSnapshot()
  })
    
  it('handles an empty name', () => {
    expect(actions.updateUser({name:''})).toMatchSnapshot()
  })
}) 


describe('logInUser returns action', () => {
  //const dispatch = () => {}
  const errMessage = 'incorrect credentials'
  const fakeToken = 'thisIsATestToken' 
  const mockLogin = (username, password) => {
    if (username === 'u' && password === 'p') {
      return fakeToken
    } else {
      throw new Error(errMessage)
    }
  }

  it('dispatches LOG_IN_SENT', async () => {
    const mockDispatch = jest.fn()
    await actions.logInUser('','')(mockDispatch)
    //all the args that the mock fn was invoked on
    console.log(mockDispatch.mock.calls)
    expect(mockDispatch.mock.calls[0][0]).toEqual({type: 'LOG_IN_SENT'})
  })

  it('dispatches LOG_IN_FULFILLED with correct credentials', async () => {
    const mockDispatch = jest.fn()
    await actions.logInUser('u', 'p', mockLogin)(mockDispatch)  
    expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_FULFILLED, payload: fakeToken})
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })

  it('dispatches LOG_IN_REJECTED with incorrect credentials', async () => {
    const mockDispatch = jest.fn()
    await actions.logInUser('', '', mockLogin)(mockDispatch)  
    expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_REJECTED, payload: errMessage})
    expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
  })

})

mockLogin = (username, password) =>
{
  return {token: 'this is a real token'}
}