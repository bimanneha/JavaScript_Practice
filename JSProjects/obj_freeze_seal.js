let profile = {
    name: 'Neha'
}

profile.age = 29;

console.log('Profile is : ', profile);

Object.freeze(profile); // Doesn't allow you to add New Properties
Object.seal(profile); // Doesn't allow you to add New Properties, but allows you to change values of existing properties

profile.name = 'Some Name';
profile.address = 'Bonn';

console.log('New profile is : ', profile);