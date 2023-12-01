import { Component, OnInit } from '@angular/core';
import { Account } from 'app/_data-models/account';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.getAccounts();
      this.getPayees();
      this.getBillers();
      this.getTransactions();
  }

  accounts: Account[] = [];

  getAccounts() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/accounts.json').then(res => res.json())
        .then((data) => {
          this.accounts = data.accounts;
          resolve(this.accounts);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

  payees: any;

  getPayees() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/payees.json').then(res => res.json())
        .then((data) => {
          this.payees = data.payees;
          resolve(this.payees);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

  billers: any;

  getBillers() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/billers.json').then(res => res.json())
        .then((data) => {
          this.billers = data.billers;
          resolve(this.billers);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

  transactions: any;

  getTransactions() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/transactions.json').then(res => res.json())
        .then((data) => {
          this.transactions = data.transactions;
          resolve(this.transactions);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

}
