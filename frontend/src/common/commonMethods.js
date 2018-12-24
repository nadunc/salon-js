
export function isUserTypeStylist(text) {
    return (text.toUpperCase() === 'Stylist'.toUpperCase());
}

export function isUserTypeSalon(text) {
    return (text.toUpperCase() === 'Salon'.toUpperCase());
}

export function isUserTypeAdmin(text) {
    return (text.toUpperCase() === 'Admin'.toUpperCase());
}