import Component from './component';

export default class CustComponent extends Component {
    print() {
        return super.print() + ' and cust code';
    }
}