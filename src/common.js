import {Navigation} from 'react-native-navigation';

export function openMenu() {
    Navigation.mergeOptions('leftSideDrawer', {
        sideMenu: {
            left: {
                visible: true
            }
        }
    });
}

export function closeMenu() {
    Navigation.mergeOptions('leftSideDrawer', {
        sideMenu: {
            left: {
                visible: false
            }
        }
    });
}

export function navigationPush(target) {
    Navigation.push('App', {
        component: {
            name: target,
        }
    });
    closeMenu();
}

