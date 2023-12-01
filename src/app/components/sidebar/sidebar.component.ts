import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Send Money',  icon:'send', class: '' },
    { path: '/table-list', title: 'Transfer Fund',  icon:'move_up', class: '' },
    { path: '/add-money', title: 'Add Money to Wallet',  icon:'account_balance_wallet', class: '' },
    { path: '/icons', title: 'Services',  icon:'volunteer_activism', class: '' },
    { path: '/maps', title: 'Messages',  icon:'inbox', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/logout', title: 'Logout',  icon:'power_settings_new', class: '' },
    { path: '/upgrade', title: 'Version 1.0.0',  icon:'upgrade', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
