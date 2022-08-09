// class ItcTabs {
//   constructor(target, config) {
//     const defaultConfig = {};
//     this._config = Object.assign(defaultConfig, config);
//     this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//     this._elButtons = this._elTabs.querySelectorAll('.account__tabs_link');
//     this._elPanes = this._elTabs.querySelectorAll('.account__tabs_pane');
//     this._eventShow = new Event('tab.itc.change');
//     this._init();
//     this._events();
//   }
//   _init() {
//     this._elTabs.setAttribute('role', 'tablist');
//     this._elButtons.forEach((el, index) => {
//       el.dataset.index = index;
//       el.setAttribute('role', 'tab');
//       this._elPanes[index].setAttribute('role', 'tabpanel');
//     });
//   }
//   show(elLinkTarget) {
//     const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//     const elLinkActive = this._elTabs.querySelector('.account__tabs_link_active');
//     const elPaneShow = this._elTabs.querySelector('.account__tabs_pane_show');
//     if (elLinkTarget === elLinkActive) {
//       return;
//     }
//     elLinkActive ? elLinkActive.classList.remove('account__tabs_link_active') : null;
//     elPaneShow ? elPaneShow.classList.remove('account__tabs_pane_show') : null;
//     elLinkTarget.classList.add('account__tabs_link_active');
//     elPaneTarget.classList.add('account__tabs_pane_show');
//     this._elTabs.dispatchEvent(this._eventShow);
//     elLinkTarget.focus();
//   }
//   showByIndex(index) {
//     const elLinkTarget = this._elButtons[index];
//     elLinkTarget ? this.show(elLinkTarget) : null;
//   };
//   _events() {
//     this._elTabs.addEventListener('click', (e) => {
//       const target = e.target.closest('.account__tabs_link');
//       if (target) {
//         e.preventDefault();
//         this.show(target);
//       }
//     });
//   }
// };
// new ItcTabs('.account__tabs');