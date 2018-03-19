const RequireComponent = require('./requireComponent').default;

export default class RequireComponentCust extends RequireComponent {
    print() {
        return super.print() + ' and require cust code';
    }
}