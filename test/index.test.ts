import { expect } from 'chai'
import { helloWorld } from '../lib'

describe('Hello function', () => {
    it('should return hello world', () => {
        expect(helloWorld()).to.equal('Hello, world')
    })
})
