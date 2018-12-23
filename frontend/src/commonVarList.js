// const CONSTANTS = {
//     BACKEND_API_ROOT: 'http://localhost:3000'
// };

const CLIENT_ROUTES = {
    // ROOT: 'localhost:5000',
    HOME: '/',
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
    SEARCH: '/search',
    FAQ: '/faq',
    TERMS: '/terms',
    STYLIST: '/stylist/:id',
    DASHBOARD: '/dashboard',
    DASHBOARD_HOME: '/dashboard/home',
    DASHBOARD_CALENDAR: '/dashboard/calendar',
    DASHBOARD_PORTFOLIO: '/dashboard/portfolio',
    DASHBOARD_BOOKINGS: '/dashboard/bookings',
    DASHBOARD_SETTINGS: '/dashboard/settings',
    DASHBOARD_PREFERENCES: '/dashboard/preferences',
    DASHBOARD_CHANGE_PASSWORD: '/dashboard/change-password',

    DASHBOARD_PROFILE: '/dashboard/profile',
    DASHBOARD_USERS: '/dashboard/users',

};

const SERVER_ROUTES = {
    ROOT: 'http://localhost:5000',
    GET_AVAILABLE_STYLISTS:'/timeslots/stylists',
    GET_EXPERIENCES:'/experience'
};

export {
    // CONSTANTS,
    CLIENT_ROUTES,
    SERVER_ROUTES
}