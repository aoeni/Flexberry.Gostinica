import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gostinica.caption'),
          title: i18n.t('forms.application.sitemap.gostinica.title'),
          children: [{
            link: 'i-i-s-gostinica-обяз-сотр-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-обяз-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-обяз-сотр-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-gostinica-т-ч-обяз-сотр-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-т-ч-обяз-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-т-ч-обяз-сотр-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-gostinica-гостиница-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-гостиница-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-гостиница-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-gostinica-персонал-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-персонал-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-gostinica-должности-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-должности-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-gostinica-штат-распис-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-штат-распис-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-штат-распис-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-gostinica-т-ч-штат-расп-l',
            caption: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-т-ч-штат-расп-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica.i-i-s-gostinica-т-ч-штат-расп-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})