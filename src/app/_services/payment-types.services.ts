import {Injectable } from '@angular/core';
import { paymentTypes } from '../_model/payment-type';

@Injectable()

export class PaymentService {
    paymentTypes: paymentTypes[] = [
        { id: 1, name: "Direct Bank Transfare" },
        { id: 2, name: "Cheque Payment" },
        { id: 3, name: "Paypal" },
        { id: 4, name: "Visa" },
        { id: 5, name: "Mastercard" },
        { id: 6, name: "On Dilivery" },

    ];
    getAllPayment(){
        return this.paymentTypes.slice();

    }

    constructor(){}
}