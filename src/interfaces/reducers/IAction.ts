
export default interface IAction {
    type: 'increment' | 'decrement' | 'multiplier' | 'diviser'| 'civilite';
    diviseur?: number;  
}