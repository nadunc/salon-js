// const CONSTANTS = {
//     BACKEND_API_ROOT: 'http://localhost:3000'
// };

const CLIENT_ROUTES = {
    // ROOT: 'localhost:5000',
    HOME: '/',
    SIGN_IN: '/signin',
    SIGN_OUT: '/signout',
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
    DASHBOARD_BOOKING_REQUESTS: '/dashboard/booking-requests',
    DASHBOARD_SETTINGS: '/dashboard/settings',
    DASHBOARD_PREFERENCES: '/dashboard/preferences',
    DASHBOARD_CHANGE_PASSWORD: '/dashboard/change-password',

    DASHBOARD_PROFILE: '/dashboard/profile',
    DASHBOARD_USERS: '/dashboard/users',

};

const SERVER_ROOT = 'http://localhost:5000';

const SERVER_ROUTES = {
    ROOT: SERVER_ROOT,
    GET_AVAILABLE_STYLISTS: SERVER_ROOT+'/timeslots/stylists',
    GET_EXPERIENCES: SERVER_ROOT+'/experiences',
    LOGIN: SERVER_ROOT+'/users/login',
    SIGN_UP_STYLIST: SERVER_ROOT+'/stylists',
    SIGN_UP_SALON: SERVER_ROOT+'/salons',
    GET_STYLISTS: SERVER_ROOT+'/stylists',
    GET_FEEDBACKS_BY_STYLIST: SERVER_ROOT+'/feedbacks',
    GET_RATING_BY_STYLIST: SERVER_ROOT+'/feedbacks/:id/rating',
    UPDATE_STYLIST: SERVER_ROOT+'/stylists',
    ADD_TIMESLOT: SERVER_ROOT+'/timeslots',
    STYLISTS_ALL_AVAILABLE_TIMESLOTS: SERVER_ROOT+'/timeslots/my/all',
    GET_BOOKING_REQUESTS: SERVER_ROOT+'/bookings/requests',
    GET_NOTIFICATIONS: SERVER_ROOT+'/notifications',
    ADD_BOOKING: SERVER_ROOT+'/bookings',
    REJECT_BOOKING: SERVER_ROOT+'/bookings/reject',
    ACCEPT_BOOKING: SERVER_ROOT+'/bookings/accept',
    GET_BOOKINGS_BY_STYLIST: SERVER_ROOT+'/bookings/stylist',
    GET_BOOKINGS_BY_SALON: SERVER_ROOT+'/bookings/salon',
    ADD_FEEDBACK: SERVER_ROOT+'/feedbacks',

};

const COMMON_ERROR_MESSAGE = 'Something went wrong. Please refresh the page';

export {
    // CONSTANTS,
    CLIENT_ROUTES,
    SERVER_ROUTES,
    COMMON_ERROR_MESSAGE
}