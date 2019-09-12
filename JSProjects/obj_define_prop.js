let profile = {
    name: 'Neha'
};

Object.defineProperty(profile, 'age', {
    value: 3, writable: false
});

profile.name = 'Some Name';
profile.age = 29;

console.log('Profile is : ', profile);
