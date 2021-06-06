
export function seedDatabase(firebase) {
    const users = [
      {
        userId: '3g36Z40SjiPL3IlGzB8w2ewZJLY2',
        username: 'kaviya',
        fullName: 'Kaviya kumar',
        emailAddress: 'kaviya@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'tony',
        fullName: 'Tony Stark ',
        emailAddress: 'ironman@gmail.com',
        following: [],
        followers: ['3g36Z40SjiPL3IlGzB8w2ewZJLY2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'leo',
        fullName: 'Leo Labby',
        emailAddress: 'leothelab@gmail.com',
        following: [],
        followers: ['3g36Z40SjiPL3IlGzB8w2ewZJLY2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'shadow',
        fullName: 'shadow dash',
        emailAddress: 'shadow@gmail.com',
        following: [],
        followers: ['3g36Z40SjiPL3IlGzB8w2ewZJLY2'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/kaviya/${i}.jpg`,
          caption: ':) ',
          likes: [],
          comments: [
            {
              displayName: 'leo',
              comment: 'Beautiful!'
            },
            {
              displayName: 'shadow',
              comment: 'Nice Picture'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }