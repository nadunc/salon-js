const FromTimes = [
    {key: '00:00:00', text: '12 AM', value: '00:00:00', disabled: false},
    {key: '01:00:00', text: '01 AM', value: '01:00:00', disabled: false},
    {key: '02:00:00', text: '02 AM', value: '02:00:00', disabled: false},
    {key: '03:00:00', text: '03 AM', value: '03:00:00', disabled: false},
    {key: '04:00:00', text: '04 AM', value: '04:00:00', disabled: false},
    {key: '05:00:00', text: '05 AM', value: '05:00:00', disabled: false},
    {key: '06:00:00', text: '06 AM', value: '06:00:00', disabled: false},
    {key: '07:00:00', text: '07 AM', value: '07:00:00', disabled: false},
    {key: '08:00:00', text: '08 AM', value: '08:00:00', disabled: false},
    {key: '09:00:00', text: '09 AM', value: '09:00:00', disabled: false},
    {key: '10:00:00', text: '10 AM', value: '10:00:00', disabled: false},
    {key: '11:00:00', text: '11 AM', value: '11:00:00', disabled: false},
    {key: '12:00:00', text: '12 PM', value: '12:00:00', disabled: false},
    {key: '13:00:00', text: '01 PM', value: '13:00:00', disabled: false},
    {key: '14:00:00', text: '02 PM', value: '14:00:00', disabled: false},
    {key: '15:00:00', text: '03 PM', value: '15:00:00', disabled: false},
    {key: '16:00:00', text: '04 PM', value: '16:00:00', disabled: false},
    {key: '17:00:00', text: '05 PM', value: '17:00:00', disabled: false},
    {key: '18:00:00', text: '06 PM', value: '18:00:00', disabled: false},
    {key: '19:00:00', text: '07 PM', value: '19:00:00', disabled: false},
    {key: '20:00:00', text: '08 PM', value: '20:00:00', disabled: false},
    {key: '21:00:00', text: '09 PM', value: '21:00:00', disabled: false},
    {key: '22:00:00', text: '10 PM', value: '22:00:00', disabled: false},
    {key: '23:00:00', text: '11 PM', value: '23:00:00', disabled: false}
]

const ToTimes = [
    {key: '01:00:00', text: '01 AM', value: '01:00:00', disabled: false},
    {key: '02:00:00', text: '02 AM', value: '02:00:00', disabled: false},
    {key: '03:00:00', text: '03 AM', value: '03:00:00', disabled: false},
    {key: '04:00:00', text: '04 AM', value: '04:00:00', disabled: false},
    {key: '05:00:00', text: '05 AM', value: '05:00:00', disabled: false},
    {key: '06:00:00', text: '06 AM', value: '06:00:00', disabled: false},
    {key: '07:00:00', text: '07 AM', value: '07:00:00', disabled: false},
    {key: '08:00:00', text: '08 AM', value: '08:00:00', disabled: false},
    {key: '09:00:00', text: '09 AM', value: '09:00:00', disabled: false},
    {key: '10:00:00', text: '10 AM', value: '10:00:00', disabled: false},
    {key: '11:00:00', text: '11 AM', value: '11:00:00', disabled: false},
    {key: '12:00:00', text: '12 PM', value: '12:00:00', disabled: false},
    {key: '13:00:00', text: '01 PM', value: '13:00:00', disabled: false},
    {key: '14:00:00', text: '02 PM', value: '14:00:00', disabled: false},
    {key: '15:00:00', text: '03 PM', value: '15:00:00', disabled: false},
    {key: '16:00:00', text: '04 PM', value: '16:00:00', disabled: false},
    {key: '17:00:00', text: '05 PM', value: '17:00:00', disabled: false},
    {key: '18:00:00', text: '06 PM', value: '18:00:00', disabled: false},
    {key: '19:00:00', text: '07 PM', value: '19:00:00', disabled: false},
    {key: '20:00:00', text: '08 PM', value: '20:00:00', disabled: false},
    {key: '21:00:00', text: '09 PM', value: '21:00:00', disabled: false},
    {key: '22:00:00', text: '10 PM', value: '22:00:00', disabled: false},
    {key: '23:00:00', text: '11 PM', value: '23:00:00', disabled: false},
    {key: '00:00:00', text: '12 AM', value: '00:00:00', disabled: false},
]

const Prices = [
    {key: 'price_dw_lth', text: 'Low to High', value: 'lth'},
    {key: 'price_dw_htl', text: 'High to Low', value: 'htl'}
]

const Ratings = [
    {key: 'rating_dw_any', text: 'Any', value: '0'},
    {key: 'rating_dw_1', text: '1 Star or Higher', value: '1'},
    {key: 'rating_dw_2', text: '2 Stars or Higher', value: '2'},
    {key: 'rating_dw_3', text: '3 Star or Higher', value: '3'},
    {key: 'rating_dw_4', text: '4 Star or Higher', value: '4'},
    {key: 'rating_dw_5', text: '5 Stars', value: '5'}
]

const Roles = [
    {key: 'stylist', text: 'Stylist', value: '1'},
    {key: 'educator', text: 'Educator', value: '2'}
]
const RolesStylist = [
    {key: 'stylist', text: 'Stylist', value: '1'}
]

export default {
    FromTimes,
    ToTimes,
    Prices,
    Ratings,
    Roles,
    RolesStylist
}