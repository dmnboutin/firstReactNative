import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('./assets/signin.png')
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12,
                                icon: require('./assets/signup.png')
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'SignUp2',
                        options: {
                            bottomTab: {
                                text: 'Sign Up again',
                                fontSize: 12,
                                icon: require('./assets/signup.png')
                            }
                        }
                    },
                }
            ],
        }
    }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
});