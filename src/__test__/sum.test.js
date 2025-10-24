import { sum } from "../components/sum";

test('it should be the sum of two', () => { 
    const result = sum(3,4)
    
    //Assertion
    expect(result).toBe(7)
 })