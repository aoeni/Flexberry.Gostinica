import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gostinica-гостиница-l');
  this.route('i-i-s-gostinica-гостиница-e',
  { path: 'i-i-s-gostinica-гостиница-e/:id' });
  this.route('i-i-s-gostinica-гостиница-e.new',
  { path: 'i-i-s-gostinica-гостиница-e/new' });
  this.route('i-i-s-gostinica-должности-l');
  this.route('i-i-s-gostinica-должности-e',
  { path: 'i-i-s-gostinica-должности-e/:id' });
  this.route('i-i-s-gostinica-должности-e.new',
  { path: 'i-i-s-gostinica-должности-e/new' });
  this.route('i-i-s-gostinica-обяз-сотр-l');
  this.route('i-i-s-gostinica-обяз-сотр-e',
  { path: 'i-i-s-gostinica-обяз-сотр-e/:id' });
  this.route('i-i-s-gostinica-обяз-сотр-e.new',
  { path: 'i-i-s-gostinica-обяз-сотр-e/new' });
  this.route('i-i-s-gostinica-персонал-l');
  this.route('i-i-s-gostinica-персонал-e',
  { path: 'i-i-s-gostinica-персонал-e/:id' });
  this.route('i-i-s-gostinica-персонал-e.new',
  { path: 'i-i-s-gostinica-персонал-e/new' });
  this.route('i-i-s-gostinica-т-ч-обяз-сотр-l');
  this.route('i-i-s-gostinica-т-ч-обяз-сотр-e',
  { path: 'i-i-s-gostinica-т-ч-обяз-сотр-e/:id' });
  this.route('i-i-s-gostinica-т-ч-обяз-сотр-e.new',
  { path: 'i-i-s-gostinica-т-ч-обяз-сотр-e/new' });
  this.route('i-i-s-gostinica-т-ч-штат-расп-l');
  this.route('i-i-s-gostinica-т-ч-штат-расп-e',
  { path: 'i-i-s-gostinica-т-ч-штат-расп-e/:id' });
  this.route('i-i-s-gostinica-т-ч-штат-расп-e.new',
  { path: 'i-i-s-gostinica-т-ч-штат-расп-e/new' });
  this.route('i-i-s-gostinica-штат-распис-l');
  this.route('i-i-s-gostinica-штат-распис-e',
  { path: 'i-i-s-gostinica-штат-распис-e/:id' });
  this.route('i-i-s-gostinica-штат-распис-e.new',
  { path: 'i-i-s-gostinica-штат-распис-e/new' });
});

export default Router;
